"use client";

import { createTheme } from "@mui/material/styles";
// import { formatHex, oklch } from "culori";
import { Roboto } from "next/font/google";

// import colors from "tailwindcss/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "800"],
  subsets: ["latin"],
  display: "swap",
});

// const bgDarkColor = colors.neutral[900];
// const bgDarkColorHex = formatHex(oklch(bgDarkColor)) || "#000000";

// const primColor = colors.fuchsia[800];
// const primColorHex = formatHex(oklch(primColor)) || "#FF0000";
const primColorHex = "#a00876";

export const muiThemeLight = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
    // background: {
    //   default: "white",
    // },
    // text: {
    //   // primary: "#___",
    //   primary: primColorHex,
    // },
    primary: {
      // light: "#___",
      // main: "#___",
      // main: "#FF0000",
      main: primColorHex,
      // main: "var(--cst-color-500)",
      // dark: primColorHex,
      // contrastText: "#___",
    },
    // secondary: {
    //   light: "#___",
    //   main: "#___",
    //   dark: "#___",
    //   contrastText: "#___",
    // },
  },
});

export const muiThemeDark = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    // background: {
    //   default: bgDarkColorHex,
    // },
    primary: {
      // main: "#00FF00",
      main: primColorHex,
    },
  },
});
