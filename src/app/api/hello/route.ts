import { NextRequest, NextResponse } from "next/server";

const headers = {
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Origin": "localhost:6006",
  // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  // "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function handler(req: NextRequest) {
  if (req.method === "GET") {
    const searchParams = req.nextUrl.searchParams;
    const paramA = searchParams.get("a");
    const paramB = searchParams.get("b");
    console.log("GET /api/hello: paramA: ", paramA);
    console.log("GET /api/hello: paramB: ", paramB);

    const res = {
      message: "Response from GET /api/hello/",
      a: paramA,
      b: paramB,
    };

    return NextResponse.json(res, {
      status: 200,
      statusText: "OK",
      headers,
    });
  }

  if (req.method === "POST") {
    const contentType: string = req.headers.get("content-type") || "";
    console.log("POST /api/hello: contentType: ", contentType);

    const isJson = contentType === "application/json";
    if (isJson) {
      const json = await req.json();
      console.log("POST /api/hello: json: ", json);

      return new NextResponse(
        JSON.stringify({
          message: "Response from POST /api/hello/ json",
          ...json,
        }),
        {
          status: 200,
          statusText: "OK",
          headers,
        },
      );
    }

    const isFormData = contentType.indexOf("multipart/form-data") > -1;
    if (isFormData) {
      const formData = await req.formData();
      // const formDataTmp = formData?.get("myFileName.suffix");

      const jsonObj: any = {
        message: "Response from POST /api/hello/ formData",
      };

      for (const entry of formData.entries()) {
        console.log(`POST /api/hello: ${entry[0]}:`, entry[1]);
        jsonObj[entry[0]] = entry[1];
      }

      return new NextResponse(JSON.stringify(jsonObj), {
        status: 200,
        statusText: "OK",
        headers,
      });
    }
  }
}

export { handler as GET, handler as POST };
