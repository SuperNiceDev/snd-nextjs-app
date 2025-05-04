"use server";

import { headers } from "next/headers";

import NavClient from "@/components/NavClient";
import { mockDataNav } from "@/mockData/mockDataNav";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);

  let resData: any = null;
  try {
    const res: any = await axiosInstance.get(url);
    resData = res.data;
  } catch (err: any) {
    console.warn("Nav() err: ", err);
    resData = mockDataNav;
  }

  const resData2 = resData?.data;
  const items = resData2?.navigation?.items;

  return <NavClient items={items} />;
}
