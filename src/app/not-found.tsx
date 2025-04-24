// import { headers } from "next/headers";

const NotFound = async (args: any) => {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // console.log("NotFound() headersList: ", headersList);

  return <div className="NotFound tw:pt-20">Not found</div>;
};

export default NotFound;
