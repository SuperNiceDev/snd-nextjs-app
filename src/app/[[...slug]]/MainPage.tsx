import axios from "axios";
import { notFound } from "next/navigation";

import Main from "@/components/Main/Main";
import getLocale from "@/utils/getLocale";
import getPopulateSlugFilter from "@/utils/getPopulateSlugFilter";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function MainPage({ params }: any) {
  const { slug: pSlug } = await params;
  const slug = `/${pSlug?.join("/") || ""}`;
  // console.log("MainPage() slug: ", slug);

  const filters = getPopulateSlugFilter(slug);

  // const locale = ``;
  const locale = getLocale(pSlug);

  const rootFields = ``;
  // const rootFields = `&fields[0]=title`;
  // const rootFields = `&fields=*`;

  const sectionsFields = `&populate[sections][populate]=*`;
  // https://docs-v4.strapi.io/dev-docs/api/rest/populate-select#population
  // &populate[dynamic-zone-name][populate]=*

  // const fields = ``;
  const fields = `${rootFields}${sectionsFields}`;

  const publicationState = ``;
  // const publicationState = `&publicationState=live`;

  const url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;

  const res = await axios.get(url);
  const resData = res.data;
  // const resData: any = mockDataNav;
  // const resData: any = {};
  // console.log("MainPage() resData: ", resData);

  const resData2 = resData?.data;

  if ((slug && !resData2?.length) || (!slug && !resData2)) {
    notFound();
  }

  // strapi v4
  // const attributes = resData2?.length
  //   ? resData2?.[0]?.attributes
  //   : resData2?.attributes;

  // strapi v5
  const attributes = resData2?.length ? resData2?.[0] : resData2;
  const sections = attributes?.sections;

  // console.log("MainPage() attributes:   ", attributes);
  // console.log("MainPage() sections:   ", sections);

  return <Main sections={sections} />;
}
