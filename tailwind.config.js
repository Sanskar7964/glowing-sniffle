/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*/templates/*/*.html', 
    './*/templates/*/*/*.html', 
    './*/templates/*/*/*/*.html', 
    './*/*.py',
    './static/js/*.js'
  ],
  theme: {
    extend: {
      colors:{
        black: '#000',
      },
    },
  },
  plugins: [],
}

