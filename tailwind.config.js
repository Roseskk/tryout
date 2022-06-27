module.exports = {
  content: [
    "./layots/**/*{js,ts,jsx,tsx}",
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
        xxl: '4rem',
        screen: '10rem'
      },
      backgroundColor: {
        'aside': 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}