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
import { CardSkeleton } from "../skeleton/CardSkeleton";
import { Log } from "../../lib/api/user/log";

export interface MoneyCardProps<D, P> {
  title: string;
  description: string;
  logKey: keyof typeof db;
  sumField: keyof D;
}

export default function MoneyCard<D, P>({
  title,
  description,
  logKey,
  sumField,
}: MoneyCardProps<D, P>) {
  const logs = useLiveQuery(() => {
    const table = db[logKey] as any;
    return table.toArray();
  });

  const total =
    logs?.reduce((sum: number, log: Log<D, P>) => {
      const value = log.data[sumField];
      return sum + (typeof value === "number" ? value : 0);
    }, 0) || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!logs ? (
          <CardSkeleton />
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
