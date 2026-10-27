import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import { DataTable } from "@/components/data-table"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import { SectionCards } from "@/components/section-cards"
import data from "./data.json"

export default function Page() {
  return (
    <>
      <>
        <div className="flex flex-col gap-4 md:flex-row">
          {/* LEFT */}
          <div className="flex w-full flex-col gap-8 lg:w-2/3">
            {/* USER CARDS */}
            <SectionCards />

            {/* MIDDLE CHARTS */}
            <div className="flex flex-col gap-4 px-4 lg:flex-row lg:px-6">
              {/* COUNT CHART */}
              <div className="h-[450px] w-full lg:w-1/3">
                <CountChart />
              </div>
              {/* ATTENDANCE CHART */}
              <div className="h-[450px] w-full lg:w-2/3">
                <AttendanceChart />
              </div>
            </div>
            {/* BOTTOM CHART */}
            <div className="h-[500px] w-full px-4 lg:px-6">
              <FinanceChart />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex w-full flex-col gap-8 lg:w-1/3">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div> */}
        <DataTable data={data} />
      </div>
    </>
  )
}
