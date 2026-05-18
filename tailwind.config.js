/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sonic: {
          canvas: '#070b1e',
          surface: '#0b1433',
          panel: '#101a3d',
          elevated: '#14275a',
          border: '#1e5bb8',
        },
        slate: {
          950: '#0a0e27',
          900: '#0f1117',
        },
      },
    },
  },
  plugins: [],
}
