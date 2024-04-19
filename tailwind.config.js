/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'abhaya': ["Abhaya Libre", 'serif'],
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      colors:{
        redbutton: '#FF1212',
        bluebutton: '#429CDD',
        sagegreen: '#25A79F',
        rankgreen: '#1BAA5D',
        rankgreendark: "#33A266",
        lemonyellow: '#F8FB5B',
        bgwhite: '#D9D9D9',
        bgwhitelight: 'rgba(217, 217, 217, 0.56)',
        inputbg: '#66ABA7',
        greybg: '#6FBFBA',
        profilebg: '#F9F9F9',
        herobg: 'rgba(16, 26, 26, 0.8)',
        herobackbg : 'rgba(111, 191, 186, 0.79)'
      },
      backgroundImage:{
        // herobg: 'linear-gradient(180deg, rgba(8, 8, 8, 0.57) 0%, rgba(23, 23, 23, 0.57) 20%, rgba(61, 61, 61, 0.57) 60%, rgba(88, 88, 88, 0.57) 85%, rgba(102, 102, 102, 0.57) 100% )',
        formbg: 'linear-gradient(180deg, rgba(28, 28, 28, 1) 0%, rgba(115, 115, 115, 1) 100% )',
        inputbg: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(130, 133, 133, 1) 100% )',
      },
      boxShadow:{
        inputsh: '10px 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
      },
  },
  plugins: [],
}