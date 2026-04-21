"use client"

import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../../lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { CardSkeleton } from "../skeleton/CardSkeleton"

export default function MissionCard() {
    const CompanyPayData = useLiveQuery(() => db.log7815.toArray())
    const totalPay = CompanyPayData?.reduce((sum, log) => sum + log.data.money, 0) || 0

    return (
      <Card>
        <CardHeader>
          <CardTitle>Missions</CardTitle>
          <CardDescription>Money earned from completing missions</CardDescription>
        </CardHeader>
        <CardContent>
          {!CompanyPayData ? (
            <CardSkeleton />
          ) : (
            <div>
              <p className="text-3xl font-bold">${totalPay.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">
                {CompanyPayData.length} payments
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
}