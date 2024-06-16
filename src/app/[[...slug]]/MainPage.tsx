import axios from "axios";
import { notFound } from "next/navigation";

import MainPageClient from "./MainPageClient";

export default async function MainPage({ params }: any) {
  const slug = params?.slug?.join("/") || "";
  const populate = `fields=*&populate[sections][fields]=*&populate[sections][populate][row]=*`;
  let url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages?filters[slug][$eq]=${slug}&${populate}`;
  if (!slug) {
    url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages/1?${populate}`;
  }
  const res: any = await axios.get(url);
  const pageData = res.data?.data;

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("slug: ", slug);
  // console.log("url: ", url);
  // console.log("pageData: ", pageData);
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  if ((slug && !pageData?.length) || (!slug && !pageData)) {
    notFound();
  }

  const sections = pageData?.attributes?.sections;

  const footerApiUrl = `${process.env.NEXT_PUBLIC_WEBSITE_API}/global?populate[0]=footer&populate[1]=footer.nav`;
  const footerApiRes: any = await axios.get(footerApiUrl);
  const footer = footerApiRes.data?.data?.attributes?.footer;

  return <MainPageClient sections={sections} footer={footer} />;
}
