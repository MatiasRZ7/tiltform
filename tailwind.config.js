/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '40-r': '40rem',
        '35-r': '35rem'
      },
      height:{
        '40-r': '40rem',
        '35-r': '35rem'
      },
      boxShadow:{
        '5xl': '20 20 50px rgba(0, 0, 0, 0.5)'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
    }
  },
  plugins: [],
}