/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F7D102",
        purple: "#5736C5",
        grayBackground: "#f5f5f5",
        filterBg: "#7849F7",
        heartColor: "#32177a",
        openedGray: "#f8f8f8",
        boxShadow: " -1px -1px 34px -6px rgba(212,49,212,1)",
      },
      screens: {
        xs: { max: "319px" },
        sm: { min: "320px", max: "639px" },
        md: { min: "640px", max: "767px" },
        lg: { min: "768px", max: "1023px" },
        xl: { min: "1024px", max: "1279px" },
        "2xl": { min: "1280px" },
      },
    },
  },
  plugins: [],
};
