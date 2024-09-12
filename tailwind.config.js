/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lg': '768px', // Change 'lg' to 768px
        'xl': '1024px', // Optional: if you want to keep the old 'lg' size as a new 'xl'
      }
    },
  },
  plugins: [],
}

