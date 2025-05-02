import { ReactNode } from "react";

import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions/authOptions";
import MuiTheme from "@/components/MuiTheme";
import Nav from "@/components/Nav";
import NextAuthProvider from "@/provider/NextAuthProvider";

import "./layout.css";

export default async function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_DOMAIN} />
      <body
        className={`RootLayout tw:text-fuchsia-800 tw:bg-white tw:dark:bg-neutral-900`}
      >
        <NextAuthProvider session={session}>
          <MuiTheme>
            {props.children}
            <Nav />
          </MuiTheme>
        </NextAuthProvider>
      </body>
    </html>
  );
}
