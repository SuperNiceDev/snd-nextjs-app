"use server";

import { AxiosResponse } from "axios";
import { headers } from "next/headers";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { mockDataNav } from "@/mockData/mockDataNav";
import { NavDataNavItemType, NavDataType } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);

  let resData: NavDataType;
  try {
    const res: AxiosResponse<NavDataType> = await axiosInstance.get(url);
    resData = res.data;
  } catch (err) {
    // console.warn("Nav() err: ", err);
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
      };
    },
  );

  return <AppSidebar variant="inset" items={items} />;
}
