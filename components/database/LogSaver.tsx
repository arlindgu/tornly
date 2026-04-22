"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Log } from "@/lib/api/user/log";

interface LogSaverProps<D, P> {
  logType: keyof typeof db;
  logs: Log<D, P>[];
}

export function LogSaver<D, P>({ logType, logs }: LogSaverProps<D, P>) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    async function save() {
      try {
        // ✅ Über db.tables zugreifen
        const table = db.table(logType as string);

        if (!table) {
          console.error(`Table ${String(logType)} not found`);
          return;
        }

        await table.bulkPut(logs);
        setIsSaved(true);
      } catch (error) {
      }
    }

    if (logs.length > 0) {
      save();
    }
  }, [logType, logs]);

  return null;
}