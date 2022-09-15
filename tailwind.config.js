/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: "#22d3ee",
        secondary: "#64748b",
        dark: "#0f172a"
      },
      screens:{
        "2xl": "1320px"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}