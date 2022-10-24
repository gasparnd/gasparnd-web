/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        maxWidth: "900px",
      },
      margin: {
        "0Auto": "0 auto",
      },
      colors: {
        darkBackground: "#111",
        lightBackground: "#f4f4f4",
        border: "#4a4a4a",
        primary: "#00ed64",
      },
    },
  },
  plugins: [],
};
