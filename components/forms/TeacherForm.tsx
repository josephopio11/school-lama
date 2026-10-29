"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaSave } from "react-icons/fa"
import { FaChevronRight, FaX } from "react-icons/fa6"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "../ui/field"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
})

type Inputs = z.infer<typeof schema>

const months = [
  { label: "MM", value: null },
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
]

const years = [
  { label: "YYYY", value: null },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" },
]

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update"
  data?: any
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  const gotoNextPage = () => {
    if (page === 1) {
      // Validate page 1 fields
      const email = (document.getElementById("email") as HTMLInputElement).value
      const username = (document.getElementById("username") as HTMLInputElement)
        .value
      const password = (document.getElementById("password") as HTMLInputElement)
        .value

      const errors: string[] = []
      if (!email) errors.push("Email is required.")
      if (!username) errors.push("Username is required.")
      if (!password) errors.push("Password is required.")

      if (errors.length > 0) {
        toast.error(errors.join("\n"))

        setErrorMessages(errors)
        return
      }
    }

    if (page === 2) {
      // Validate page 2 fields
      const firstName = (
        document.getElementById("firstname") as HTMLInputElement
      ).value
      const lastName = (document.getElementById("lastname") as HTMLInputElement)
        .value
      const dateOfBirth = (
        document.getElementById("dateOfBirth") as HTMLInputElement
      ).value
      const bloodType = (
        document.getElementById("bloodType") as HTMLInputElement
      ).value

      const errors: string[] = []
      if (!firstName) errors.push("First name is required.")
      if (!lastName) errors.push("Last name is required.")
      if (!dateOfBirth) errors.push("Date of Birth is required.")
      if (!bloodType) errors.push("Blood Type is required.")

      if (errors.length > 0) {
        toast.error(errors.join("\n"))
        setErrorMessages(errors)
        return
      }
    }

    setErrorMessages([])
    setPage((prevPage) => prevPage + 1)
  }

  const onSubmit = handleSubmit((data) => {
    if (page === 3) {
      // Validate page 3 fields
      const phone = (document.getElementById("phone") as HTMLInputElement).value
      const address = (document.getElementById("address") as HTMLInputElement)
        .value

      const errors: string[] = []
      if (!phone) errors.push("Phone is required.")
      if (!address) errors.push("Address is required.")

      if (errors.length > 0) {
        toast.error(errors.join("\n"))
        setErrorMessages(errors)
        return
      }
    }
    console.log(data)
  })

  const [page, setPage] = useState(1)

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <DialogHeader>
        <DialogTitle>Create a new teacher</DialogTitle>
      </DialogHeader>

      <div className="flex flex-wrap justify-between gap-4">
        {page === 1 && (
          <FieldGroup className="gap-4">
            <FieldSet className="mt-4 mb-0">
              <FieldLegend>Authentication Information</FieldLegend>
              <FieldDescription>
                Enter all the teacher's authentication information below. This
                will be used to log in to the system.
              </FieldDescription>
            </FieldSet>
            <Field className="mt-0 flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Email" />
            </Field>
            <div className="flex gap-4">
              <Field className="flex flex-col gap-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" placeholder="Username" />
              </Field>
              <Field className="flex flex-col gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Field>
            </div>
          </FieldGroup>
        )}
        {page === 2 && (
          <FieldGroup className="gap-4">
            <FieldSet className="mt-4 mb-0">
              <FieldLegend>Personal Information</FieldLegend>
              <FieldDescription>
                Enter all the teacher's personal information below.
              </FieldDescription>
            </FieldSet>
            <Field className="mt-0 flex flex-col">
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Joe"
                required
              />
            </Field>
            <Field className="mt-0 flex flex-col">
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Dohn"
                required
              />
            </Field>
            <div className="flex gap-4"></div>
            <div className="flex gap-4">
              <Field className="flex flex-col gap-1">
                <Label htmlFor="phone">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  type="date"
                  required
                />
              </Field>{" "}
              <Field className="flex flex-col gap-1">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  name="bloodType"
                  placeholder="BloodType"
                />
              </Field>
            </div>
          </FieldGroup>
        )}
        {page === 3 && (
          <FieldGroup className="gap-4">
            <FieldSet className="mt-4 mb-0">
              <FieldLegend>Address and Contact</FieldLegend>
              <FieldDescription>
                Enter all the teacher's address and contact information below.
              </FieldDescription>
            </FieldSet>
            <Field className="flex flex-col gap-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" placeholder="Phone" />
            </Field>{" "}
            <Field className="flex flex-col gap-1">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" placeholder="Address" />
            </Field>
          </FieldGroup>
        )}
      </div>
      <div>
        {/* Render error messages here */}
        {errorMessages.length > 0 && (
          <div className="text-red-500">
            {errorMessages.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>
      <DialogFooter className="mt-4 flex w-full">
        <div className="flex w-full justify-between">
          {page === 1 ? (
            <Button
              type="button"
              className="flex items-center gap-2"
              variant="outline"
            >
              <FaX className="size-2" />
              Cancel
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={() => setPage(page - 1)}
              className="flex items-center gap-2"
            >
              <FaChevronRight className="size-2 rotate-180" />
              Previous
            </Button>
          )}
          {page < 3 ? (
            <Button
              type="button"
              onClick={() => gotoNextPage()}
              className="flex items-center gap-2"
            >
              Next
              <FaChevronRight className="size-2" />
            </Button>
          ) : (
            <>
              <Button className="" type="submit" onClick={() => onSubmit()}>
                {type === "create" ? "Create" : "Update"}
                <FaSave className="size-4" />
              </Button>
            </>
          )}
        </div>
      </DialogFooter>
      {/* <span className="text-xs font-medium text-gray-400">
        Personal Information
      </span> */}
      {/* <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="w-full rounded-md p-2 text-sm ring-[1.5px] ring-gray-300"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col justify-center gap-2 md:w-1/4">
          <label
            className="flex cursor-pointer items-center gap-2 text-xs text-gray-500"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div> */}
      {/* <button className="rounded-md bg-blue-400 p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button> */}
    </form>
  )
}

export default TeacherForm
