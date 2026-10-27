"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  BookCheck,
  BookOpenCheck,
  CalendarCheck,
  CameraIcon,
  CircleHelpIcon,
  ClipboardPenLine,
  CommandIcon,
  Cuboid,
  FileTextIcon,
  GraduationCap,
  House,
  ListTodo,
  MegaphoneIcon,
  MessageSquareText,
  Newspaper,
  PresentationIcon,
  SearchIcon,
  Settings2Icon,
  UserSquareIcon,
  UsersRoundIcon,
} from "lucide-react"

const data = {
  user: {
    name: "Jane Omatakirya",
    email: "jane@lovesJesus.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: <House />,
    },
    {
      title: "Teachers",
      url: "/dashboard/list/teachers",
      icon: <GraduationCap />,
    },
    {
      title: "Students",
      url: "/dashboard/list/students",
      icon: <UsersRoundIcon />,
    },
    {
      title: "Parents",
      url: "/dashboard/list/parents",
      icon: <UserSquareIcon />,
    },
    {
      title: "Subjects",
      url: "/dashboard/list/subjects",
      icon: <Newspaper />,
    },
    {
      title: "Classes",
      url: "/dashboard/list/classes",
      icon: <PresentationIcon />,
    },
    {
      title: "Lessons",
      url: "/dashboard/list/lessons",
      icon: <ClipboardPenLine />,
    },
    {
      title: "Exams",
      url: "/dashboard/list/exams",
      icon: <Cuboid />,
    },
    {
      title: "Assignments",
      url: "/dashboard/list/assignments",
      icon: <BookCheck />,
    },
    {
      title: "Results",
      url: "/dashboard/list/results",
      icon: <BookOpenCheck />,
    },
    {
      title: "Attendance",
      url: "/dashboard/list/attendance",
      icon: <ListTodo />,
    },
    {
      title: "Events",
      url: "/dashboard/list/events",
      icon: <CalendarCheck />,
    },
    {
      title: "Messages",
      url: "/dashboard/list/messages",
      icon: <MessageSquareText />,
    },
    {
      title: "Announcements",
      url: "/dashboard/list/announcements",
      icon: <MegaphoneIcon />,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: <CameraIcon />,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: <FileTextIcon />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: <FileTextIcon />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
    },
    {
      title: "Get Help",
      url: "#",
      icon: <CircleHelpIcon />,
    },
    {
      title: "Search",
      url: "#",
      icon: <SearchIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
