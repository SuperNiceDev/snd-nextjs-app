// import { GET_NAV } from "@/gql/GqlQueries";
// import { graphQLClient } from "@/gql/gqlRequest";
import axios from "axios";

import NavClient from "./NavClient";

export default async function Nav() {
  // const data: any = await graphQLClient.request(GET_NAV, { uri: "/" });
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/global?populate[0]=navigation&populate[1]=navigation.items&populate[2]=navigation.items.page&populate[3]=footer`;
  const res: any = await axios.get(url);

  const navigation = res?.data?.data?.attributes?.navigation?.items;
  const items = navigation?.map?.((item: any) => {
    return {
      slug: `/${item?.page?.data?.attributes?.slug || ""}`,
      href: item?.href || "",
      title: item?.label || "",
    };
  });

  // console.log("Nav() url: ", url);
  // console.log("Nav() items: ", items);

  return <NavClient items={items} />;
}
