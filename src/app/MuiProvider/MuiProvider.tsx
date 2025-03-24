// https://mui.com/base-ui/guides/working-with-tailwind-css/#getting-started
import React, { ReactNode } from "react";

import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

import themeDefault from "./theme";

export default function MuiProvider({
  children,
  theme = themeDefault,
}: {
  children: ReactNode;
  theme?: Theme;
}) {
  return (
    // <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </StyledEngineProvider>
  );
}
