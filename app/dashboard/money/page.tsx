// app/dashboard/money/page.tsx
import { Suspense } from "react";
import PageTitle from "@/components/PageTitle";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import MoneyCard from "@/components/money/MoneyCard";
import { AttackMugParams, CompanyEmployeePayParams, ItemUseWalletParams, JobPayParams, MissionsCompleteParams, MoneyReceiveParams, OffshoreBankInterestParams, PointsMarketSellParams } from "@/lib/api/user/log.params";
import { AttackMugData, CompanyEmployeePayData, ItemUseWalletData, JobPayData, MissionsCompleteData, MoneyReceiveData, OffshoreBankInterestData, PointsMarketSellData } from "@/lib/api/user/log.data";

export default function PerformancePage() {


  return (
    <main className="flex flex-col gap-6">
      <PageTitle
        title="Money"
        description="Check out where your money goes and comes."
      />
      <section className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<CompanyEmployeePayData, CompanyEmployeePayParams>
            title="Company Pay"
            description="Total company pay"
            logKey="log6221"
            sumField="pay"
            logsToFetch={6221}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<JobPayData, JobPayParams>
            title="Job Pay"
            description="Total job pay"
            logKey="log6220"
            sumField="pay"
            logsToFetch={6220}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<PointsMarketSellData, PointsMarketSellParams>
            title="Points Market Sell"
            description="Total points sold"
            logKey="log5011"
            sumField="cost_total"
            logsToFetch={5011}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<MissionsCompleteData, MissionsCompleteParams>
            title="Missions Complete"
            description="Total missions completed"
            logKey="log7815"
            sumField="money"
            logsToFetch={7815}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<AttackMugData, AttackMugParams>
            title="Attack Mug"
            description="Total money mugged"
            logKey="log8155"
            sumField="money_mugged"
            logsToFetch={8155}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<MoneyReceiveData, MoneyReceiveParams>
            title="Money Receive"
            description="Total money received"
            logKey="log4810"
            sumField="money"
            logsToFetch={4810}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<ItemUseWalletData, ItemUseWalletParams>
            title="Item Use Wallet"
            description="Total money spent on items"
            logKey="log2405"
            sumField="money"
            logsToFetch={2405}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<OffshoreBankInterestData, OffshoreBankInterestParams>
            title="Offshore Bank Interest"
            description="Total interest earned"
            logKey="log6012"
            sumField="interest"
            logsToFetch={6012}
          />
        </Suspense>
      </section>
    </main>
  );
}
