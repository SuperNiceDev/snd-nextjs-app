"use server";

import axios from "axios";
import { headers } from "next/headers";

import NavClient, { mockDataNav } from "@/components/client/NavClient";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);

  // const res: any = await axios.get(url);
  // const resData = res.data;
  const resData: any = mockDataNav;

  // console.log("Nav() resData: ", resData);

  const resData2 = resData?.data?.attributes;
  const items = resData2?.navigation?.items;

  return <NavClient items={items} />;
}
