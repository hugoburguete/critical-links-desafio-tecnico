const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"'],
      },
      colors: {
        'light-blue': '#e6eaf8',
        verylightgrey: '#F8F9FA',
        grey: '#5B5B5B',
        lightgrey: '#D9D9D9',
        dimmed: '#9A9A9A',
        primary: '#7f9efd',
      },
      animation: {
        fade: 'fadeOut 0.2s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
