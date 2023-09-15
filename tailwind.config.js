/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          text: "#333333",
        },
        dark: {
          background: "#333333",
          text: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
