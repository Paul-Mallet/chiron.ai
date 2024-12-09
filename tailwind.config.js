/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./demo.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'chiron': ['Geist', 'Arial', 'serif'],
      },
      listStyleImage: {
        'checkmark': 'url("/public/circle-check.svg")',
      },
    },
    colors: {
      'dark-gray-chiron': '#2D2D2D',
      'light-teal-chiron': '#E6F2F2',
      'deep-teal-chiron': '#007C91',
      'deep-navy-chiron': '#0A2A3A',
    },
    
  },
  plugins: [],
}

