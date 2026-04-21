"use client"

import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../../lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { CardSkeleton } from "../skeleton/CardSkeleton"



export default function PointsCard() {
    const PointsMarketSellData = useLiveQuery(() => db.log5011.toArray())
    const totalPay = PointsMarketSellData?.reduce((sum, log) => sum + log.data.cost_total, 0) || 0

    return (
      <Card>
        <CardHeader>
          <CardTitle>Points Market Sell</CardTitle>
          <CardDescription>Total amount earned from selling points on the market</CardDescription>
        </CardHeader>
        <CardContent>
          {!PointsMarketSellData ? (
            <CardSkeleton />
          ) : (
            <div>
              <p className="text-3xl font-bold">${totalPay.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">
                {PointsMarketSellData.length} payments
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
}