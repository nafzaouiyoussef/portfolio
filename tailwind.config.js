/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bodyfont: ["poppins", "sans-serif"],
        titleFont:["Montserrat","sans-serif"],
      },
      colors:{
        bodyColor: "#191919",
        textColor:"rgba(255,255,255,0.85)",
        designColor:"#edff20",
        titleRoundBg:"liner-gradient(135deg,rgba(120,204,109,.15) 0%,rgba(120,204,109,1%) 100%)",
      },
      animation:{
        "spin-slow":"spin 15s linear infinite",
        "reverse-spin":"reverse-spin 15s linear infinite",
      },
      keyframes:{
        "reverse-spin": {
          from:{
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow:{
        greenShadow: "0px 0px 188px -14px rgba(237,255,32.1)",
        testShadow: "11px 0px 13px -15px rgba(0,0,0,1)",
      }
    },
  },
  plugins: [], 
}
