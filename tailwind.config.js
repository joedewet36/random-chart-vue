/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true
    })
  ]
}
