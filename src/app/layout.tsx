import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
// https://webkul.com/blog/tailwind-css-material-ui-with-next-js/

import LayoutClient from "./layoutClient";
import Nav from "./Nav";
import theme from "./theme";

import "./globals.css";
import "./layout.scss";

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <html lang="en">
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_WEBSITE_DOMAIN} />
      <body className="RootLayout">
        <AppRouterCacheProvider
        // options={{ key: 'css' }} default: 'mui'
        >
          <ThemeProvider theme={theme}>
            {/* {props.children} */}
            <LayoutClient {...props} />
            <Nav />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
