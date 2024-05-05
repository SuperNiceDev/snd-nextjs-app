// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { NextRequest } from "next/server";

type ResponseData = {
  message: string;
  queryA: string;
  queryB: string;
};

function handler(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryA = searchParams.get("a");
  const queryB = searchParams.get("b");

  return Response.json(
    {
      message: "Hello from /api/hello/route.ts",
      queryA,
      queryB,
    } as ResponseData,
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
}

export { handler as GET, handler as POST };
