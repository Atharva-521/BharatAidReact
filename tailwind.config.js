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
        sagegreen: '#25A79F',
        rankgreen: '#1BAA5D',
        rankgreendark: "#33A266",
      },
      backgroundImage:{
        herobg: 'linear-gradient(180deg, rgba(8, 8, 8, 0.57) 0%, rgba(23, 23, 23, 0.57) 20%, rgba(61, 61, 61, 0.57) 60%, rgba(88, 88, 88, 0.57) 85%, rgba(102, 102, 102, 0.57) 100% )',
      }
      },
  },
  plugins: [],
}