const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      white: "#fff",
      black: "#000000",
      grey: "#6b6b6b",
      lightGrey: "#F5F5F5",
      primaryRed: "#B71F3B",
    },
  },
  plugins: [flowbite.plugin(), "prettier-plugin-tailwindcss"],

};
