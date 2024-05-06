// import { headers } from "next/headers";

import { graphQLClient } from "@/gql/gqlRequest";
import { GET_PAGE_BY_URI, GET_NAV } from "@/gql/GqlQueries";
import parsePageData from "@/utils/parsePageData";

import MainPageClient from "./[[...slug]]/MainPageClient";

const NotFound = async (args: any) => {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // console.log("NotFound() headersList: ", headersList);

  const pageData: any = await graphQLClient.request(GET_PAGE_BY_URI, {
    uri: "/404-error",
  });
  const pageDataParsed = parsePageData(pageData);
  const sections = pageDataParsed?.sections;
  const resAcfGlobals: any = await graphQLClient.request(GET_NAV, {
    uri: "/",
  });
  const footer = resAcfGlobals?.pageBy?.acfGlobals?.footer;

  return <MainPageClient sections={sections} footer={footer} />;
};

export default NotFound;
