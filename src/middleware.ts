import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// import cmsRedirectsMw from "./middleware/cmsRedirectsMw";
import urlParamsMw from "./middleware/urlParamsMw";

const middleware = async (req: NextRequest) => {
  // await cmsRedirectsMw(req);
  const headers = urlParamsMw(req);

  return NextResponse.next({
    request: {
      headers,
    },
  });
};

export default middleware;
