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
      keyframes:{
        resize:{
          '0%, 100%': { height: '1px',width: '1px' },
          '20%': {height : '1px',width:'1px'},
          '60%': {height: '1px',width:'600px'},
          '80%': {height: '600px',width:'600px'},
          '100%': { height: '600px', width: '600px' },
        },
        sideList : {
          '0%, 100%': { height: '1px',width: '1px', visibility: 'visible' },
          '20%': {height : '1px',width:'1px'},
          '60%': {height: '1px',width:'120px'},
          '80%': {height: '20px',width:'120px'},
          '100%': { height: '20px', width: '120px' },
        },
        sideListHide: {
          '0%, 100%': { height: '20px', width: '120px' },
          '20%': {height: '20px',width:'120px'},
          '60%': {height: '1px',width:'120px'},
          '80%': {height : '1px',width:'1px'},
          '100%': { height: '1px',width: '1px', visibility: 'hidden' },
        }
      },
      animation: {
        resize: 'resize 1.5s ease-in-out forwards',
        sideList: 'sideList 1.5s ease-in-out forwards',
        sideListHide: 'sideListHide 1.5s ease-in-out forwards',
      },
      backgroundColor: {
        'aside': 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}