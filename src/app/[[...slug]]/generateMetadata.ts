import type { Metadata } from "next";

import { mockDataGenerateMetadata } from "@/mockData/mockDataGenerateMetadata";
import axiosInstance from "@/utils/axiosInstance";
import getLocale from "@/utils/getLocale";
import getPopulateSlugFilter from "@/utils/getPopulateSlugFilter";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const { slug: pSlug } = await params;
  const slug = `/${pSlug?.join("/") || ""}`;

  const filters = getPopulateSlugFilter(slug);
  const locale = getLocale(pSlug);
  const fields = `&populate[seo][populate]=*`;
  const publicationState = ``;
  const url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;

  let resData: any = null;
  try {
    const res: any = await axiosInstance.get(url);
    resData = res.data;
  } catch (err: any) {
    console.warn("generateMetadata() err: ", err);
    resData = mockDataGenerateMetadata;
  }

  const metadata = resData?.data?.[0]?.seo;

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
  };
}
