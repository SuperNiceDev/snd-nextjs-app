import { ReactNode } from "react";

import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions/authOptions";
import Nav from "@/components/Nav";
import MuiTheme from "@/components/mui/MuiTheme";
import NextAuthProvider from "@/provider/NextAuthProvider";
import ThemeProvider from "@/provider/ThemeProvider";

import "./layout.css";

export default async function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_DOMAIN} />
      <body
        className={`RootLayout tw:text-fuchsia-800 tw:bg-white tw:dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MuiTheme>
            <NextAuthProvider session={session}>
              {props.children}
              <Nav />
            </NextAuthProvider>
          </MuiTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
