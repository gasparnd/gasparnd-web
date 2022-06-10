module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d1d63a",
        customGray: "#888888",
        background: "#111111",
        hover: "#222222",
      },
    },
  },
  plugins: [],
};
