"use client"

import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { Circle, Type } from "lucide-react"
import { Avatar } from "radix-ui";

export default function TornCardPage() {
  return (
    <main>
      <section>
        <div className="flex flex-col w-128 gap-4">
          <Card className="aspect-[1.586/1] relative">
            <Type className="absolute left-6 top-6" />
            <Circle className="absolute right-6 bottom-6 size-8" />
            <Circle
              className="absolute right-9 bottom-6 size-8"
              fill="currentColor"
            />
          </Card>
          <div className="grid grid-cols-2 gap-2 grid-rows-2 ">
            <Item variant={"outline"} className="col-span-1">
              <ItemHeader>Total Balance</ItemHeader>
              <ItemContent>
                <ItemTitle>$123,456,789</ItemTitle>
                <ItemDescription>$ 54,323 Available</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant={"outline"} className="col-span-1 row-span-2">
              <ItemHeader>Total Balance</ItemHeader>
              <ItemContent>
                <ItemTitle>$123,456,789</ItemTitle>
                <ItemDescription>$ 54,323 Available</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant={"outline"} className="col-span-1 row-span-2">
              <ItemHeader>Total Balance</ItemHeader>
              <ItemContent>
                <ItemTitle>$123,456,789</ItemTitle>
                <ItemDescription>$ 54,323 Available</ItemDescription>
              </ItemContent>
            </Item>
          </div>
          <div>
            <h2 className="mb-4">Latest Transactions</h2>
            <Item variant="outline">
              <ItemMedia>
                <Skeleton className="size-12" />
              </ItemMedia>
              <ItemContent>
                <div className="flex justify-between">
                <ItemTitle>Evil Rabbit</ItemTitle>
                <p>56$</p>
                </div>
                <ItemDescription>Last seen 5 months ago</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </div>
      </section>
    </main>
  );
}