// https://mui.com/base-ui/guides/working-with-tailwind-css/#getting-started
import React, { ReactNode } from "react";

// import { StyledEngineProvider } from "@mui/material";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import themeDefault from "./theme";

export default function MuiProvider({
  children,
  theme = themeDefault,
}: {
  children: ReactNode;
  theme?: Theme;
}) {
  return (
    <AppRouterCacheProvider
      options={
        {
          // https://mui.com/material-ui/integrations/nextjs/#using-other-styling-solutions
          // enableCssLayer: true,
          // key: "css", // default: 'mui'
        }
      }
    >
      {/* <StyledEngineProvider injectFirst> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </AppRouterCacheProvider>
  );
}
