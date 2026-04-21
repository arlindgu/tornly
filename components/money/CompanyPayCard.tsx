"use client"

import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../../lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { CardSkeleton } from "../skeleton/CardSkeleton"

export default function CompanyPayCard() {
    const CompanyPayData = useLiveQuery(() => db.log6221.toArray())
    const totalPay = CompanyPayData?.reduce((sum, log) => sum + log.data.pay, 0) || 0

    return (
      <Card>
        <CardHeader>
          <CardTitle>Company Pay</CardTitle>
          <CardDescription>Total amount paid to you from all the Companies you worked for</CardDescription>
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