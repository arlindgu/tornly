// app/dashboard/money/page.tsx
import { Suspense } from "react";
import PageTitle from "@/components/PageTitle";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import MoneyCard from "@/components/money/MoneyCard";
import { LogParams } from "@/lib/api/user/log.params";
import { Log1104Data, Log1113Data, Log1221Data, Log1226Data, Log2405Data, Log2407Data, Log4210Data, Log4220Data, Log4810Data, Log5011Data, Log6012Data, Log6220Data, Log6221Data, Log7815Data, Log8155Data} from "@/lib/api/user/log-data/money/incoming.data";

export default function PerformancePage() {


  return (
    <main className="flex flex-col gap-6">
      <PageTitle
        title="Money"
        description="Check out where your money goes and comes."
      />
      <section className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log6221Data, LogParams>
            title="Company Pay"
            description="Total company pay"
            logKey="log6221"
            sumField="pay"
            logsToFetch={6221}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log6220Data, LogParams>
            title="Job Pay"
            description="Total job pay"
            logKey="log6220"
            sumField="pay"
            logsToFetch={6220}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log5011Data, LogParams>
            title="Points Market Sell"
            description="Total points sold"
            logKey="log5011"
            sumField="cost_total"
            logsToFetch={5011}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log7815Data, LogParams>
            title="Missions Complete"
            description="Total missions completed"
            logKey="log7815"
            sumField="money"
            logsToFetch={7815}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log8155Data, LogParams>
            title="Attack Mug"
            description="Total money mugged"
            logKey="log8155"
            sumField="money_mugged"
            logsToFetch={8155}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log4810Data, LogParams>
            title="Money Receive"
            description="Total money received"
            logKey="log4810"
            sumField="money"
            logsToFetch={4810}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log2405Data, LogParams>
            title="Item Use Wallet"
            description="Total money spent on items"
            logKey="log2405"
            sumField="money"
            logsToFetch={2405}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log6012Data, LogParams>
            title="Offshore Bank Interest"
            description="Total interest gained from offshore bank"
            logKey="log6012"
            sumField="interest"
            logsToFetch={6012}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log1104Data, LogParams>
            title="Item market sell (old)"
            description="Total money earned from item market sells (legacy)"
            logKey="log1104"
            sumField="cost"
            logsToFetch={1104}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log1113Data, LogParams>
            title="Item market sell"
            description="Total money earned from item market sells"
            logKey="log1113"
            sumField="cost_total"
            logsToFetch={1113}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log1221Data, LogParams>
            title="Bazaar sell (legacy)"
            description="Total money earned from bazaar sells (legacy)"
            logKey="log1221"
            sumField="cost_total"
            logsToFetch={1221}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log1226Data, LogParams>
            title="Bazaar sell"
            description="Total money earned from bazaar sells"
            logKey="log1226"
            sumField="cost_total"
            logsToFetch={1226}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log2405Data, LogParams>
            title="Item use wallet"
            description="Total money gained from wallet"
            logKey="log2405"
            sumField="money"
            logsToFetch={2405}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log2407Data, LogParams>
            title="Item use stash box"
            description="Total money gained from stash box"
            logKey="log2407"
            sumField="money"
            logsToFetch={2407}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log4210Data, LogParams>
            title="Item shop sell"
            description="Total money gained from item shop sells (selling items to NPCs)"
            logKey="log4210"
            sumField="total_value"
            logsToFetch={4210}
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <MoneyCard<Log4220Data, LogParams>
            title="Item shop sell points"
            description="Total money gained from selling points to PawnShop"
            logKey="log4220"
            sumField="total_value"
            logsToFetch={4220}
          />
        </Suspense>
      </section>
    </main>
  );
}


