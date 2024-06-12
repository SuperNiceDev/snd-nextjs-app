// import { GET_NAV } from "@/gql/GqlQueries";
// import { graphQLClient } from "@/gql/gqlRequest";
import axios from "axios";

import NavClient from "./NavClient";

export default async function Nav() {
  // const data: any = await graphQLClient.request(GET_NAV, { uri: "/" });
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages`;
  const res: any = await axios.get(url);

  const items = res?.data?.data?.map((item: any) => ({
    slug: item?.attributes?.slug || "",
    title: item?.attributes?.title || "",
  }));

  return <NavClient items={items} />;
}
