import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

import Main from "@/components/Main/Main";
import { mockDataMainPage } from "@/mockData/mockDataMainPage";
import axiosInstance from "@/utils/axiosInstance";
import getNavPageApiUrl from "@/utils/getNavPageApiUrl";

type MainPagePropsType = {
  params: Promise<{ slug: string[] }>;
};

export default async function MainPage({ params }: MainPagePropsType) {
  const { slug: pSlug } = await params;
  const slug = `/${pSlug?.join("/") || ""}`;
  const url = getNavPageApiUrl(pSlug);

  let resData;
  try {
    const res: AxiosResponse = await axiosInstance.get(url);
    resData = res.data;
  } catch (err) {
    console.warn("MainPage() err: ", err);
    resData = mockDataMainPage;
  }

  const resData2 = resData?.data;

  if ((slug && !resData2?.length) || (!slug && !resData2)) {
    notFound();
  }

  const attributes = resData2?.length ? resData2?.[0] : resData2;
  const sections = attributes?.sections;

  // console.log("MainPage() attributes:   ", attributes);

  return <Main sections={sections} />;
}
