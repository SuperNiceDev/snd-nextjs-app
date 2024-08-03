// import { headers } from "next/headers";
import MainPageClient from "../components/client/MainPageClient";

const NotFound = async (args: any) => {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // console.log("NotFound() headersList: ", headersList);

  // const sections = null;
  // const footer = null;
  // return <MainPageClient sections={sections} footer={footer} />;
  return <div>Not found</div>;
};

export default NotFound;
