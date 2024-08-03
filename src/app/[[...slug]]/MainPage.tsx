import axios from "axios";
import { notFound } from "next/navigation";

import MainPageClient from "../../components/client/MainPageClient";

export default async function MainPage({ params }: any) {
  const apiUrl = process.env.NEXT_PUBLIC_WEBSITE_API_URL;
  const slug = params?.slug?.join("/") || "";
  const fields = `fields=*&populate[sections][fields]=*&populate[sections][populate][row]=*`;
  let url = `${apiUrl}/pages?filters[slug][$eq]=${slug}&${fields}`;
  if (!slug) {
    url = `${apiUrl}/pages/1?${fields}`;
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

  const footerApiUrl = `${apiUrl}/global?populate[0]=footer&populate[1]=footer.nav`;
  const footerApiRes: any = await axios.get(footerApiUrl);
  const footer = footerApiRes.data?.data?.attributes?.footer;

  return <MainPageClient sections={sections} footer={footer} />;
}
