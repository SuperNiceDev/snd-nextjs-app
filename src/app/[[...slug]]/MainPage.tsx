import axios from "axios";
import { notFound } from "next/navigation";

// import MainPageClient from "@/components/client/MainPageClient";
import Main from "@/components/server/Main";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

export default async function MainPage({ params }: any) {
  const { slug: pSlug } = await params;
  const slug = pSlug?.join("/") || "";
  console.log("MainPage() slug: ", slug);

  // --------------------------------------

  const rootFields = ``;
  // const rootFields = `&fields[0]=title`;
  // const rootFields = `&fields=*`;

  const sectionsFields = `&populate[sections][populate]=*`;
  // https://docs-v4.strapi.io/dev-docs/api/rest/populate-select#population
  // populate[dynamic-zone-name][populate]=*

  // const fields = ``;
  const fields = `${rootFields}${sectionsFields}`;

  const publicationState = ``;
  // const publicationState = `&publicationState=live`;

  // const locale = ``;
  // const locale = `&locale=en`;
  const locale = pSlug?.[0] === "de" ? `&locale=de` : "";

  let url = `${apiUrl}/pages?filters[slug][$eq]=${slug}${locale}${fields}${publicationState}`;
  if (!slug) {
    url = `${apiUrl}/pages/1?${fields}${publicationState}${locale}`;
  }

  // --------------------------------------

  // const fields = `fields=*&populate[sections][fields]=*&populate[sections][populate][row]=*`;
  // let url = `${apiUrl}/pages?filters[slug][$eq]=${slug}&${fields}`;
  // if (!slug) {
  //   url = `${apiUrl}/pages/1?${fields}`;
  // }

  // --------------------------------------

  const res: any = await axios.get(url);
  const resData = res.data?.data;
  // console.log("MainPage() resData: ", resData);

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("slug: ", slug);
  // console.log("url: ", url);
  // console.log("resData: ", resData);
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  if ((slug && !resData?.length) || (!slug && !resData)) {
    notFound();
  }

  const attributes = resData?.length
    ? resData?.[0]?.attributes
    : resData?.attributes;

  const sections = attributes?.sections;

  console.log("MainPage() attributes:   ", attributes);
  // console.log("MainPage() sections:   ", sections);

  // const footerApiUrl = `${apiUrl}/global?populate[0]=footer&populate[1]=footer.nav`;
  // const footerApiRes: any = await axios.get(footerApiUrl);
  // const footer = footerApiRes.data?.data?.attributes?.footer;
  // const footer = mockFooter.data?.data?.attributes?.footer;

  // return <MainPageClient sections={sections} />;
  return <Main sections={sections} />;
}

const mockPageData: any = {
  data: {
    data: [
      {
        id: 3,
        attributes: {
          title: "About",
          slug: "about",
          createdAt: "2024-06-12T08:06:43.996Z",
          updatedAt: "2024-06-17T07:11:01.926Z",
          publishedAt: "2024-06-12T08:06:50.864Z",
          locale: "en",
          sections: [
            {
              id: 2,
              __component: "shared.rich-text",
              text: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "About - bla bla bla",
                    },
                  ],
                },
              ],
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
  },
};

const mockFooter: any = {
  data: {
    data: {
      id: 1,
      attributes: {
        createdAt: "2024-05-03T08:03:28.356Z",
        updatedAt: "2024-06-16T09:57:07.446Z",
        publishedAt: "2024-05-03T08:03:46.368Z",
        locale: "en",
        footer: {
          id: 1,
          myText: null,
          nav: [],
        },
      },
    },
    meta: {},
  },
};
