/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#2f2d52",
        "darkblue":"#3e3c61",
        "shadyblue":"#5d5b8d",
        "shadywhite":"#ddddf7",
        "lightblue":"#8da4f1",
      },
    },
  },
  plugins: [],
}

