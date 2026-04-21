
"use client";

import { db } from "@/lib/db";
import { Log } from "@/lib/api/user/log";

export async function getLatestTimestamp(
  logType: keyof typeof db,
): Promise<number | null> {
  const table = db[logType] as any;
  const logs = await table.toArray();

  if (logs.length === 0) return null;

  return Math.max(...logs.map((log: Log<any, any>) => log.timestamp));
}

export async function getOldestTimestamp(
  logType: keyof typeof db,
): Promise<number | null> {
  const table = db[logType] as any;
  const logs = await table.toArray();

  if (logs.length === 0) return null;

  return Math.min(...logs.map((log: Log<any, any>) => log.timestamp));
}
