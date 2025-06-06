import { ReactNode } from "react";

import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions/authOptions";
import Nav from "@/components/Nav";
import { AppSidebar } from "@/components/app-sidebar";
import MuiTheme from "@/components/mui/MuiTheme";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
        // className={`RootLayout text-fuchsia-800 bg-white dark:bg-neutral-900`}
        className={`RootLayout text-fuchsia-800 bg-white dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MuiTheme>
            <NextAuthProvider session={session}>
              {/* <Nav /> */}
              {/* {props.children} */}
              <SidebarProvider
                style={
                  {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                  } as React.CSSProperties
                }
              >
                <AppSidebar variant="inset" />
                <SidebarInset>
                  <SiteHeader />
                  <div className="flex flex-1 flex-col">
                    <div className="gap-4 p-4 md:gap-6 md:p-4">
                      {props.children}
                    </div>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </NextAuthProvider>
          </MuiTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
