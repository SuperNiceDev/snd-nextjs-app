import React, { ReactNode } from "react";

import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import muiThemeDefault from "./muiThemeDefault";

export default function MuiProvider({
  children,
  theme = muiThemeDefault,
}: {
  children: ReactNode;
  theme?: Theme;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
