// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback

export default async function generateStaticParams() {
  const paths: any = [
    { slug: ["home"] },
    { slug: ["projects", "project-1"] },
    { slug: ["projects", "project-2"] },
    { slug: ["about"] },
  ];

  console.log("getStaticPaths paths: ", paths);
  paths.forEach((item: any) => {
    console.log("getStaticPaths item: ", item);
  });

  return paths;
}
