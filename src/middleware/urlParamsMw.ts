import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const urlParamsMw = async (req: NextRequest) => {
  const url = new URL(req.url);
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);
  requestHeaders.set("x-pathname", url.pathname);
  requestHeaders.set("x-search", url.search);
  requestHeaders.set("x-searchParams", url.searchParams.toString());

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

export default urlParamsMw;
