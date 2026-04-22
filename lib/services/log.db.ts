
"use client";

import { db } from "@/lib/db";
import { Log } from "@/lib/api/user/log";



export async function getLatestTimestamp(
    logType: keyof typeof db,
): Promise<number | null> {
    const table = db[logType] as any;
    const log = await table.orderBy("timestamp").last();
    return log?.timestamp ?? null;
}

export async function getOldestTimestamp(
    logType: keyof typeof db,
): Promise<number | null> {
    const table = db[logType] as any;
    const log = await table.orderBy("timestamp").first();
    return log?.timestamp ?? null;
}

export async function getLogsCount(logType: keyof typeof db): Promise<number> {
    const table = db[logType] as any;
    return await table.count();
}

export async function hasLogs(logType: keyof typeof db): Promise<boolean> {
    const count = await getLogsCount(logType);
    return count > 0;
}

export async function getLogsInRange<D, P>(
    logType: keyof typeof db,
    startTimestamp: number,
    endTimestamp: number,
): Promise<Log<D, P>[]> {
    const table = db[logType] as any;
    return await table
        .where("timestamp")
        .between(startTimestamp, endTimestamp, true, true)
        .toArray();
}

export async function getAllLogs<D, P>(
    logType: keyof typeof db,
): Promise<Log<D, P>[]> {
    const table = db[logType] as any;
    return await table.toArray();
}

export async function saveLogsToDB<D, P>(
    logType: keyof typeof db,
     logs: Log<D, P>[],
): Promise<{ success: boolean; error?: string }> {
    try {
        const table = db[logType] as any;
        await table.bulkPut(logs);

        return { success: true };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

