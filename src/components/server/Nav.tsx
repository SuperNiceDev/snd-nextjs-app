import axios from "axios";

import NavClient from "@/components/client/NavClient";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function Nav({ params }: any) {
  // console.log("Nav() params: ", params);

  // const url = `${apiUrl}/global?populate[0]=navigation&populate[1]=navigation.items&populate[2]=navigation.items.page&populate[3]=footer`;
  // const url = `${apiUrl}/global?populate[0]=navigation&populate[1]=navigation.items&populate[2]=navigation.items.page`;
  const url = `${apiUrl}/global?locale=de&populate[navigation][populate]=*`;
  // const url = `${apiUrl}/pages`;
  const res: any = await axios.get(url);
  const resData = res.data?.data?.attributes;
  const navigation = resData?.navigation?.items;
  // console.log("Nav() resData: ", resData);
  console.log("Nav() navigation: ", navigation);

  // const navigation = res?.data?.data?.attributes?.navigation?.items;
  // const items = navigation?.map?.((item: any) => {
  //   return {
  //     title: item?.label || "",
  //     slug: `/${item?.page?.data?.attributes?.slug || ""}`,
  //     href: item?.href || "",
  //   };
  // });

  const items = [
    {
      title: "About",
      slug: `/about`,
      href: "",
    },
    {
      title: "Über uns",
      slug: `/de/ueber-uns`,
      href: "",
    },
    {
      title: "NoPage",
      slug: `/no-page`,
      href: "",
    },
    {
      title: "nav 3",
      slug: ``,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "Signin",
      slug: `/auth/signin`,
      href: "",
    },
  ];

  return <NavClient items={items} />;
}
