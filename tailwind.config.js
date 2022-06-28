module.exports = {
  content: [
    "./layots/**/*{js,ts,jsx,tsx}",
    "./redux/**/*{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1600': '1600px'
      },
      fontFamily: {
        montserratThin: ['Montserrat-Thin'],
        montserratRegular: ['Montserrat-Regular'],
        montserratLight: ['Montserrat-Light'],
        montserratBold: ['Montserrat-Bold'],
      },
      fontSize: {
        h: '2rem',
        xxl: '4rem',
        screen: '10rem'
      },
      width: {
        ui : '300px',
        card: '600px'
      },
      height: {
        ui: '500px',
        card: '600px'
      },
      // transform: {
      //   translate:
      // },
      backgroundColor: {
        'aside': 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}