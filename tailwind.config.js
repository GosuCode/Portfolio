/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],    theme: {
    extend: {
      // backgroundImage: {

      //   'background': "url('/src/components/assets/Butwal.jpg')"

      // }
    },
  },
  plugins: [],
}
