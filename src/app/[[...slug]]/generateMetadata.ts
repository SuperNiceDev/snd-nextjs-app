import { AxiosResponse } from "axios";
import type { Metadata } from "next";

import { mockDataGenerateMetadata } from "@/mockData/mockDataGenerateMetadata";
import { PageParamsType, SearchParamsType } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import getLocale from "@/utils/getLocale";
import getPopulateSlugFilter from "@/utils/getPopulateSlugFilter";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

type ApiResType = {
  data: {
    seo: {
      metaTitle: string;
      metaDescription: string;
    };
  }[];
};

type GenerateMetadataType = {
  params: PageParamsType;
  searchParams: SearchParamsType;
};

export default async function generateMetadata({
  params,
  // searchParams,
}: GenerateMetadataType): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug?.join("/") || ""}`;

  const filters = getPopulateSlugFilter(path);
  const locale = getLocale(path);
  const fields = `&populate[seo][populate]=*`;
  const publicationState = ``;
  const url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;

  let resData;
  try {
    const res: AxiosResponse<ApiResType> = await axiosInstance.get(url);
    resData = res.data;
  } catch (err) {
    console.warn("generateMetadata() err: ", err);
    resData = mockDataGenerateMetadata;
  }

  const metadata = resData?.data?.[0]?.seo;

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
  };
}
