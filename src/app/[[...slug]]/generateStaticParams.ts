import axios from "axios";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages`;
  const res: any = await axios.get(url);

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
