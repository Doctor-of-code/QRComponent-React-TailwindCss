/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "White": "hsl(0, 0%, 100%)",
      "Slate_300": "hsl(212, 45%, 89%)",
      "Slate_500": "hsl(216, 15%, 48%)",
      "Slate_900": "hsl(218, 44%, 22%)"

      },
      fontFamily:{
        "Outfit": ["Outfit", "serif"]
      }
    },
  },
  plugins: [],
}