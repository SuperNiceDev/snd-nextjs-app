import axios from "axios";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_API_URL}/pages?locale=de&populate=*`;

  const res = await axios.get(url);
  const resData = res.data;
  // const resData = mockDataGenerateMetadata;
  // const resData = {};
  console.log("generateStaticParams() resData: ", resData);

  // console.clear();
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("res: ", res?.data?.data);

  const paths = resData?.data?.map((item: any) => {
    // console.log("item: ", item);
    const localizations = item?.attributes?.localizations;

    localizations?.data?.map((item: any) => {
      const locale = item.attributes.locale;
      // console.log("locale: ", locale);
    });
    return {
      slug: [item?.attributes?.slug || ""],
    };
  });

  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("generateStaticParams() paths: ", paths);
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");
  // console.log("--------------------------------------");

  // return paths;

  const mock: any = [{ slug: ["home"] }, { slug: ["about"] }];
  return mock;
}
