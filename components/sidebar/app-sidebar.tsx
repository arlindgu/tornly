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
import { initDB } from "@/lib/db";

export function AppSidebar() {
    const pathname = usePathname();
    initDB(); // Initialize the database when the sidebar component mounts


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
