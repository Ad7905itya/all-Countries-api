/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 5px 1px rgba(0, 0, 0, 0.1)',
        'hover3xl': ' 0 0 5px 3px rgba(0,0,0,0.2)'
      },
      screens: {
        'phones': "450px"
      },
      gridTemplateColumns: {
        "3xl": " repeat(auto-fill, minmax(250px, 1fr))"
      }
    },
  },
  plugins: [],
  darkMode: [
    'selector','[dark-mode="dark"]'
  ]
}

