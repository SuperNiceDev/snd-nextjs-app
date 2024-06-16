import axios from "axios";
import type { Metadata } from "next";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

export default async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const slug = params?.slug?.join("/") || "home";
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_API}/pages?filters[slug][$eq]=${slug}&populate[seo]=*`;
  const res: any = await axios.get(url);
  const metadata = res.data?.data?.[0]?.attributes?.seo;

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
