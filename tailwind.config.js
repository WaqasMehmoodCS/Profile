/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(246,246,246)",
        secondary: "rgb(0,0,0)",
        other: "rgb(64, 162, 227)",
      },
      fontFamily: {
        quick: "Quicksand",
        manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
