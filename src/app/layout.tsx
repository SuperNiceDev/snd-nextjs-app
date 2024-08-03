import { ReactNode } from "react";

import { Roboto } from "next/font/google";

import NextAuthProvider from "../components/client/NextAuthProvider";
import MuiProvider from "../components/server/MuiProvider";
import Nav from "../components/server/Nav";
import "./layout.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--fontRoboto",
});

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <html lang="en">
      {/* <link rel="preconnect" href={process.env.NEXT_PUBLIC_WEBSITE_DOMAIN} /> */}
      <body className={`RootLayout ${roboto.variable}`}>
        <MuiProvider>
          <NextAuthProvider>
            {props.children}
            <Nav />
          </NextAuthProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
