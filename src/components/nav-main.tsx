"use client";

import { Fragment } from "react";

import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavDataNavItemType } from "@/types/types";

export function NavMain({
  groupLabel,
  items,
}: {
  groupLabel?: string;
  items?: NavDataNavItemType[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarGroupLabel>{groupLabel || "Static Routes"}</SidebarGroupLabel>
        <SidebarMenu>
          {items?.map(({ label, href, target }, idx) => {
            // const Icon = icon || IconFolder;
            const Cmp: any = href ? Link : Fragment;
            const cmpProps = href ? { href, target } : {};

            return (
              <SidebarMenuItem key={idx}>
                <Cmp {...cmpProps}>
                  <SidebarMenuButton tooltip={label}>
                    <IconFolder />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </Cmp>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
