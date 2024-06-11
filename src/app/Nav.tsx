import { graphQLClient } from "@/gql/gqlRequest";
import { GET_NAV } from "@/gql/GqlQueries";

import NavClient from "./NavClient";

export default async function Nav() {
  const data: any = await graphQLClient.request(GET_NAV, { uri: "/" });

  return <NavClient />;
}
