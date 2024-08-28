/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pokeDarkGray: '#292929',
        pokeLightGray: '#524D4D',
        pokeDarkRed: '#F35252',
        pokeLightRed: '#F48282'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        essentiarum: ['Essentiarum', 'sans-serif']
      }
    }
  },
  plugins: []
}
