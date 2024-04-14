import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui()],
  theme: {
    fontFamily: {
      body: ["var(--font-body)"],
      heading: ["var(--font-heading)"],
      cursive: ["var(--font-cursive)"],
    },
    extend: {
      colors: {
        primary: "#232931",
        secondary: "#EEEEEE",
        blue: {
          100: "#d3e7f7",
          200: "#a6ceee",
          300: "#7ab6e6",
          400: "#4d9ddd",
          500: "#2185d5",
          600: "#1a6aaa",
          700: "#145080",
          800: "#0d3555",
          900: "#071b2b",
        },
        red: {
          100: "#ffdede",
          200: "#ffbdbd",
          300: "#ff9b9b",
          400: "#ff7a7a",
          500: "#ff5959",
          600: "#cc4747",
          700: "#993535",
          800: "#662424",
          900: "#331212",
        },
        green: {
          100: "#dfebe0",
          200: "#bfd6c2",
          300: "#a0c2a3",
          400: "#80ad85",
          500: "#609966",
          600: "#4d7a52",
          700: "#3a5c3d",
          800: "#263d29",
          900: "#131f14",
        },
      },
    },
  },
};
export default config;
