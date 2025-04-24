import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import cmsRedirectsMw from "./middleware/cmsRedirectsMw";

const middleware = async (req: NextRequest) => {
  // await cmsRedirectsMw(req);

  return NextResponse.next();
};

export default middleware;
