/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors:{
        primaryBlack: '#24292e',
        secondaryBlack: '#2b3137',
        primaryWhite: '#fafbfc',
        secondaryWhite: '#ffffff' 
      },
      boxShadow:{
        shadow: ' inset 0 -1px 0 var(--borderColor-muted)',
      },
      backgroundImage:{
        grad: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
      }
    }
  },
  plugins: [],
}

