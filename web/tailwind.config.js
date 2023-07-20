/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          50: '#fdfefd',
          100: '#fcfdfd',
          200: '#fafbfa',
          300: '#eef1ef',
          400: '#d6d9d7',
          500: '#bec1bf',
          600: '#b3b5b3',
          700: '#8f918f',
          800: '#6b6c6c',
          900: '#535454',
        },
        grey: {
          50: '#e8e8e8',
          100: '#dddddd',
          200: '#b8b8b8',
          300: '#191919',
          400: '#171717',
          500: '#141414',
          600: '#131313',
          700: '#0f0f0f',
          800: '#0b0b0b',
          900: '#090909',
        },
        red: {
          50: '#fde9f0',
          100: '#fcdfe8',
          200: '#f8bcd0',
          300: '#ea2768',
          400: '#d3235e',
          500: '#bb1f53',
          600: '#b01d4e',
          700: '#8c173e',
          800: '#69122f',
          900: '#520e24',
        },
      },
      fontFamily: {
        title: ['var(--font-roboto)'],
        body: ['var(--font-openSans)'],
      },
    },
  },
  plugins: [],
}
