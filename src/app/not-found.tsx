import { headers } from "next/headers";

import MainPageClient from "./[[...slug]]/MainPageClient";

const NotFound = async (args: any) => {
  const headersList = headers();
  const domain = headersList.get("host");
  console.log("NotFound() domain: ", domain);

  const sections = null;
  const footer = null;

  // return <MainPageClient sections={sections} footer={footer} />;
  return <div className="NotFound">NotFound</div>;
};

export default NotFound;
