import type { Metadata } from "next";

import { graphQLClient } from "../../gql/gqlRequest";
import { GET_PAGE_HEADER_BY_URI } from "../../gql/GqlQueries";
import parsePageData from "../../utils/parsePageData";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

export default async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const uri = `${params?.id?.join("/") || "/"}`;
  let data: any = await graphQLClient.request(GET_PAGE_HEADER_BY_URI, { uri });

  if (!data?.pageBy) {
    data = await graphQLClient.request(GET_PAGE_HEADER_BY_URI, {
      uri: "/404-error",
    });
  }

  const dataParsed: any = parsePageData(data);
  const { title, headerDescription, allowSearchEngines } = dataParsed;
  const robots = allowSearchEngines ? null : "none";

  // console.log("::::::::::::::::::::::::");
  // console.log(" ");
  // console.log("generateMetadata dataParsed: ", dataParsed);
  // console.log(" ");
  // console.log("::::::::::::::::::::::::");

  return {
    title,
    description: headerDescription,
    robots,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}
