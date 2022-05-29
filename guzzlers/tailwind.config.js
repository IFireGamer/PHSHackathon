const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      neutral: colors.neutral,
      emerald: colors.emerald,

      grassgreen: '#1FDA80',
      brown: '#393424'
    }
  },
  plugins: [],
}