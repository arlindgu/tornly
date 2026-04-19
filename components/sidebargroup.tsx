"use client";

import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface SubLink {
  name: string;
  href: string;
}

interface GroupLink {
  name: string;
  href: string;
  SubLinks?: SubLink[];
}

const sidebarLinks: GroupLink[] = [
    {
    name: "Dashboard",
    href: "/dashboard",
    },
  {
    name: "Profile",
    href: "/profile",
    SubLinks: [
        { name: "Overview", href: "/profile/overview" 
        },
        { name: "Stats", href: "/profile/battlestats" },

    ],
  },
  {
    name: "Faction",
    href: "/faction",
    },
    {
        name: "Market",
        href: "/market",
    },
    {
        name: "Racing",
        href: "/racing",
    },
    {
        name: "Forum",
        href: "/forum",
    },
    {
        name: "Property",
        href: "/property",
    },

];

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((group) => (
        <SidebarGroup key={group.href}>
          <SidebarGroupLabel >{group.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.SubLinks && group.SubLinks.length > 0 ? (
                <Collapsible
                  defaultOpen={pathname.startsWith(group.href)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton isActive={pathname === group.href}>
                        {group.name}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {group.SubLinks.map((sub) => (
                          <SidebarMenuSubItem key={sub.href}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === sub.href}
                            >
                              <a href={sub.href}>{sub.name}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === group.href}>
                    <a href={group.href}>{group.name}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
