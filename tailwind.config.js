/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "components-color": "var(--components-color)",
    
      },
    },
  },
 
  plugins: [],
}

