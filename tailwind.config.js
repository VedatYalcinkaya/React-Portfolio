/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['lemonMilk', 'sans-serif'],
        pixelify: ['pixelify' , 'sans'],
        josefin: ['josefin', 'sans']
      },
      colors: {
        primary: '#231E10',
        secondary: '#F6D565',
        third: '#551F1F',
        buttonPrimary: '#551F1F',
        buttonPrimaryHover: '#825856'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #fceabb, #f8b500)', 
        'gradient-primaryLeft': 'linear-gradient(to left, #fceabb, #f8b500)', 
        'gradient-secondary': 'linear-gradient(to right, #c21500, #ffc500)', // Üç aşamalı gradient
        'gradient-secondaryLeft': 'linear-gradient(to left, #c21500, #ffc500)', // Üç aşamalı gradient
        'gradient-third': 'radial-gradient(circle, rgba(252,252,203,1) 80%, rgba(255,181,142,1) 100%);'

      },
    },
  },
  plugins: [],
}