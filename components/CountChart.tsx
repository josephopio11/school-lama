"use client"
import { BiMaleFemale } from "react-icons/bi"
import { FaEllipsisH } from "react-icons/fa"
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader } from "./ui/card"

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
]

const CountChart = () => {
  return (
    <Card className="@container/card h-full w-full p-4">
      {/* TITLE */}
      <CardHeader className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <FaEllipsisH />
        {/* <Image src="/assets/moreDark.png" alt="" width={20} height={20} /> */}
      </CardHeader>
      {/* CHART */}
      <CardContent className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <BiMaleFemale className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 fill-accent-foreground text-accent-foreground" />
        {/* <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        /> */}
      </CardContent>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="bg-lamaSky h-5 w-5 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-lamaYellow h-5 w-5 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </Card>
  )
}

export default CountChart
