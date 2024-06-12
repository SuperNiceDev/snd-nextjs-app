import axios from "axios";
import { notFound } from "next/navigation";

import { GET_NAV, GET_PAGE_BY_URI } from "@/gql/GqlQueries";
import { graphQLClient } from "@/gql/gqlRequest";

import MainPageClient from "./MainPageClient";

export default async function MainPage({ params }: any) {
  const slug = params?.slug?.join("/") || "/";

  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages?filters[slug][$eq]=${slug}&fields=*&populate[seo]=*&populate[sections][fields]=*&populate[sections][populate][rows]=*`;
  // const pageData: any = await graphQLClient.request(GET_PAGE_BY_URI, {
  //   url,
  // });
  const res: any = await axios.get(url);
  const pageData = res.data?.data;

  console.log("--------------------------------------");
  console.log("--------------------------------------");
  console.log("--------------------------------------");
  console.log("url: ", url);
  console.log("pageData: ", pageData);
  console.log("--------------------------------------");
  console.log("--------------------------------------");
  console.log("--------------------------------------");

  if (!pageData?.length) {
    notFound();
  }

  const sections = pageData?.attributes?.sections;

  // const resAcfGlobals: any = await graphQLClient.request(GET_NAV, {
  //   uri: "/",
  // });
  const footer = null;

  return <MainPageClient sections={sections} footer={footer} />;
}
