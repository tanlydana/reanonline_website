/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BB2233",
        secondary: "#FA8603",
        tertiary: "#0A0F24",
      },
      fontFamily: {
        sans: ['"Kantumruy Pro"', "sans-serif"], // default font
      },
    },
  },
  plugins: [],
}
