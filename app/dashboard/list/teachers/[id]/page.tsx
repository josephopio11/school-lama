import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalender"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { CiCalendarDate, CiMail, CiPhone } from "react-icons/ci"
import { MdBloodtype } from "react-icons/md"

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 xl:flex-row">
      {/* LEFT */}
      <div className="px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <Card className="p-4 lg:px-6">
          {/* TOP */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* USER INFO CARD */}
            <div className="flex flex-1 gap-4 rounded-md bg-secondary px-4 py-6 shadow-2xl">
              <div className="w-1/3">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  // src="/assets/teacher.png"
                  alt=""
                  width={144}
                  height={144}
                  className="aspect-square rounded-full object-cover"
                />
              </div>
              <div className="flex w-2/3 flex-col justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">Leonard Snyder</h2>
                  {role === "admin" && (
                    <FormModal
                      table="teacher"
                      type="update"
                      data={{
                        id: 1,
                        username: "deanguerrero",
                        email: "deanguerrero@gmail.com",
                        password: "password",
                        firstName: "Dean",
                        lastName: "Guerrero",
                        phone: "+1 234 567 89",
                        address: "1234 Main St, Anytown, USA",
                        bloodType: "A+",
                        dateOfBirth: "2000-01-01",
                        sex: "male",
                        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      }}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                  <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                    <MdBloodtype className="size-5" />
                    <span>A+</span>
                  </div>
                  <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                    <CiCalendarDate className="size-5" />
                    <span>January 2025</span>
                  </div>
                  <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                    <CiMail className="size-5" />
                    <span>user@gmail.com</span>
                  </div>
                  <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                    <CiPhone className="size-5" />
                    <span>+1 234 567</span>
                  </div>
                </div>
              </div>
            </div>
            {/* SMALL CARDS */}
            <div className="flex w-full flex-1 flex-wrap justify-between gap-4">
              {/* CARD */}
              <div className="flex w-full gap-4 rounded-md bg-secondary p-4 shadow-2xl">
                <Image
                  src="/assets/singleAttendance.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
              {/* CARD */}
              <div className="flex w-full gap-4 rounded-md bg-secondary p-4 shadow-2xl">
                <Image
                  src="/assets/singleBranch.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">2</h1>
                  <span className="text-sm text-gray-400">Branches</span>
                </div>
              </div>
              {/* CARD */}
              <div className="flex w-full gap-4 rounded-md bg-secondary p-4 shadow-2xl">
                <Image
                  src="/assets/singleLesson.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Lessons</span>
                </div>
              </div>
              {/* CARD */}
              <div className="flex w-full gap-4 rounded-md bg-secondary p-4 shadow-2xl">
                <Image
                  src="/assets/singleClass.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Classes</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="shadow-2xld mt-4 h-[800px] rounded-md bg-secondary p-4">
            <h1>Teacher&apos;s Schedule</h1>
            <BigCalendar />
          </div>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <Card className="p-4 lg:px-6">
          <div className="rounded-md p-4">
            <h3 className="text-xl font-semibold">Shortcuts</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
              <Link className="bg-lamaSkyLight rounded-md" href="/">
                <Button>Teacher&apos;s Classes</Button>
              </Link>
              <Link className="bg-lamaPurpleLight rounded-md" href="/">
                <Button>Teacher&apos;s Students</Button>
              </Link>
              <Link className="bg-lamaYellowLight rounded-md" href="/">
                <Button>Teacher&apos;s Lessons</Button>
              </Link>
              <Link className="rounded-md" href="/">
                <Button>Teacher&apos;s Exams</Button>
              </Link>
              <Link className="bg-lamaSkyLight rounded-md" href="/">
                <Button>Teacher&apos;s Assignments</Button>
              </Link>
            </div>
          </div>
          <Performance />
          <Announcements />
        </Card>
      </div>
    </div>
  )
}

export default SingleTeacherPage
