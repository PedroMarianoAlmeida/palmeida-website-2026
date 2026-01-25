/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A86B',    // jade green - main focus
        secondary: '#00F5FF',  // cyan - tech/AI accent
        accent: '#FFBF00',     // amber - highlights/metrics
        background: '#0B0B0B', // near-black
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}