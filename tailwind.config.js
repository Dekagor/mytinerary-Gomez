/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '450': '450px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

