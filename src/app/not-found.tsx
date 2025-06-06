// import { headers } from "next/headers";

const NotFound = async () => {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // console.log("NotFound() headersList: ", headersList);

  return (
    <div className="NotFound twCenterContent">
      <code>{`<NotFound>`}</code>
      <div className="pl-4">Not found</div>
      <code>{`<NotFound>`}</code>
    </div>
  );
};

export default NotFound;
