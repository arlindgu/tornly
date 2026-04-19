"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarNavigation } from "./sidebargroup";


interface GroupLink {
    name: string;
    href: string;
    SubLinks?: SubGroupLink[];
}

interface SubGroupLink {
    name: string;
    href: string;
}

const sidebarLinks: GroupLink[] = [
    {
        name: "General",
        href: "/dashboard",
        SubLinks: [
            { name: "Overview", href: "/dashboard/overview" },
            { name: "Stats", href: "/dashboard/stats" },
        ],
    },
];

export function AppSidebar() {
    const pathname = usePathname();


  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarNavigation />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
