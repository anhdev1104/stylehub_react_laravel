/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        green: '#005d63',
        green2: '#1e787d',
        yellow: '#ffd44d',
        yellowLight: '#edd08f',
        yellowLighter: '#f1deb4',
        orange: '#f86624',
        darkGrey: '#404b4b',
        grey: '#c4d1d0',
        dark: '#131717',
        light: '#566363',
        lighter: '#889595',
        lighter2: '#a6b6b6',
      },
    },
  },
  plugins: [],
};
