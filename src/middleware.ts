import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import cmsRedirectsMw from "./middleware/cmsRedirectsMw";
import urlParamsMw from "./middleware/urlParamsMw";

const middleware = async (req: NextRequest) => {
  // await cmsRedirectsMw(req);
  return urlParamsMw(req);

  return NextResponse.next();
};

export default middleware;
