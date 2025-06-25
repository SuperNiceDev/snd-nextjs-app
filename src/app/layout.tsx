import { CSSProperties, ReactNode } from "react";

import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions/authOptions";
import Nav from "@/components/Nav";
import MuiTheme from "@/components/mui/MuiTheme";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import NextAuthProvider from "@/provider/NextAuthProvider";
import ThemeProvider from "@/provider/ThemeProvider";

import "./layout.css";

const style = {
  "--sidebar-width": "calc(var(--spacing) * 72)",
  "--header-height": "calc(var(--spacing) * 12)",
} as CSSProperties;

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    // TODO: remove suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_DOMAIN} />
      <body
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
              <SidebarProvider style={style}>
                <Nav />
                <SidebarInset>
                  <SiteHeader />
                  <div className="flex flex-1 flex-col">
                    <div className="gap-4 p-4 md:gap-6 md:p-4">{children}</div>
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
