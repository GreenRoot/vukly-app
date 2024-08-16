/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lana: ['Lana', 'sans-serif'],
        futuraBold: ['Futura Bold', 'sans-serif'],
        futuraBook: ['Futura Book', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
