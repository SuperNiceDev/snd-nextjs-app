import type { NextRequest } from "next/server";

const urlParamsMw = (req: NextRequest) => {
  const url = new URL(req.url);
  const headers = new Headers(req.headers);
  headers.set("x-url", req.url);
  headers.set("x-pathname", url.pathname);
  headers.set("x-search", url.search);
  headers.set("x-searchParams", url.searchParams.toString());

  return headers;
};

export default urlParamsMw;
