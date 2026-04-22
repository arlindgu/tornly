"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Log } from "@/lib/api/user/log";
import { useLogs } from "@/hooks/use-logs";
import { Skeleton } from "../ui/skeleton";
import CountUp from "react-countup";
import { initDB } from "@/lib/db";

export interface MoneyCardProps<D, P> {
  title: string;
  description: string;
  logKey: keyof typeof db;
  sumField: keyof D;
  logsToFetch: number;
}

export default function MoneyCard<D, P>({
  logsToFetch,
  title,
  description,
  logKey,
  sumField,
}: MoneyCardProps<D, P>) {
  const { isLoading } = useLogs<D, P>({ logsToFetch });

  const logs = useLiveQuery(() => {
    const table = db[logKey] as any;
    return table.toArray();
  }, [logKey]); // ← Dependency hinzufügen!

  const total =
    logs?.reduce((sum: number, log: Log<D, P>) => {
      const value = log.data[sumField];
      return sum + (typeof value === "number" ? value : 0);
    }, 0) || 0;

  if (isLoading || !logs) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-9 w-1/2 mb-4" />
          <Skeleton className="h-3 w-1/4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-3xl font-bold [animation:countup-blur_1.2s_ease-out_forwards]">
            <CountUp
              key={total} // ← Key triggert Re-animation bei Änderung
              end={total}
              duration={1.2}
              separator=","
              prefix="$"
              useEasing={true}
            />
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {logs.length} payments
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
