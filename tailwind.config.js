module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    screens: {
      'mobile': '512px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'semi-lg': '1152px',

      'xl': '1280px',

      '1.5xl': '1408px',

      '2xl': '1536px',

      '3xl': '1792px',
    },
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
