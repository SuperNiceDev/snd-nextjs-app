import { ReactNode } from "react";

import { getServerSession } from "next-auth";

// import MuiProvider from "snd-react-lib/src/context/MuiProvider";

import muiTheme from "@/app/muiTheme";

import NextAuthProvider from "../components/client/NextAuthProvider";
import Nav from "../components/server/Nav";
import MuiProvider from "./MuiProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import "./layout.css";

// import "./layout.scss";

// import { Roboto } from "next/font/google";

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
        <MuiProvider theme={muiTheme}>
          <NextAuthProvider session={session}>
            {props.children}
            <Nav />
          </NextAuthProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
