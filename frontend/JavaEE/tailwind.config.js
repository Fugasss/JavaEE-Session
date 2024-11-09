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
        'active' : "rgb(100, 160, 255)",
        'active_light' : "rgb(120, 180, 255)",
        'active_dark' : "rgb(80, 140, 255)",
        'passive' : "rgb(191,219,254)" , 
      }
    },
  },
  plugins: [],
}