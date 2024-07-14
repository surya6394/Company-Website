/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt-clr': '#FFFFFF',
        'bg-clr': '#000000',
      },
    },
  },
  plugins: [],
}