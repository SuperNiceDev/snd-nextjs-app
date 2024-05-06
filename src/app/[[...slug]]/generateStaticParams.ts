import { graphQLClient } from "@/gql/gqlRequest";
import { GET_ALL_SUBPAGES_HEADER_INFOS_OF_PARENT } from "@/gql/GqlQueries";
import getAllPaths from "@/utils/getAllPaths";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  const res: any = await graphQLClient.request(
    GET_ALL_SUBPAGES_HEADER_INFOS_OF_PARENT,
  );

  // const paths: any = [
  //   { slug: ["home"] },
  //   { slug: ["projects", "project-1"] },
  //   { slug: ["about"] },
  // ];

  const paths = getAllPaths(res?.pages?.nodes);

  // console.log("getStaticPaths paths: ", paths);
  // paths.forEach((item: any) => {
  //   console.log("getStaticPaths item: ", item);
  // });

  return paths;
}
