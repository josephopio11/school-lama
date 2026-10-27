"use client"

import { useState } from "react"
import Calendar from "react-calendar"
// import "react-calendar/dist/Calendar.css"
import { FaEllipsisH } from "react-icons/fa"
import { Card, CardContent, CardHeader } from "./ui/card"

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <Card className="p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-xl font-semibold">Events</h1>
        <FaEllipsisH />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <Card className="p-4" key={event.id}>
            <CardHeader className="flex items-center justify-between p-0">
              <h1 className="text-lg font-semibold text-foreground">
                {event.title}
              </h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mt-2 text-sm text-gray-400">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  )
}

export default EventCalendar
