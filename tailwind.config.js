/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sonic: {
          canvas: '#08090d',
          surface: '#0d0f16',
          panel: '#13161f',
          elevated: '#1a1e2c',
          border: '#1e5bb8',
        },
        slate: {
          950: '#0a0a0f',
          900: '#0f0f14',
        },
      },
    },
  },
  plugins: [],
}
