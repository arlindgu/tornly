"use client";

import getUserProfile, { Profile } from "@/lib/api/user/profile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { isSuccess } from "@/lib/api/errors/errors";
import { useEffect, useState } from "react";
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Settings, Sparkles } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { deleteCookie } from "@/lib/cookies";

export default function SidebarProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        async function fetchUserProfile() {
            const userProfile = await getUserProfile();

            if (!isSuccess(userProfile)) {
                console.log("Failed to fetch user profile for sidebar:", userProfile.error);
            } else {
                setProfile(userProfile.data.profile);
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
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{profile?.name}</span>
                  <span className="truncate text-xs">[{profile?.id}]</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={profile?.image} alt={profile?.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{profile?.name}</span>
                    <span className="truncate text-xs">{profile?.id}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {
                deleteCookie('tornly:apikey')
                window.location.href = "/login";
              }}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    );
}