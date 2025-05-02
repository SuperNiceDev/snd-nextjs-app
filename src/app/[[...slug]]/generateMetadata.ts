import axios from "axios";
import type { Metadata } from "next";

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

  const res = await axios.get(url);
  const resData = res.data;
  // const resData = mockDataGenerateMetadata;
  // const resData = {};
  // console.log("generateMetadata() resData: ", resData);

  // const metadata = resData?.data?.[0]?.attributes?.seo; // strapi v4
  const metadata = resData?.data?.[0]?.seo; // strapi v5

  // console.log("::::::::::::::::::::::::");
  // console.log(" ");
  // console.log("generateMetadata metadata: ", metadata);
  // console.log(" ");
  // console.log("::::::::::::::::::::::::");

  // if (!metadata) {
  //     /404-error
  // }

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    // robots,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}
