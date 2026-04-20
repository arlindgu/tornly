"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { SidebarNavigation } from "./sidebargroup";
import SidebarProfile from "./sidebarfooter";

export function AppSidebar() {
    const pathname = usePathname();


  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarNavigation />
      </SidebarContent>
      <SidebarFooter>
        <SidebarProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
