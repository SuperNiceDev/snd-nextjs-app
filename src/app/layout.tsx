import { ReactNode } from "react";

import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions/authOptions";
import muiTheme from "@/app/muiTheme";
import Nav from "@/components/Nav";
import MuiProvider from "@/provider/MuiProvider";
import NextAuthProvider from "@/provider/NextAuthProvider";

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
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_DOMAIN} />
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
