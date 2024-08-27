/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['lemonMilk', 'sans-serif'], // Google Font burada tanımlanır
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
    },
  },
  plugins: [],
}