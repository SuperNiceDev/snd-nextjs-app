"use client";

import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const theme = createTheme({
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  palette: {
    mode: "dark",
    // mode: "light",
    // background: {
    //   default: "#222222",
    // },
    // text: {
    //   primary: "#ffffff",
    // },
    primary: {
      light: "#757ce8",
      main: purple[500],
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default theme;
