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
    fontFamily: {
      'heading': ['GalanoGrotesqueBold'],
    },
    extend: {      
      colors: {
        red: '#C42729',
        yellow: '#EAF1D0',
        oliveGreen: '#66B06E',
        lososPink: '#DD8C83',
        grey: '#E0DEDE',
        lightGrey: '#E9E9E9',
        greyOp50: '#DFB5B0',
        green: '#1BB36C',
        darkGrey: '#4B4B4B'
      }
    },
  },
  variants: {
    extend: {},
  },
}
