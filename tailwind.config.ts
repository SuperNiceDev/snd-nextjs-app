// https://mui.com/base-ui/guides/working-with-tailwind-css/#getting-started

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lime-700": "#FF00FF",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        // serif: ["Merriweather", "serif"],
      },
      fontSize: {
        h1: "4rem",
        "3xl": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
