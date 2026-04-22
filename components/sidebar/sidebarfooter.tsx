"use client";

import getUserProfile, { Profile } from "@/lib/api/user/profile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { isSuccess } from "@/lib/api/errors/errors";
import { useEffect, useState } from "react";
import { ChevronsUpDown, LogOut, Settings } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { deleteCookie } from "@/lib/cookies";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

export default function SidebarProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserProfile() {
          setLoading(true);
            const userProfile = await getUserProfile();

            if (!isSuccess(userProfile)) {

            } else {
                setProfile(userProfile.data.profile);
                setLoading(false);
            }
        }
        fetchUserProfile();
    }, []);



    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={profile?.image} alt={profile?.name} />
                  <AvatarFallback className="rounded-lg">{profile?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {loading ? (
                  <Skeleton className="h-4 w-24" />
                ) : (
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{profile?.name}</span>
                    <span className="truncate text-xs">[{profile?.id}]</span>
                  </div>
                )}
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <Suspense fallback={<Skeleton className="h-4 w-24" />}>
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={profile?.image} alt={profile?.name} />
                      <AvatarFallback className="rounded-lg">
                        {profile?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">
                        {profile?.name}
                      </span>
                      <span className="truncate text-xs">{profile?.id}</span>
                    </div>
                  </div>
                </Suspense>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={`/dashboard/settings`}>
                  <DropdownMenuItem>
                    <Settings />
                    Settings
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  deleteCookie("tornly:apikey");
                  window.location.href = "/login";
                }}
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    );
}