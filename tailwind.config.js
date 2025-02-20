/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor : {
        'secondary': '#7009e3' 
      }
    },
    fontFamily : {
      'hero-font': 'Merienda'
    }
  },
  plugins: [],
}

