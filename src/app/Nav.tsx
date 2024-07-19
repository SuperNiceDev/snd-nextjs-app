import axios from "axios";

import NavClient from "./NavClient";

export default async function Nav() {
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API_URL}/global?populate[0]=navigation&populate[1]=navigation.items&populate[2]=navigation.items.page&populate[3]=footer`;
  const res: any = await axios.get(url);

  const navigation = res?.data?.data?.attributes?.navigation?.items;
  const items = navigation?.map?.((item: any) => {
    return {
      title: item?.label || "",
      slug: `/${item?.page?.data?.attributes?.slug || ""}`,
      href: item?.href || "",
    };
  });

  return <NavClient items={items} />;
}
