import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"

const TableSearch = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:w-auto">
      {/* <Image src="/search.png" alt="" width={14} height={14} /> */}
      {/* <FaSearch className="text-gray-400" />
      <Input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent p-2 outline-none"
      /> */}
      <InputGroup className="max-w-sm">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {/* <Kbd>⌘K</Kbd> */}
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default TableSearch
