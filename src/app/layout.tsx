// https://webkul.com/blog/tailwind-css-material-ui-with-next-js/
import { ReactNode } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import Nav from "./Nav";
import "./globals.css";
import "./layout.scss";
import LayoutClient from "./layoutClient";
import theme from "./theme";

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
