"use client";

import React, { ComponentProps, useEffect, useState } from "react";

import { IconFolder, IconInnerShadowTop } from "@tabler/icons-react";
import { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
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
import { NavDataNavItemType, NavDataType } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

const data = {
  navMain: [
    {
      label: "snd-react-lib Components",
      href: "/snd-react-lib-components",
      icon: IconFolder,
    },
    {
      label: "shadcn Dashboard",
      href: "/dashboard",
      icon: IconFolder,
    },
    {
      label: "MUI Components",
      href: "/mui-components",
      icon: IconFolder,
    },
    {
      label: "API Hello Test",
      href: "/api-hello-test",
      icon: IconFolder,
    },
    {
      label: "Auth Provider Test",
      href: "/auth/signin",
      icon: IconFolder,
    },
  ],
};

type Props = ComponentProps<typeof Sidebar> & {
  items?: NavDataNavItemType[];
};

export function AppSidebar(props: Props) {
  const { items, ...propsRest } = props;
  const [navItems, setNavItems] = useState<NavDataNavItemType[] | undefined>(
    items,
  );
  const pathname = usePathname();

  const { data: session } = useSession();
  // console.log("session: ", session);

  useEffect(() => {
    const callApi = async () => {
      const url = getNavRestApiUrl(pathname);

      let resData: NavDataType;
      try {
        const res: AxiosResponse<NavDataType> = await axiosInstance.get(url);
        resData = res.data;
      } catch (err) {
        console.warn("NavClient() err: ", err);
        resData = mockDataNav;
      }

      const items = resData?.data?.navigation?.items?.map(
        (item: NavDataNavItemType) => {
          const { label, href, target } = item;
          const slug = item?.page?.slug;
          return {
            label,
            href: slug || href,
            target,
            icon: IconFolder,
          };
        },
      );

      setNavItems(items);
    };

    callApi();
  }, [pathname]);

  return (
    <Sidebar collapsible="offcanvas" {...propsRest}>
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
            <div className="absolute top-0 right-0">
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
        <NavUser user={session?.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
