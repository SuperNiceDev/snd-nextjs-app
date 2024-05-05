import type { Metadata } from "next";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

export default async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const { title, description, robots }: any = {};

  // console.log("::::::::::::::::::::::::");
  // console.log(" ");
  // console.log("generateMetadata dataParsed: ", dataParsed);
  // console.log(" ");
  // console.log("::::::::::::::::::::::::");

  return {
    title,
    description,
    robots,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}
