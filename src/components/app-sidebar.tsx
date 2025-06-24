"use client";

import React, { ComponentProps, useEffect, useState } from "react";

import { IconFolder, IconInnerShadowTop } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mockDataNav } from "@/mockData/mockDataNav";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "snd-react-lib Components",
      href: "/snd-react-lib-components",
      icon: IconFolder,
    },
    {
      title: "MUI Components",
      href: "/mui-components",
      icon: IconFolder,
    },
    {
      title: "shadcn Dashboard",
      href: "/dashboard",
      icon: IconFolder,
    },
    {
      title: "API Hello Test",
      href: "/api-hello-test",
      icon: IconFolder,
    },
    {
      title: "Auth Provider Test",
      href: "/auth/signin",
      icon: IconFolder,
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const [navItems, setNavItems] = useState<any[] | undefined>();
  const pathname = usePathname();

  useEffect(() => {
    const callApi = async () => {
      const url = getNavRestApiUrl(pathname);

      let resData: any = null;
      try {
        const res: any = await axiosInstance.get(url);
        resData = res.data;
      } catch (err: any) {
        console.warn("NavClient() err: ", err);
        resData = mockDataNav;
      }

      const items2 = resData?.data?.navigation?.items?.map((item: any) => {
        const { label, href, target } = item;
        const slug = item?.page?.slug;
        return {
          title: label,
          href: slug || href,
          target,
          icon: IconFolder,
        };
      });

      setNavItems(items2);
    };

    callApi();
  }, [pathname]);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="https://www.supernice-dev.com/en" target="_blank">
                <IconInnerShadowTop />
                <span className="text-base font-semibold">SuperNice Dev</span>
              </a>
            </SidebarMenuButton>
            <div className="absolute right-0 top-0">
              <ThemeToggle />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain groupLabel="Dynamic Routes (Strapi CMS)" items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        {/*  */}
      </SidebarFooter>
    </Sidebar>
  );
}
