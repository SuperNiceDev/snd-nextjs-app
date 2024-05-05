import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

import LayoutClient from "./layoutClient";
import Nav from "./Nav";

import "./layout.scss";

const fontFamilyPrimary = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--fontFamilyPrimary",
});

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <html lang="en">
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_WEBSITE_DOMAIN} />
      <body className={`RootLayout ${fontFamilyPrimary.variable}`}>
        {/* {props.children} */}
        <LayoutClient {...props} />
        <Nav />
      </body>
    </html>
  );
}
