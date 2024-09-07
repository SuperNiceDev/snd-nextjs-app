import axios from "axios";
import { notFound } from "next/navigation";

// import MainPageClient from "../../components/client/MainPageClient";
import MainPageClient from "@/components/client/MainPageClient";

export default async function MainPage({ params }: any) {
  // const apiUrl = process.env.NEXT_PUBLIC_WEBSITE_API_URL;
  const slug = params?.slug?.join("/") || "";
  // const fields = `fields=*&populate[sections][fields]=*&populate[sections][populate][row]=*`;
  // let url = `${apiUrl}/pages?filters[slug][$eq]=${slug}&${fields}`;
  // if (!slug) {
  //   url = `${apiUrl}/pages/1?${fields}`;
  // }
  // const res: any = await axios.get(url);
  // const pageData = res.data?.data;
  const pageData = mockPageData.data?.data;

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

  // const footerApiUrl = `${apiUrl}/global?populate[0]=footer&populate[1]=footer.nav`;
  // const footerApiRes: any = await axios.get(footerApiUrl);
  // const footer = footerApiRes.data?.data?.attributes?.footer;
  const footer = mockFooter.data?.data?.attributes?.footer;

  return <MainPageClient sections={sections} footer={footer} />;
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
