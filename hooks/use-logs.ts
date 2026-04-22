// hooks/useLogs.ts
'use client';

import { useEffect, useState, useCallback } from 'react';
import { toast } from 'sonner';
import { logSync } from '@/lib/services/log.sync';

// Storage helpers (können auch in storage.service.ts)
function getLastSyncTime(key: string): number | null {
    if (typeof window === 'undefined') return null;
    try {
        const stored = localStorage.getItem(`${key}_last_sync`);
        return stored ? parseInt(stored, 10) : null;
    } catch {
        return null;
    }
}

function setLastSyncTime(key: string): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(`${key}_last_sync`, Date.now().toString());
    } catch { }
}

function shouldSync(key: string, intervalMs: number): boolean {
    const lastSync = getLastSyncTime(key);
    if (!lastSync) return true;
    return Date.now() - lastSync >= intervalMs;
}

interface UseLogsOptions {
    logsToFetch: number;
    autoFetch?: boolean;
    syncInterval?: number; // in Minuten
}

export function useLogs<D, P>({
    logsToFetch,
    autoFetch = true,
    syncInterval = 15,
}: UseLogsOptions) {
    const [state, setState] = useState({
        isLoading: false,
        isSynced: false,
        error: null as string | null,
    });

    const fetchAndSync = useCallback(
        async (force = false) => {
            const syncKey = `log${logsToFetch}`;
            const intervalMs = syncInterval * 60 * 1000;

            // Skip wenn zu früh
            if (!force && !shouldSync(syncKey, intervalMs)) {
                setState((s) => ({ ...s, isSynced: true }));
                return;
            }

            const toastId = `sync-${syncKey}`;
            setState((s) => ({ ...s, isLoading: true, error: null }));

            try {
                toast.loading(`Checking ${syncKey}...`, { id: toastId });

                // ✅ Business Logic im Service!
                const result = await logSync.syncLogs<D, P>(logsToFetch);

                if (result.success) {
                    setLastSyncTime(syncKey);

                    const messages = {
                        initial: `Synced ${result.count} logs`,
                        older: `Synced ${result.count} older logs`,
                        newer: `Synced ${result.count} newer logs`,
                        uptodate: `Up to date (${result.count} logs)`,
                    };

                    toast.success(messages[result.action], {
                        id: toastId,
                        duration: 3000,
                    });

                    setState({
                        isLoading: false,
                        isSynced: true,
                        error: null,
                    });
                } else {
                    throw new Error(result.error || 'Sync failed');
                }
            } catch (error) {
                const errorMsg = error instanceof Error ? error.message : 'Unknown error';
                setState((s) => ({
                    ...s,
                    isLoading: false,
                    error: errorMsg,
                }));
                toast.error(`Error: ${errorMsg}`, { id: toastId });
            }
        },
        [logsToFetch, syncInterval]
    );

    useEffect(() => {
        if (!autoFetch) return;

        let cancelled = false;

        fetchAndSync().then(() => {
            if (!cancelled) {
                // success
            }
        });

        return () => {
            cancelled = true;
        };
    }, [autoFetch, fetchAndSync]);

    return {
        ...state,
        refetch: fetchAndSync,
    };
}