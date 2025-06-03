import { notFound } from "next/navigation";

import Main from "@/components/Main/Main";
import { mockDataMainPage } from "@/mockData/mockDataMainPage";
import axiosInstance from "@/utils/axiosInstance";
import getLocale from "@/utils/getLocale";
import getPopulateSlugFilter from "@/utils/getPopulateSlugFilter";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function MainPage({ params }: any) {
  const { slug: pSlug } = await params;
  const slug = `/${pSlug?.join("/") || ""}`;
  const filters = getPopulateSlugFilter(slug);
  const locale = getLocale(pSlug);
  const rootFields = ``;
  const sectionsFields = `&populate[sections][populate]=*`;
  const fields = `${rootFields}${sectionsFields}`;
  const publicationState = ``;
  // const publicationState = `&publicationState=live`;
  const url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;

  let resData: any = null;
  try {
    const res: any = await axiosInstance.get(url);
    resData = res.data;
  } catch (err: any) {
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
