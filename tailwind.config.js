module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#C42729',
        yellow: '#EAF1D0',
        oliveGreen: '#66B06E',
        lososPink: '#DD8C83'
      }
    },
  },
  variants: {
    extend: {},
  },
}
