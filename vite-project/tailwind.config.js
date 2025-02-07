/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
///** @type {import('tailwindcss').Config} */
//module.exports = {
//  content: [],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

