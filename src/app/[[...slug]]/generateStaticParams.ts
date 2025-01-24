import axios from "axios";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  // const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/pages`;
  // const res: any = await axios.get(url);
  const res = mock;

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("res: ", res?.data?.data);

  const paths = res?.data?.data?.map(
    (item: any) => item?.attributes?.slug || "",
  );

  // console.log("paths: ", paths);
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  // const paths: any = [
  //   { slug: ["home"] },
  //   { slug: ["projects", "project-1"] },
  //   { slug: ["about"] },
  // ];

  return paths;
}

const mock = {
  data: {
    data: [
      {
        id: 1,
        attributes: {
          title: "Home",
          slug: null,
          createdAt: "2024-05-02T14:44:40.027Z",
          updatedAt: "2024-06-17T07:10:37.662Z",
          publishedAt: "2024-05-03T07:43:14.210Z",
          locale: "en",
        },
      },
      {
        id: 3,
        attributes: {
          title: "About",
          slug: "about",
          createdAt: "2024-06-12T08:06:43.996Z",
          updatedAt: "2024-06-17T07:11:01.926Z",
          publishedAt: "2024-06-12T08:06:50.864Z",
          locale: "en",
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 2,
      },
    },
  },
};
