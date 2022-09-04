/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5624d0",
        udemyBlack: "#1c1d1f",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
