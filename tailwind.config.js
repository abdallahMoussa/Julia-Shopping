/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#2c3e50',
          200: '#34495e',
          300: '#7f8c8d',
          400: '#bdc3c7',
          500: '#ecf0f1',
          600: '#95a5a6',
          700: '#bdc3c7',
          800: '#f39c12',
          900: '#e74c3c',
        }
      }
    }
  },
    variants: {},
  plugins: [],
}
