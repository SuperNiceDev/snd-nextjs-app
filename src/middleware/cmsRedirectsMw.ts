import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const cmsRedirectsMw = async (req: NextRequest) => {
  // const httpbinRes = await fetch("https://httpbin.org/get");
  // const httpbinData = await httpbinRes.json();
  // console.error("httpbinData: ", httpbinData);

  // --------------------------------------------

  const res = await fetch(
    process.env.NEXT_PUBLIC_CMS_API_GRAPHQL_URL as string,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query Redirects {
          redirects {
            enabled
            match_url
            action_data
            action_code
          }
        }
      `,
      }),
    },
  );
  const { data } = await res.json();

  let cmsRedirects: any[] = [];
  cmsRedirects = data?.redirects.map((item: any) => ({
    source: item.match_url,
    destination: item.action_data,
    code: item.action_code,
  }));

  console.error("cmsRedirectsMw() data: ", data);
  console.error("cmsRedirectsMw() cmsRedirects: ", cmsRedirects);

  const redirect = cmsRedirects?.find(
    (item: any) => item.source === req.nextUrl.pathname,
  );

  if (redirect) {
    if (redirect.destination.startsWith("http")) {
      return NextResponse.redirect(
        new URL(redirect.destination),
        redirect.code,
      );
    }
    return NextResponse.redirect(new URL(redirect.destination, req.url));
  }
};

export default cmsRedirectsMw;
