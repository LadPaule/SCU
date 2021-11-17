module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        scu_blue: {
          light: "#0D0A44",
          DEFAULT: "#3B8DCC",
        },
        scu_yellow:{
          DEFAULT: "#F6EB14"
        }
      },
    },
  },
  variants: {
    extend: { },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
