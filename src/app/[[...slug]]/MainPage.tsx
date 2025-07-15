import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

import Main from "@/components/Main/Main";
import { mockDataMainPage } from "@/mockData/mockDataMainPage";
import { PageParamsType } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import getNavPageApiUrl from "@/utils/getNavPageApiUrl";

type MainPagePropsType = {
  params: PageParamsType;
};

type ApiResType = {
  data: {
    sections: object[];
  }[];
};

export default async function MainPage({ params }: MainPagePropsType) {
  const { slug } = await params;
  const path = `/${slug?.join("/") || ""}`;
  const url = getNavPageApiUrl(slug);

  let resData;
  try {
    const res: AxiosResponse<ApiResType> = await axiosInstance.get(url);
    resData = res.data;
  } catch (err) {
    console.warn("MainPage() err: ", err);
    resData = mockDataMainPage;
  }

  const data = resData?.data;

  if ((path && !data?.length) || (!path && !data)) {
    notFound();
  }

  const dataTmp = Array.isArray(data) ? data[0] : data;
  const sections = dataTmp?.sections;
  // console.log("MainPage() dataTmp: ", dataTmp);

  return <Main sections={sections} />;
}
