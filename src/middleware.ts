import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import urlParamsMw from "./middleware/urlParamsMw";

const middleware = async (req: NextRequest) => {
  const headers = urlParamsMw(req);

  return NextResponse.next({
    request: {
      headers,
    },
  });
};

export default middleware;
