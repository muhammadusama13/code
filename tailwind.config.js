/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004D99'
        },
        bgColor: {
          DEFAULT: '#F5F5F5',
        },
      },
      boxShadow: {
        CardShadow: '3px 3px 18px #30BFBF14',
      },
      screens: {
        'stander':'1300px',
      }
    },
  },
  plugins: [],
}

