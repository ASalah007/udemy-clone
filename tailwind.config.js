/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5624d0",
        udemyBlack: "#1c1d1f",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
