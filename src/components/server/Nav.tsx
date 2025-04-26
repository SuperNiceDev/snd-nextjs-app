"use server";

import axios from "axios";
import { headers } from "next/headers";

import NavClient from "@/components/client/NavClient";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

export default async function Nav() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  const url = getNavRestApiUrl(pathname);
  const res: any = await axios.get(url);
  const resData = res.data?.data?.attributes;
  const items = resData?.navigation?.items;

  return <NavClient items={items} />;
}
