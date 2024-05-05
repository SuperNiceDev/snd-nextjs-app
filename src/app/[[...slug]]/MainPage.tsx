import { notFound } from "next/navigation";

import MainPageClient from "./MainPageClient";

const MainPage = async ({ params }: any) => {
  const uri = `${params?.slug?.join("/") || "/"}`;

  console.log("MainPage() uri: ", uri);

  // if (!noPage) {
  //   notFound();
  // }

  const sections = null;
  const footer = null;

  return <MainPageClient sections={sections} footer={footer} />;
};

export default MainPage;
