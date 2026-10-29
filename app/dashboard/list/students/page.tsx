import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { Card } from "@/components/ui/card"
import { role, studentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { FaSortAlphaDown } from "react-icons/fa"
import { FaEye, FaFilter } from "react-icons/fa6"

type Student = {
  id: number
  studentId: string
  name: string
  email?: string
  photo: string
  phone?: string
  grade: number
  class: string
  address: string
}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
]

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-500/50 text-sm transition-all duration-300 even:bg-primary/10 hover:bg-chart-5/10 dark:even:bg-primary/20 dark:hover:bg-chart-1/20"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo || "/default-profile.png"}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover md:hidden xl:block"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="bg-lamaSky flex h-7 w-7 items-center justify-center rounded-full">
              {/* <Image src="/view.png" alt="" width={16} height={16} /> */}
              <FaEye className="size-4 text-gray-700 dark:text-gray-300" />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="p-4 lg:px-6">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden text-lg font-semibold md:block">
            All Students
          </h1>
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
                <FaFilter className="size-4 text-gray-700 dark:text-gray-300" />
              </button>
              <button className="bg-lamaYellow flex h-8 w-8 items-center justify-center rounded-full">
                <FaSortAlphaDown className="size-4 text-gray-700 dark:text-gray-300" />
              </button>
              {role === "admin" && (
                // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                //   <Image src="/plus.png" alt="" width={14} height={14} />
                // </button>
                <FormModal table="student" type="create" />
              )}
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={studentsData} />
        {/* PAGINATION */}
        <Pagination />
      </Card>
    </div>
  )
}

export default StudentListPage
