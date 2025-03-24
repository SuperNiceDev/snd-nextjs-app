"use client";

import { createTheme } from "@mui/material/styles";

// import { Roboto } from "@next/font/google";

// import tailwindConfig from "../../../tailwind.config";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const theme = createTheme({
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: "Roboto, Arial, sans-serif",
    // fontFamily: "Arial, sans-serif",
  },
  palette: {
    // mode: "dark",
    mode: "light",
    // background: {
    //   default: "#___",
    // },
    text: {
      // primary: "#___",
    },
    // primary: {
    //   // light: "#___",
    //   // main: "#FF0000",
    //   main: tailwindConfig?.theme?.colors?.lime?.[700],
    //   // dark: "#___",
    //   // contrastText: "#___",
    // },
    // secondary: {
    //   light: "#___",
    //   main: "#___",
    //   dark: "#___",
    //   contrastText: "#___",
    // },
  },
});

export default theme;
