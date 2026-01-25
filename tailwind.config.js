/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#00a86b',
        secondary: '#00f5ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}