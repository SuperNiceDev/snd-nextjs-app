"use client";

import { ReactNode, useMemo } from "react";

import { useMediaQuery } from "@mui/material";

import { muiThemeDark, muiThemeLight } from "@/app/muiTheme";
import MuiProvider from "@/provider/MuiProvider";

export default function MuiTheme(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => (prefersDarkMode ? muiThemeDark : muiThemeLight),
    [prefersDarkMode],
  );

  // https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

  return <MuiProvider theme={theme}>{props.children}</MuiProvider>;
}
