// https://github.com/vercel/next.js/issues/49438#issuecomment-1706704973

import { GraphQLClient } from "graphql-request";
import { cache } from "react";

const gqlApiUrl = process.env.NEXT_PUBLIC_CMS_API_GRAPHQL_URL as string;

export const graphQLClient = new GraphQLClient(gqlApiUrl, {
  fetch: cache(async (url: any, params?: any) =>
    fetch(url, { ...params, next: { revalidate: 10 } }),
  ),
});
