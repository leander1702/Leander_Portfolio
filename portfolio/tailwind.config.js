/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
         wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-3deg)' },
          '75%': { transform: 'translateY(-10px) rotate(2deg)' },
        }
        
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 4s ease-in-out infinite',
      },
    },
   
  },
  plugins: [],
}
