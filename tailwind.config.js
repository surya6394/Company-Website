/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt-clr': '#FFFFFF',
        'txt-clr2': '#57FF64',
        'nav-clr': '#46E247',
        'bg-clr': '#000000',
        'btn-clr': '#57FF64',
        'btn-txtclr': '#003512',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 0.7) 28.89%, rgba(23, 23, 23, 0.7) 100%)',
      },
    },
  },
  plugins: [],
}