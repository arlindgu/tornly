"use client";

import { useEffect, useState } from "react";
import getUserLogs, {
  continueGetAllUserLogsNewer,
  continueGetAllUserLogsOlder,
  getAllUserLogs,
  getUserCreationDate,
  UserLogResponse,
} from "@/lib/api/user/log";
import { isSuccess, TornResponse } from "@/lib/api/errors/errors";
import { db } from "@/lib/db";
import {
  getLatestTimestamp,
  getOldestTimestamp,
} from "@/components/database/LogTimestamp";
import { LogSaver } from "./LogSaver";
import { toast } from "sonner";

interface LogFetcherProps<D, P> {
  logsToFetch: number;
}

export function LogFetcher<D, P>({ logsToFetch }: LogFetcherProps<D, P>) {
  const logType = `log${logsToFetch}` as keyof typeof db;

  const [logs, setLogs] = useState<TornResponse<UserLogResponse<D, P>> | null>(
    null,
  );

  useEffect(() => {
    async function fetchLogs() {
      const toastId = `sync-${logType}`;

      toast.loading(`Checking ${logType}...`, { id: toastId });

      const oldestTimestamp = await getOldestTimestamp(logType);
      const latestTimestamp = await getLatestTimestamp(logType);
      const currentTime = Math.floor(Date.now() / 1000);

      const table = db.table(logType as string);
      const count = await table.count();

      if (count === 0) {
        console.log(`[${logType}] DB empty, fetching all...`);
        toast.loading(`Fetching all logs for ${logType}...`, { id: toastId });
        const logs = await getAllUserLogs<D, P>({ log: [logsToFetch] });

        if (isSuccess(logs)) {
          toast.success(`Synced ${logs.data.log.length} logs for ${logType}`, {
            id: toastId,
          });
        } else {
          toast.error(`Failed to fetch logs for ${logType}`, { id: toastId });
        }

        setLogs(logs);
        return;
      }

      toast.loading(`Checking for updates...`, { id: toastId });

      const accountCreationTime = await getUserCreationDate();

      let checkOlder = await getUserLogs<D, P>({
        log: [logsToFetch],
        from: accountCreationTime.data?.log[2].timestamp,
        to: oldestTimestamp ? oldestTimestamp : undefined,
        limit: 100,
      });
      console.log(logType, "checkOlder");
      console.log(checkOlder);

      const needsCompletion = (checkOlder.data?.log.length ?? 0) > 0;

      let checkNewer = await getUserLogs<D, P>({
        log: [logsToFetch],
        from: latestTimestamp ? latestTimestamp + 1 : undefined,
        to: currentTime,
        limit: 100,
      });

      const needsUpdate = (checkNewer.data?.log.length ?? 0) > 0;

      if (!needsCompletion && !needsUpdate) {
        console.log(`[${logType}] Already synced!`);
        toast.success(`${logType} is up to date (${count} logs)`, {
          id: toastId,
        });
        return;
      }

      if (needsCompletion) {
        console.log(`[${logType}] Fetching older logs...`);
        toast.loading(`Fetching older logs for ${logType}...`, { id: toastId });
        const logs = await continueGetAllUserLogsOlder<D, P>({
          log: [logsToFetch],
          from: accountCreationTime.data?.log[2].timestamp,
          to: oldestTimestamp ? oldestTimestamp : undefined,
          limit: 100,
        });
        console.log(logs);

        if (isSuccess(logs)) {
          toast.success(
            `Synced ${logs.data.log.length} older logs for ${logType}`,
            { id: toastId },
          );
        } else {
          toast.error(`Failed to fetch older logs for ${logType}`, {
            id: toastId,
          });
        }

        setLogs(logs);
        return;
      }

      if (needsUpdate) {
        console.log(`[${logType}] Fetching newer logs...`);
        toast.loading(`Fetching newer logs for ${logType}...`, { id: toastId });
        const logs = await continueGetAllUserLogsNewer<D, P>({
          log: [logsToFetch],
          to: currentTime,
          from: latestTimestamp ? latestTimestamp : undefined,
          limit: 100,
        });
        console.log(logs);

        if (isSuccess(logs)) {
          toast.success(
            `Synced ${logs.data.log.length} newer logs for ${logType}`,
            { id: toastId },
          );
        } else {
          toast.error(`Failed to fetch newer logs for ${logType}`, {
            id: toastId,
          });
        }

        setLogs(logs);
      }
    }

    fetchLogs();
  }, [logsToFetch, logType]);

  return (
    <>
      {logs && isSuccess(logs) && (
        <LogSaver logs={logs.data.log} logType={logType} />
      )}
    </>
  );
}
