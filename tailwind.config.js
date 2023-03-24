/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'blue': '#127cca',
      'dark-grey': '#323234',
      'light-grey': '#e2e9ec',
      'light-blue': '#6bacdd',
      'medium-grey': '#6c6c6c',
      }
    },
  },
  plugins: [],
}