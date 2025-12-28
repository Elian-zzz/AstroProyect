/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores tierra para Vivi Astrología
        'vivi-dark': '#424658',
        'vivi-blue': '#6C739C',
        'vivi-green': '#678973',
        'vivi-beige': '#BABBB1',
        'vivi-pink': '#F0DAD5',
        'vivi-terracota-light': '#DEA785',
        'vivi-terracota': '#C79576',
        'vivi-rose': '#D9A69F',
        'vivi-coral': '#C56B62',
      },
    },
  },
  plugins: [],
}
