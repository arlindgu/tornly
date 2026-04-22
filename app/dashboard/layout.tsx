import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import BreadcrumbHeader from "@/components/layout/breadcrumb-header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard with profile, faction, market, and racing information.",
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BreadcrumbHeader />
        <div className="p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
