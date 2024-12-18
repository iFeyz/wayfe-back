"use client"


import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarProvider,
    SidebarRail,
  } from "@/components/ui/sidebar"
import { SideBarMain } from "./sidebar-main"
import { NavUser } from "./sidebar-user"
import { useSession } from "../../../../lib/auth-client"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  
  const data = {
    user: {
      name: session?.user?.name ?? "Guest",
      email: session?.user?.email ?? "",
      avatar: session?.user?.image ?? "",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: Bot,
            isActive: true,
            items: [
              {
                title: "Dashboard",
                url: "/dashboard",
              },
            ],
          },
      {
        title: "DataBase",
        url: "/dashboard/db",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Users",
            url: "/dashboard/db",
          },
          {
            title: "Form Results",
            url: "/dashboard/db/form",
          }
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }

  return (
    <SidebarProvider className="fixed">
        <Sidebar collapsible="icon" {...props}>
 
            <SidebarContent>
                <SideBarMain items={data.navMain}/>
            </SidebarContent>
            <SidebarRail />
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    </SidebarProvider>
  )
}