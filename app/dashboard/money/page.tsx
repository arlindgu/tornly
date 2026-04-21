// app/dashboard/money/page.tsx
import { Suspense } from "react";
import PageTitle from "@/components/PageTitle";
import CompanyPayCard from "@/components/money/CompanyPayCard";
import JobPayCard from "@/components/money/JobPayCard";
import { LogFetcher } from "@/components/database/LogFetcher";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import PointsCard from "@/components/money/PointsCard";
import MissionCard from "@/components/money/MissionsCard";
import MoneyCard from "@/components/money/MoneyCard";
import { AttackMugParams } from "@/lib/api/user/log.params";
import { AttackMugData } from "@/lib/api/user/log.data";

export default function PerformancePage() {


  return (
    <div className="p-4 flex flex-col gap-4">
      <section className="flex flex-row justify-between items-center">
        <PageTitle
          title="Money"
          description="Check out where your money goes and comes."
        />
        <LogFetcher logsToFetch={6221} />
        <LogFetcher logsToFetch={6220} />
        <LogFetcher logsToFetch={5011} />
        <LogFetcher logsToFetch={7815} />
        <LogFetcher logsToFetch={8155} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <Suspense fallback={<CardSkeleton />}>
          <CompanyPayCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <JobPayCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <PointsCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MissionCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<AttackMugData, AttackMugParams> title="Attack Mug" description="Total money mugged" logKey="log8155" sumField="money_mugged" />
        </Suspense>
      </section>
    </div>
  );
}
