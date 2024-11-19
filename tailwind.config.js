/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Grayish-Blue": "hsl(237, 18%, 59%)",
        "Soft-Red": "hsl(345, 95%, 68%)",

        "Dark-Desaturated-Blue": "hsl(236, 21%, 26%)",
        "Very-Dark-Blue": "hsl(235, 16%, 14%)",
        "Very-Dark-Mostly-Black-Blue": "hsl(234, 17%, 12%)",
      },
      backgroundImage: {
        stars: "url('./src/assets/bg-stars.svg')",
        hills: "url('./src/assets/pattern-hills.svg')",
      },
    },
  },
  plugins: [],
};
