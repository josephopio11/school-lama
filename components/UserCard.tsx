import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
  return (
    <>
      {/* <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUpIcon />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card> */}
      <div className="odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] flex-1 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
            2024/25
          </span>
          <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1 className="my-4 text-2xl font-semibold">1,234</h1>
        <h2 className="text-sm font-medium text-gray-500 capitalize">
          {type}s
        </h2>
      </div>
    </>
  )
}

export default UserCard
