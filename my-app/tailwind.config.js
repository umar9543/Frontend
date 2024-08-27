/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/New folder/6.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],  // General Gilroy font
      },
   
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ],
}