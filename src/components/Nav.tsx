"use server";

import axios from "axios";
import { headers } from "next/headers";

import NavClient from "@/components/client/NavClient";
import { mockDataNav } from "@/mockData/mockDataNav";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);

  const res: any = await axios.get(url);
  const resData = res.data;
  // const resData: any = mockDataNav;

  // console.log("Nav() resData: ", resData);

  // const resData2 = resData?.data?.attributes; // strapi v4
  const resData2 = resData?.data; // strapi v5
  const items = resData2?.navigation?.items;

  return <NavClient items={items} />;
}
