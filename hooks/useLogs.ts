// hooks/useLogs.ts
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { db } from "@/lib/db";
import {
  continueGetAllUserLogsNewer,
  continueGetAllUserLogsOlder,
  getAllUserLogs,
  getUserCreationDate,
  getUserLogs,
  UserLogResponse,
} from "@/lib/api/user/log";
import { isSuccess, TornResponse } from "@/lib/api/errors/errors";
import {
  getLatestTimestamp,
  getOldestTimestamp,
} from "@/components/database/LogTimestamp";

type UserCreationDateResult = Awaited<ReturnType<typeof getUserCreationDate>>;

let userCreationDateCache: UserCreationDateResult | null = null;

async function getCachedUserCreationDate() {
  if (!userCreationDateCache) {
    userCreationDateCache = await getUserCreationDate();
  }
  return userCreationDateCache;
}

// ✅ Cache-Helper für Last Sync Time
const SYNC_INTERVAL = 15 * 60 * 1000; // 15 Minuten in Millisekunden

function getLastSyncTime(logsToFetch: number): number | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(`log${logsToFetch}_last_sync`);
  return stored ? parseInt(stored, 10) : null;
}

function setLastSyncTime(logsToFetch: number): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(`log${logsToFetch}_last_sync`, Date.now().toString());
}

function shouldSync(logsToFetch: number): boolean {
  const lastSync = getLastSyncTime(logsToFetch);
  if (!lastSync) return true; // Noch nie gesynct
  
  const timeSinceLastSync = Date.now() - lastSync;
  return timeSinceLastSync >= SYNC_INTERVAL;
}

interface UseLogsOptions {
  logsToFetch: number;
  autoFetch?: boolean;
  syncInterval?: number; // Optional: Custom interval in Minuten
}

export function useLogs<D, P>({ 
  logsToFetch, 
  autoFetch = true,
  syncInterval = 15 // Standard: 15 Minuten
}: UseLogsOptions) {
  const logType = `log${logsToFetch}` as keyof typeof db;
  
  const [logs, setLogs] = useState<TornResponse<UserLogResponse<D, P>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSynced, setIsSynced] = useState(false);

  const fetchAndSyncLogs = async (force = false) => {
    // ✅ Skip wenn zu früh (außer force=true)
    if (!force && !shouldSync(logsToFetch)) {
      setIsSynced(true);
      return;
    }

    const toastId = `sync-log${logsToFetch}`;
    setIsLoading(true);

    try {
      toast.loading(`Checking log${logsToFetch}...`, { id: toastId });

      const [oldestTimestamp, latestTimestamp, count] = await Promise.all([
        getOldestTimestamp(logType),
        getLatestTimestamp(logType),
        db.table(logType as string).count(),
      ]);

      const currentTime = Math.floor(Date.now() / 1000);

      if (count === 0) {
        toast.loading(`Fetching all logs for log${logsToFetch}...`, { id: toastId });
        const fetchedLogs = await getAllUserLogs<D, P>({ log: [logsToFetch] });

        if (isSuccess(fetchedLogs)) {
          await saveLogs(fetchedLogs.data.log);
          setLastSyncTime(logsToFetch); // ✅ Timestamp setzen
          toast.success(
            `Synced ${fetchedLogs.data.log.length} logs for log${logsToFetch}`,
            { id: toastId, duration: 3000 }
          );
          setLogs(fetchedLogs);
          setIsSynced(true);
        } else {
          toast.error(`Failed to fetch logs for log${logsToFetch}`, { id: toastId });
        }
        return;
      }

      toast.loading(`Checking log${logsToFetch} for updates...`, { id: toastId });

      const [accountCreationTime, checkOlder, checkNewer] = await Promise.all([
        getCachedUserCreationDate(),
        getUserLogs<D, P>({
          log: [logsToFetch],
          from: (await getCachedUserCreationDate()).data?.log[2].timestamp,
          to: oldestTimestamp ? oldestTimestamp : undefined,
          limit: 100,
        }),
        getUserLogs<D, P>({
          log: [logsToFetch],
          from: latestTimestamp ? latestTimestamp + 1 : undefined,
          to: currentTime,
          limit: 100,
        }),
      ]);

      const needsCompletion = (checkOlder.data?.log.length ?? 0) > 0;
      const needsUpdate = (checkNewer.data?.log.length ?? 0) > 0;

      if (!needsCompletion && !needsUpdate) {
        setLastSyncTime(logsToFetch); // ✅ Timestamp setzen
        toast.success(`log${logsToFetch} is up to date (${count} logs)`, {
          id: toastId,
          duration: 3000,
        });
        setIsSynced(true);
        return;
      }

      if (needsCompletion) {
        toast.loading(`Fetching older logs for log${logsToFetch}...`, { id: toastId });
        const fetchedLogs = await continueGetAllUserLogsOlder<D, P>({
          log: [logsToFetch],
          from: accountCreationTime.data?.log[2].timestamp,
          to: oldestTimestamp ? oldestTimestamp : undefined,
          limit: 100,
        });

        if (isSuccess(fetchedLogs)) {
          await saveLogs(fetchedLogs.data.log);
          setLastSyncTime(logsToFetch); // ✅ Timestamp setzen
          toast.success(
            `Synced ${fetchedLogs.data.log.length} older logs for log${logsToFetch}`,
            { id: toastId, duration: 3000 }
          );
          setLogs(fetchedLogs);
          setIsSynced(true);
        } else {
          toast.error(`Failed to fetch older logs for log${logsToFetch}`, { id: toastId });
        }
        return;
      }

      if (needsUpdate) {
        toast.loading(`Fetching newer logs for log${logsToFetch}...`, { id: toastId });
        const fetchedLogs = await continueGetAllUserLogsNewer<D, P>({
          log: [logsToFetch],
          to: currentTime,
          from: latestTimestamp ? latestTimestamp : undefined,
          limit: 100,
        });

        if (isSuccess(fetchedLogs)) {
          await saveLogs(fetchedLogs.data.log);
          setLastSyncTime(logsToFetch); // ✅ Timestamp setzen
          toast.success(
            `Synced ${fetchedLogs.data.log.length} newer logs for log${logsToFetch}`,
            { id: toastId, duration: 3000 }
          );
          setLogs(fetchedLogs);
          setIsSynced(true);
        } else {
          toast.error(`Failed to fetch newer logs for log${logsToFetch}`, { id: toastId });
        }
      }
    } catch (error) {
      toast.error(`Error syncing log${logsToFetch}`, {
        id: `sync-log${logsToFetch}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveLogs = async (logsToSave: any[]) => {
    try {
      const table = db.table(logType as string);
      if (!table) {
        console.error(`Table ${String(logType)} not found`);
        return;
      }
      await table.bulkPut(logsToSave);
    } catch (error) {
      console.error(`Failed to save logs for ${logType}:`, error);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchAndSyncLogs();
    }
  }, [logsToFetch, autoFetch]);

  return {
    logs,
    isLoading,
    isSynced,
    refetch: fetchAndSyncLogs, // Manuell mit force=true: refetch(true)
  };
}