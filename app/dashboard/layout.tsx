import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import BreadcrumbHeader from "@/components/layout/breadcrumb-header";

const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard with profile, faction, market, and racing information.",
};

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BreadcrumbHeader />
        <div>{children}</div>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
