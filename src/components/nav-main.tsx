"use client";

import { Fragment } from "react";

import { type Icon, IconFolder } from "@tabler/icons-react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  groupLabel,
  items,
}: {
  groupLabel?: string;
  items?: {
    title: string;
    href?: string;
    target?: string;
    icon?: Icon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarGroupLabel>{groupLabel || "Static Routes"}</SidebarGroupLabel>
        <SidebarMenu>
          {items?.map(({ title, href, target, icon }, idx) => {
            const Icon = icon || IconFolder;
            const Cmp: any = href ? Link : Fragment;
            const cmpProps = href ? { href, target } : {};

            return (
              <SidebarMenuItem key={idx}>
                <Cmp {...cmpProps}>
                  <SidebarMenuButton tooltip={title}>
                    {icon && <Icon />}
                    <span>{title}</span>
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
