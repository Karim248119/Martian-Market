/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
