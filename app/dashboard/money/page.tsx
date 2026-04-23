"use client"// app/dashboard/money/page.tsx
import { Suspense, use, useEffect } from "react";
import { motion, animate, stagger } from "motion/react";
import PageTitle from "@/components/PageTitle";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";
import MoneyCard from "@/components/money/MoneyCard";
import { LogParams } from "@/lib/api/user/log.params";
import { Log1104Data, Log1113Data, Log1221Data, Log1226Data, Log2405Data, Log2407Data, Log4210Data, Log4220Data, Log4810Data, Log5011Data, Log6012Data, Log6220Data, Log6221Data, Log7815Data, Log8155Data} from "@/lib/api/user/log-data/money/incoming.data";


export default function PerformancePage() {

  useEffect(() => {
    animate("li", { opacity: 1 }, { delay: stagger(0.1) });
  }, []);

  const cards = [
    {
      title: "Job Pay",
      description: "Total job pay",
      logKey: "log6220" as const,
      sumField: "pay" as const,
      logsToFetch: 6220,
    },
    {
      title: "Points Market Sell",
      description: "Total points sold",
      logKey: "log5011" as const,
      sumField: "cost_total" as const,
      logsToFetch: 5011,
    },
    {
      title: "Missions Complete",
      description: "Total missions completed",
      logKey: "log7815" as const,
      sumField: "money" as const,
      logsToFetch: 7815,
    },
    {
      title: "Attack Mug",
      description: "Total money mugged",
      logKey: "log8155" as const,
      sumField: "money_mugged" as const,
      logsToFetch: 8155,
    },
    {
      title: "Money Receive",
      description: "Total money received",
      logKey: "log4810" as const,
      sumField: "money" as const,
      logsToFetch: 4810,
    },
    {
      title: "Item Use Wallet",
      description: "Total money spent on items",
      logKey: "log2405" as const,
      sumField: "money" as const,
      logsToFetch: 2405,
    },
    {
      title: "Offshore Bank Interest",
      description: "Total interest gained from offshore bank",
      logKey: "log6012" as const,
      sumField: "interest" as const,
      logsToFetch: 6012,
    },
  {     title: "Item market sell (old)",
      description: "Total money earned from item market sells (legacy)",
      logKey: "log1104" as const,
      sumField: "cost" as const,
      logsToFetch: 1104,
    },
    {
      title: "Item market sell",
      description: "Total money earned from item market sells",
      logKey: "log1113" as const,
      sumField: "cost_total" as const,
      logsToFetch: 1113,
    },
    {
      title: "Bazaar sell (legacy)",
      description: "Total money earned from bazaar sells (legacy)",
      logKey: "log1221" as const,
      sumField: "cost_total" as const,
      logsToFetch: 1221,
    },
    {
      title: "Bazaar sell",
      description: "Total money earned from bazaar sells",
      logKey: "log1226" as const,
      sumField: "cost_total" as const,
      logsToFetch: 1226,
    },
    {
      title: "Item use wallet",
      description: "Total money gained from wallet",
      logKey: "log2405" as const,
      sumField: "money" as const,
      logsToFetch: 2405,
    },
    {
      title: "Item use stash box",
      description: "Total money gained from stash box",
      logKey: "log2407" as const,
      sumField: "money" as const,
      logsToFetch: 2407,
    },
    {
      title: "Item shop sell",
      description: "Total money gained from item shop sells (selling items to NPCs)",
      logKey: "log4210" as const,
      sumField: "total_value" as const,
      logsToFetch: 4210,
    },
    {
      title: "Item shop sell points",
      description: "Total money gained from selling points to PawnShop",
      logKey: "log4220" as const,
      sumField: "total_value" as const,
      logsToFetch: 4220,
    },
  ];

  


  return (
    <main className="flex flex-col gap-6">
      <PageTitle
        title="Money"
        description="Check out where your money goes and comes."
      />
      <section className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="list-none"
            >
              <Suspense fallback={<CardSkeleton />}>
                <MoneyCard {...card} />
              </Suspense>
            </motion.div>
          ))}
      </section>
    </main>
  );
}


