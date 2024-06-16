// https://webkul.com/blog/tailwind-css-material-ui-with-next-js/
import { ReactNode } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import LayoutClient from "./LayoutClient";
import Nav from "./Nav";
import "./layout.scss";
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
          options={{
            enableCssLayer: true,
            // key: "css", // default: 'mui'
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* {props.children} */}
            <LayoutClient {...props} />
            <Nav />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
