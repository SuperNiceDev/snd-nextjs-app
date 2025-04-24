import axios from "axios";

import NavClient from "@/components/client/NavClient";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function Nav() {
  const locale = ``;
  // const locale = `locale=de`;
  const rootFields = `&populate[navigation][populate]=*`;
  // const rootFields = `&populate[navigation][populate][page]=*`;
  const deepFields = ``;
  // const deepFields = `&populate=page`;
  const fields = `${rootFields}${deepFields}`;
  const url = `${apiUrl}/global?${locale}${fields}`;

  const res: any = await axios.get(url);
  const resData = res.data?.data?.attributes;
  const navItems = resData?.navigation?.items;
  console.log("Nav() resData?.navigation: ", resData?.navigation);

  navItems?.forEach((item: any) => {
    console.log("navItems item: ", item);
  });

  // const items = navItems?.map?.((item: any) => {
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
