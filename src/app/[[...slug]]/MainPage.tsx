import { notFound } from "next/navigation";

import { graphQLClient } from "@/gql/gqlRequest";
import { GET_NAV, GET_PAGE_BY_URI } from "@/gql/GqlQueries";
import parsePageData from "@/utils/parsePageData";

import MainPageClient from "./MainPageClient";

export default async function MainPage({ params }: any) {
  const uri = `${params?.id?.join("/") || "/"}`;
  const pageData: any = await graphQLClient.request(GET_PAGE_BY_URI, {
    uri,
  });

  if (!pageData?.pageBy) {
    notFound();
  }

  const pageDataParsed = parsePageData(pageData);
  const sections = pageDataParsed?.sections;

  const resAcfGlobals: any = await graphQLClient.request(GET_NAV, {
    uri: "/",
  });
  const footer = resAcfGlobals?.pageBy?.acfGlobals?.footer;

  return <MainPageClient sections={sections} footer={footer} />;
}
