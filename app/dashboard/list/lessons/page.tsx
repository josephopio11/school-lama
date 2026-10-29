import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { Card } from "@/components/ui/card"
import { lessonsData, role } from "@/lib/data"
import Image from "next/image"

type Lesson = {
  id: number
  subject: string
  class: string
  teacher: string
}

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
]

const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-500/50 text-sm transition-all duration-300 even:bg-primary/10 hover:bg-chart-5/10 dark:even:bg-primary/20 dark:hover:bg-chart-1/20"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="p-4 lg:px-6">
        {" "}
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden text-lg font-semibold md:block">All Lessons</h1>
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </button>
              <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </button>
              {role === "admin" && <FormModal table="lesson" type="create" />}
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={lessonsData} />
        {/* PAGINATION */}
        <Pagination />
      </Card>
    </div>
  )
}

export default LessonListPage
