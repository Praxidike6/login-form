/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beach-green": "#96ceb4",
        "beach-pale-yellow": "#ffeead",
        "beach-red": "#ff6f69 ",
        "beach-egg-yellow": "#ffcc5c",
        "beach-sea-green": "#88d8b0",
        "gray-blue-1": "#3385c6",
        "creative-blue": "#5bccf6",
        "creative-yellow": "#fcde67",
        "creative-lilac": "#d1adcc",
      },
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
