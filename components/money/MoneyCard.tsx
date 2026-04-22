"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Log } from "../../lib/api/user/log";
import { useLogs } from "@/hooks/useLogs";
import { Skeleton } from "../ui/skeleton";

export interface MoneyCardProps<D, P> {
  title: string;
  description: string;
  logKey: keyof typeof db;
  sumField: keyof D;
  logsToFetch: number; // Optional: Anzahl der Logs, die angezeigt werden sollen
}

export default function MoneyCard<D, P>({
  logsToFetch,
  title,
  description,
  logKey,
  sumField,
}: MoneyCardProps<D, P>) {
  const logs = useLiveQuery(() => {
    const table = db[logKey] as any;
    return table.toArray();
  });

    const { isLoading, isSynced } = useLogs<D, P>({ logsToFetch });

  const total =
    logs?.reduce((sum: number, log: Log<D, P>) => {
      const value = log.data[sumField];
      return sum + (typeof value === "number" ? value : 0);
    }, 0) || 0;

    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-1/2 mb-4" />
            <Skeleton className="h-6 w-1/4" />
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
        {!logs ? (
          <>
            <Skeleton className="h-10 w-1/2 mb-4" />
            <Skeleton className="h-6 w-1/4" />
          </>
        ) : (
          <div>
            <p className="text-3xl font-bold">${total.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-2">{logs.length} payments</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
