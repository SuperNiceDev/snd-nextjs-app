import axios from "axios";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/pages?locale=de&populate=*`;
  const res = await axios.get(url);

  // console.clear();
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("res: ", res?.data?.data);

  const paths = res?.data?.data?.map((item: any) => {
    // console.log("item: ", item);
    const localizations = item?.attributes?.localizations;
    localizations?.data?.map((item: any) => {
      // console.log("locale: ", item.attributes.locale);
    });
    return {
      slug: [item?.attributes?.slug || ""],
    };
  });

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("paths: ", paths);
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  return paths;

  // const paths2: any = [
  //   { slug: ["home"] },
  //   { slug: ["projects", "project-1"] },
  //   { slug: ["about"] },
  // ];

  // return paths2;
}
