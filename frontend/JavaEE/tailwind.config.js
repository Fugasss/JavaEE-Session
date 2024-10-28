/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors:{
        'BLACK': "rgb(0,0,0)" ,  
        'WHITE': "rgb(255,255,255)" ,
        'modal_shadow' : "rgba(0,0,0,0.4)" ,
      }
    },
  },
  plugins: [],
}