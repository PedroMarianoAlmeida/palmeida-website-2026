/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4DFFA5',    // bright green
        secondary: '#C4F0FF',  // light blue
        accent: '#FFE975',     // yellow
        background: '#030712', // dark
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}