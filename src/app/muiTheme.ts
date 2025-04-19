"use client";

import { createTheme } from "@mui/material/styles";
import { formatHex, oklch } from "culori";
import { Roboto } from "next/font/google";
import colors from "tailwindcss/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const primColor = colors.lime[700];
// const primColor = colors.pink[700];
const primColorHex = formatHex(oklch(primColor)) || "#FF0000";
// console.log("primColorHex: ", primColorHex);

const muiTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    // mode: "dark",
    // mode: "light",
    // background: {
    //   default: "#___",
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

export default muiTheme;
