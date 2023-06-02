/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Darumadrop: ['"Darumadrop One"', 'sans-serif'],
        Fredericka: ['"Fredericka the Great"', 'sand-serif'],
      },
    }
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch


//breakpoints
// 'sm' 640px
// 'md' 768px
// 'lg' 1024px
// 'xl'1280px
// '2xl' 1536px
