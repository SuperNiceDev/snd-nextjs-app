// https://mui.com/base-ui/guides/working-with-tailwind-css/#getting-started
import { ReactNode } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";

import theme from "./theme";

export default function MuiProvider({ children }: { children: ReactNode }) {
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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  );
}
