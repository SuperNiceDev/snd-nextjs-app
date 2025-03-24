import { ReactNode } from "react";

// import { StyledEngineProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { getServerSession } from "next-auth";

// import { Roboto } from "next/font/google";
// import MuiProvider from "snd-react-lib/src/context/MuiProvider";

import muiTheme from "@/app/muiTheme";

import NextAuthProvider from "../components/client/NextAuthProvider";
import Nav from "../components/server/Nav";
import MuiProvider from "./MuiProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
// import "./layout.scss";

import "./layout.css";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--fontRoboto",
// });

export default async function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_DOMAIN} /> */}
      {/* <body className={`RootLayout ${roboto.variable}`}> */}
      <body className={`RootLayout`}>
        <AppRouterCacheProvider
          options={
            {
              // https://mui.com/material-ui/integrations/nextjs/#using-other-styling-solutions
              // enableCssLayer: true,
              // key: "css", // default: 'mui'
            }
          }
        >
          {/* <StyledEngineProvider injectFirst> */}
          <MuiProvider theme={muiTheme}>
            <NextAuthProvider session={session}>
              {props.children}
              <Nav />
            </NextAuthProvider>
          </MuiProvider>
          {/* </StyledEngineProvider> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
