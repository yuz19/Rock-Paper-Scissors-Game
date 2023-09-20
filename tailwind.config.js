/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ColorHand:'#5471F2',
        ColorScissor:'#EFA41F',
        ColorRock:'#DC4159',
        ColorFocus:'#00000026',
        ColorRules:'#15193C'
      },
      fontFamily:{
        Oswald:'Oswald'
      },
      backgroundImage: {
        'triangle': "url('/bg-triangle.svg')",
 
      }
    }
  },
  plugins: [],
}