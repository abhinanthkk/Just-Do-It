/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'small':'400px',
      },
      keyframes:{
        'Fade-out':{
          "0%":{
            opacity : 1
          },
          "50%":{
            opacity : 0.5
          },
          "100%":{
            opacity : 0
          },
        },
        'Fade-in':{
          "0%":{
            opacity : 0
          },
          "50%":{
            opacity : 0.5
          },
          "100%":{
            opacity : 1
          },
        }
      },
      animation:{
        'fade-out': 'Fade-out 1s ease-in forwards',
        'fade-in': 'Fade-in 1s ease-in forwards'
      },
    },
  },
  plugins: [],
}

