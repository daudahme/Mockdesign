/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      primary: "#3E3E3E33",
      main: "#1F1F1F80",
      secondary: "#1B3B5F",
      dark: "#252C32",
      lightGray: "#84919A",
    },},
  },
  plugins: [],
}