/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
          '5': 'repeat(5, minmax(-10px, 1fr))',
    }
  },
  plugins: [],
}}