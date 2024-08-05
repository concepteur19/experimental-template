/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#F5B5A7",
        secondary: "#E37461",
        accent: "#F28A73",
        hover: "#ffece0",
        background: "#fcf7f4",
        primary: "#6a514c",
        newPrimary: '#3498DB',
        newSecondary: '#f8f9fa',
        newBg: "#e2e4ee",
        newTxt: "#2f3954"
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
