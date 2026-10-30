"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

export function SectionCards() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/10 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <DataCard title="Students" value="1,250" trend="up" type="student" />
        <DataCard title="Teachers" value="234" trend="down" type="teacher" />
        <DataCard title="Parents" value="678" trend="up" type="parent" />
        <DataCard title="Staff" value="300" trend="up" type="staff" />
      </div>
    </>
  )
}

function DataCard({
  title,
  value,
  trend,
  type,
}: {
  title: string
  value: string
  trend: string
  type: "student" | "teacher" | "parent" | "staff"
}) {
  return (
    <Card className="@container/card transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            {trend === "up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
            {trend === "up" ? "+12.5%" : "-20%"}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {trend === "up" ? "Trending up this month" : "Down this period"}{" "}
          {trend === "up" ? (
            <TrendingUpIcon className="size-4" />
          ) : (
            <TrendingDownIcon className="size-4" />
          )}
        </div>
        <div className="text-muted-foreground">
          {trend === "up"
            ? "Visitors for the last 6 months"
            : "Acquisition needs attention"}
        </div>
      </CardFooter>
    </Card>
  )
}
