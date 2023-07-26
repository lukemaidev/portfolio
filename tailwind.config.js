/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        unicaone: ['"Unica One"', ...defaultTheme.fontFamily.sans],
        martianmono: ['"Martian Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '100%': '100%',
      },
      animation:{
        blinky: 'blinky 1s ease-in-out infinite',
        fadeout: 'fadeout 1s ease-in-out forwards' 
      },
      keyframes: {
        blinky: {
          '0%, 100%': { color: 'red' },
          '20%': { color: 'yellow' },
          '40%': { color: 'green' },
          '60%': { color: 'pink' },
          '80%': { color: 'blue' },
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }
    },
  },
  plugins: [],
}
