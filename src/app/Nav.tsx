// import { GET_NAV } from "@/gql/GqlQueries";
// import { graphQLClient } from "@/gql/gqlRequest";
import axios from "axios";

import NavClient from "./NavClient";

export default async function Nav() {
  // const data: any = await graphQLClient.request(GET_NAV, { uri: "/" });
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/global?populate[0]=navigation&populate[1]=navigation.items`;
  const res: any = await axios.get(url);

  const navigation = res?.data?.data?.attributes?.navigation?.items;
  const items = navigation?.map?.((item: any) => ({
    href: item?.href || "",
    title: item?.label || "",
  }));

  console.log("Nav() res?.data?.data: ", res?.data?.data);
  // console.log("Nav() navi: ", navigation);
  // console.log("Nav() items: ", items);

  return <NavClient items={items} />;
}
