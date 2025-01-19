/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    screens: {
      xs: '480px',      // Smallest custom breakpoint
      sm: '640px',      // Replacing default sm
      '2lg': '1100px',  // Custom larger-than-lg breakpoint
      md: '768px',
      lg: '1024px',     // Replacing default lg
      xl: '1280px',
       
      },
    
  },
  plugins: [],
}

