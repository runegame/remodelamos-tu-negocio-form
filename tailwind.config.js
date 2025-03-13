/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'kiire-circle': '#FEF8ED',
        'kiire-green': '#F4FFD7',
        'kiire-green-light': '#FBFEE9',
        'kiire-lime': '#FAFFE4',
        'kiire-lime-100': '#F2FFC5',
        'kiire-lime-200': '#E4FF92',
        'kiire-orange': '#FEF8ED',
        'kiire-international-orange': '#FF5900',
        'kiire-purple': '#BCB9F5',
        'kiire-text': '#171B5B',
        'kiire-white': '#FAFAFA',
        'kiire-green-buttons': '#BCEA3D',
        'kiire-green-buttons-hover': '#91D500',
        'kiire-green-body': '#E5FCA6',
        'kiire-item-selected': '#FAFFED',
        'kiire-contacto': '#FDFFF8',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'bricolage-grotesque': ['Bricolage Grotesque', 'serif']
      }
    },
  },
  plugins: [],
}

