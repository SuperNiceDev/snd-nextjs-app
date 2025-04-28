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

  // const res = await axios.get(url);
  // const resData = res.data;
  const resData: any = mockDataNav;
  // const resData: any = {};
  // console.log("MainPage() resData: ", resData);

  const resData2 = resData?.data;

  if ((slug && !resData2?.length) || (!slug && !resData2)) {
    notFound();
  }

  const attributes = resData2?.length
    ? resData2?.[0]?.attributes
    : resData2?.attributes;
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

const mockDataNav = {
  data: [
    {
      id: 2,
      attributes: {
        title: "Startseite",
        slug: "/de",
        createdAt: "2024-05-03T09:10:56.327Z",
        updatedAt: "2025-04-26T08:37:33.949Z",
        publishedAt: "2025-04-24T10:05:14.504Z",
        locale: "de",
        sections: [
          {
            id: 13,
            __component: "blocks.row",
            rowId: "rowId0",
            richText: [
              {
                id: 3,
                text: "Startseite - sections - row - richText - text",
                size: "xs",
              },
            ],
            link: [],
          },
        ],
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};
