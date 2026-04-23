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
import { useState, useRef, useEffect } from "react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";

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
    const [rangeStart, setRangeStart] = useState(0
    );

    const prevTotalRef = useRef(0);


  const logs = useLiveQuery(() => {
    const table = db[logKey] as any;
    return table
    .where('timestamp')
    .between(
      rangeStart,
      Date.now()/1000,
    )
    .reverse()
    .limit(logsToFetch)
    .toArray();
  }, [logKey, rangeStart]); // ← Dependency hinzufügen!



  const total =
    logs?.reduce((sum: number, log: Log<D, P>) => {
      const value = log.data[sumField];
      return sum + (typeof value === "number" ? value : 0);
    }, 0) || 0;

        useEffect(() => {
          const timer = setTimeout(() => {
            prevTotalRef.current = total;
          }, 1200); // Nach Animation-Dauer
          return () => clearTimeout(timer);
        }, [total]);

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
              start={prevTotalRef.current}
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
        <ButtonGroup>
          <Button onClick={() => setRangeStart(Date.now() /1000 - 30 * 24 * 60 * 60)}>
            30
          </Button>
          <Button onClick={() => setRangeStart(Date.now() / 1000 - 60 * 24 * 60 * 60)}>
            60
          </Button>
          <Button
            onClick={() =>
              setRangeStart(Math.floor(Date.now() / 1000) - 90 * 24 * 60 * 60)
            }
          >
            90
          </Button>
          <Button
            onClick={() =>
              setRangeStart(0)
            }
          >
            All
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
