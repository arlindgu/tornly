// lib/services/logs/log.sync.ts
 import {
    getAllUserLogs,
    getUserLogs,
    getUserCreationDate,
    continueGetAllUserLogsOlder,
    continueGetAllUserLogsNewer,
} from '@/lib/api/user/log';
import { isSuccess } from '@/lib/api/errors/errors';
import { getOldestTimestamp, getLatestTimestamp, getLogsCount, saveLogsToDB } from './log.db';

// Memory cache
const cache = new Map<string, any>();

async function getCachedCreationDate() {
    if (cache.has('creation_date')) {
        return cache.get('creation_date');
    }
    const result = await getUserCreationDate();
    cache.set('creation_date', result);
    return result;
}

type SyncResult = {
    success: boolean;
    action: 'initial' | 'older' | 'newer' | 'uptodate';
    count: number;
    error?: string;
};

export const logSync = {
    async syncLogs<D, P>(logsToFetch: number): Promise<SyncResult> {
        const logType = `log${logsToFetch}` as any;

        try {

            const oldest = await getOldestTimestamp(logType);
            const latest = await getLatestTimestamp(logType);
            const count = await getLogsCount(logType);
            const currentTime = Math.floor(Date.now() / 1000);

            // 2. Initial sync
            if (count === 0) {
                const result = await getAllUserLogs<D, P>({ log: [logsToFetch] });
                if (isSuccess(result)) {
                    await saveLogsToDB(logType, result.data.log);
                    return {
                        success: true,
                        action: 'initial',
                        count: result.data.log.length,
                    };
                }
                throw new Error('Failed to fetch initial logs');
            }

            // 3. Check for gaps
            const creationDate = await getCachedCreationDate();

            const [checkOlder, checkNewer] = await Promise.all([
                getUserLogs<D, P>({
                    log: [logsToFetch],
                    from: creationDate.data?.log[2].timestamp,
                    to: oldest ?? undefined,
                    limit: 100,
                }),
                getUserLogs<D, P>({
                    log: [logsToFetch],
                    from: latest ? latest + 1 : undefined,
                    to: currentTime,
                    limit: 100,
                }),
            ]);

            const needsOlder = (checkOlder.data?.log.length ?? 0) > 0;
            const needsNewer = (checkNewer.data?.log.length ?? 0) > 0;

            // 4. Up to date
            if (!needsOlder && !needsNewer) {
                return { success: true, action: 'uptodate', count };
            }

            // 5. Fetch older
            if (needsOlder) {
                const result = await continueGetAllUserLogsOlder<D, P>({
                    log: [logsToFetch],
                    from: creationDate.data?.log[2].timestamp,
                    to: oldest ?? undefined,
                    limit: 100,
                });

                if (isSuccess(result)) {
                    await saveLogsToDB(logType, result.data.log);
                    return {
                        success: true,
                        action: 'older',
                        count: result.data.log.length,
                    };
                }
            }

            // 6. Fetch newer
            if (needsNewer) {
                const result = await continueGetAllUserLogsNewer<D, P>({
                    log: [logsToFetch],
                    from: latest ?? undefined,
                    to: currentTime,
                    limit: 100,
                });

                if (isSuccess(result)) {
                    await saveLogsToDB(logType, result.data.log);
                    return {
                        success: true,
                        action: 'newer',
                        count: result.data.log.length,
                    };
                }
            }

            throw new Error('Sync failed');

        } catch (error) {
            return {
                success: false,
                action: 'uptodate',
                count: 0,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    },
};