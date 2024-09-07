import axios from "axios";
import type { Metadata } from "next";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

export default async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  // const slug = params?.slug?.join("/") || "home";
  // const url = `${process.env.NEXT_PUBLIC_WEBSITE_API_URL}/pages?filters[slug][$eq]=${slug}&populate[seo]=*`;
  // const res: any = await axios.get(url);
  // const metadata = res.data?.data?.[0]?.attributes?.seo;
  const metadata = mock;

  // console.log("::::::::::::::::::::::::");
  // console.log(" ");
  // console.log("generateMetadata metadata: ", metadata);
  // console.log(" ");
  // console.log("::::::::::::::::::::::::");

  // if (!metadata) {
  //     /404-error
  // }

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    // robots,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

const mock: any = {
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
          seo: {
            id: 4,
            metaTitle: "About metaTitle",
            metaDescription:
              "About metaDescription metaDescription metaDescription metaDescription",
            keywords: null,
            metaRobots: null,
            structuredData: null,
            metaViewport: null,
            canonicalURL: null,
          },
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
