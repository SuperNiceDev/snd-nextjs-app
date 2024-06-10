import { NextRequest, NextResponse } from "next/server";

const headers = {
  "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  // "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

type ResponseData = {
  message: string;
  queryA: string;
  queryB: string;
};

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    const searchParams = req.nextUrl.searchParams;
    const queryA = searchParams.get("a");
    const queryB = searchParams.get("b");
    console.log("/api/hello: queryA: ", queryA);
    console.log("/api/hello: queryB: ", queryB);

    const res = {
      message: "Hello from /api/hello/route.ts",
      queryA,
      queryB,
    } as ResponseData;

    return Response.json(res, {
      status: 200,
      headers,
    });
  }

  if (req.method === "POST") {
    const formData = await req.formData();
    for (const entry of formData.entries()) {
      console.log(`/api/hello: ${entry[0]}:`, entry[1]);
    }
    const formDataFile = formData?.get("myFileName.suffix");

    return new NextResponse(formDataFile, {
      status: 200,
      statusText: "OK",
      headers,
    });
  }
}

export { handler as GET, handler as POST };
