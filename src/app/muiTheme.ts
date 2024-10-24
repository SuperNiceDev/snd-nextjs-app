"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fullTailwindConfig = resolveConfig(tailwindConfig);

const muiTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    // mode: "light",
    // background: {
    //   default: "#___",
    // },
    text: {
      // primary: "#___",
    },
    primary: {
      // light: "#___",
      main: fullTailwindConfig.theme.colors.lime[700],
      // dark: "#___",
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
