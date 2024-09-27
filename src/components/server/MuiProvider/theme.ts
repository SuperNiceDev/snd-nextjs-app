"use client";

import { createTheme } from "@mui/material/styles";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../../../tailwind.config";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const fullTailwindConfig = resolveConfig(tailwindConfig);

const theme = createTheme({
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
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
      // main: "#FF0000",
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

export default theme;
