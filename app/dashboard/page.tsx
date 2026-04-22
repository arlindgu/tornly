

import GreetingMessage from "@/components/dashboard/GreetingMessage";
import { Suspense } from "react";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import BarsCard from "@/components/dashboard/BarsCard";
import getUserBars from "@/lib/api/user/bars";
import { isSuccess } from "@/lib/api/errors/errors";
import { Zap, FingerprintPattern, Smile, Heart   } from "lucide-react"
import StatusCard from "@/components/dashboard/StatusCard";
import BattlestatsCard from "@/components/dashboard/BattlestatsCard";
import { initDB } from "@/lib/db";

export default async function DashboardPage() {

    const userBars = await getUserBars();

    if (!isSuccess(userBars)) {
        
    }


    return (
      <main>
        <GreetingMessage />
        <Suspense fallback={<CardSkeleton />}>
          <section className="flex gap-4 mt-4">
            <BarsCard
              title="Energy"
              Bars={
                userBars.data?.bars.energy || {
                  current: 0,
                  maximum: 0,
                  increment: 0,
                  interval: 0,
                  tick_time: 0,
                  full_time: 0,
                }
              }
              color="green"
              icon={<Zap fill="currentColor" />}
            />
            <BarsCard
              title="Nerve"
              Bars={
                userBars.data?.bars.nerve || {
                  current: 0,
                  maximum: 0,
                  increment: 0,
                  interval: 0,
                  tick_time: 0,
                  full_time: 0,
                }
              }
              color="blue"
              icon={<FingerprintPattern />}
            />
            <BarsCard
              title="Happy"
              Bars={
                userBars.data?.bars.happy || {
                  current: 0,
                  maximum: 0,
                  increment: 0,
                  interval: 0,
                  tick_time: 0,
                  full_time: 0,
                }
              }
              color="amber"
              icon={<Smile />}
            />
            <BarsCard
              title="Life"
              Bars={
                userBars.data?.bars.life || {
                  current: 0,
                  maximum: 0,
                  increment: 0,
                  interval: 0,
                  tick_time: 0,
                  full_time: 0,
                }
              }
              color="blue"
              icon={<Heart fill="currentColor" />}
            />
          </section>
        </Suspense>
        <section className="mt-4 grid-cols-3 grid gap-4">
          <div className="col-span-2">
            <BattlestatsCard />
          </div>
          <StatusCard />
        </section>
      </main>
    );
}