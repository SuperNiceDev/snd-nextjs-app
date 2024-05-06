import { graphQLClient } from "@/gql/gqlRequest";
import { GET_NAV } from "@/gql/GqlQueries";
// import NavCmp from "@/components/organisms/Nav";

export default async function Nav() {
  const gqlApiUrl = process.env.NEXT_PUBLIC_CMS_API_GRAPHQL_URL;
  const data: any = await graphQLClient.request(GET_NAV, { uri: "/" });
  const items = data?.pageBy?.acfGlobals?.nav?.nav;

  // return <NavCmp items={items} />;
  return <nav className="nav">Nav</nav>;
}
