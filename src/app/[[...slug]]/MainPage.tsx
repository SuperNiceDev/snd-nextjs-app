import axios from "axios";
import { notFound } from "next/navigation";

// import MainPageClient from "@/components/client/MainPageClient";
import Main from "@/components/server/Main";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function MainPage({ params }: any) {
  const { slug: pSlug } = await params;
  const slug = `/${pSlug?.join("/") || ""}`;
  // console.log("MainPage() slug: ", slug);

  const filters = `filters[slug][$eq]=${slug}`;

  // const locale = ``;
  const locale = pSlug?.[0] === "de" ? `&locale=de` : "";

  const rootFields = ``;
  // const rootFields = `&fields[0]=title`;
  // const rootFields = `&fields=*`;

  const sectionsFields = `&populate[sections][populate]=*`;
  // https://docs-v4.strapi.io/dev-docs/api/rest/populate-select#population
  // &populate[dynamic-zone-name][populate]=*

  // const fields = ``;
  const fields = `${rootFields}${sectionsFields}`;

  const publicationState = ``;
  // const publicationState = `&publicationState=live`;

  let url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;
  if (!slug) {
    url = `${apiUrl}/pages/1?${locale}${fields}${publicationState}`;
  }

  const res = await axios.get(url);
  const resData = res.data?.data;
  // console.log("MainPage() resData: ", resData);

  if ((slug && !resData?.length) || (!slug && !resData)) {
    notFound();
  }

  const attributes = resData?.length
    ? resData?.[0]?.attributes
    : resData?.attributes;
  const sections = attributes?.sections;

  // console.log("MainPage() attributes:   ", attributes);
  // console.log("MainPage() sections:   ", sections);

  // const footerApiUrl = `${apiUrl}/global?${locale}&populate[footer][populate]=*`;
  // const footerApiRes: any = await axios.get(footerApiUrl);
  // const footerRes = footerApiRes.data?.data?.attributes?.footer;
  // console.log("MainPage() footerRes:   ", footerRes);
  // footerRes?.nav?.forEach((item: any) => {
  //   console.log("MainPage() footer item: ", item);
  // });

  // return <MainPageClient sections={sections} />;
  return <Main sections={sections} />;
}
