"use client";

import { ReactNode, useMemo } from "react";

// import { useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";

import { muiThemeDark, muiThemeLight } from "@/app/muiTheme";
import MuiProvider from "@/provider/MuiProvider";

export default function MuiTheme(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const theme = useMemo(
  //   () => (prefersDarkMode ? muiThemeDark : muiThemeLight),
  //   [prefersDarkMode],
  // );

  const { theme: themeClass } = useTheme();
  const muiTheme = useMemo(
    () => (themeClass === "light" ? muiThemeLight : muiThemeDark),
    [themeClass],
  );

  return <MuiProvider theme={muiTheme}>{props.children}</MuiProvider>;
}
