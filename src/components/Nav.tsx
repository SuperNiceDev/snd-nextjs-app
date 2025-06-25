"use server";

import { headers } from "next/headers";

import NavClient from "@/components/NavClient";
import { AppSidebar } from "@/components/app-sidebar";
import { mockDataNav } from "@/mockData/mockDataNav";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);
  console.clear();

  let resData: any = null;
  try {
    const res: any = await axiosInstance.get(url);
    resData = res.data;
  } catch (err: any) {
    console.warn("Nav() err: ", err);
    resData = mockDataNav;
  }
  const items = resData?.data?.navigation?.items?.map((item: any) => {
    const { label, href, target } = item;
    const slug = item?.page?.slug;
    return {
      title: label,
      href: slug || href,
      target,
    };
  });

  // return <NavClient items={items} />;
  return <AppSidebar variant="inset" items={items} />;
}
