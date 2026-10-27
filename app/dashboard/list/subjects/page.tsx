import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { role, subjectsData } from "@/lib/data"
import { FaFilter, FaSort } from "react-icons/fa"

type Subject = {
  id: number
  name: string
  teachers: string[]
}

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
]

const SubjectListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-primary/20 text-sm even:bg-chart-1/5 hover:bg-primary/10"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <Card className="m-4 mt-0 flex-1">
      {/* TOP */}
      <CardHeader className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Subjects</h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
              {/* <Image src="/filter.png" alt="" width={14} height={14} /> */}
              <FaFilter className="text-gray-400" />
            </button>
            <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
              {/* <Image src="/sort.png" alt="" width={14} height={14} /> */}
              <FaSort className="text-gray-400" />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </CardHeader>
      {/* LIST */}
      <CardContent>
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
        {/* PAGINATION */}
        <Pagination />
      </CardContent>
    </Card>
  )
}

export default SubjectListPage
