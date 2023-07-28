/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bl-h': '0 0px 15px -3px rgba(1, 1, 1, 0)',
        'cont': '0 4px 7px 0px rgba(1, 1, 1, 1)',
        'sol-in': 'inset 0 4px 7px 3px rgba(1, 0, 0, 0.5)',
      },
      translate: {
        'btn-h': '-2px',
      },
    },
  },
  plugins: [],
}

