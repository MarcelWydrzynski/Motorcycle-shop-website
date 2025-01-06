const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      white: "#fff",
      black: "#000000",
      grey: "#6b6b6b",
      lightGrey: "#e5e5e5",
      primaryRed: "#B71F3B",
    },
    fontFamily: {
      alumni: ["Alumni Sans Pinstripe", "sans-serif"],
    },
  },
  plugins: [flowbite.plugin(), "prettier-plugin-tailwindcss"],
};
