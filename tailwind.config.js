/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_green: '#2e9189',
        dark_green: '#3F4D4C',
        dark_gray: '#1c1c1c',
        light_gray: '#d1d1d1'
      },
      fontFamily:{
        noto: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

