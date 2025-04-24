/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'calibri':["Calibri", "arial"],
    },
    screens:{
      'sm':'640px',
      'laptop':'1024px'
    },
    boxShadow:{
      'card':'0px 4px 8px rgba(0, 0, 0, 0.1)',
      'photo':'rgba(0, 173, 181, 0.48) 6px 2px 16px 0px',
      'light-photo':'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
    },
    
  },
  plugins: [],
}
