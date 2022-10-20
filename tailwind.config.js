/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ticket-book': "url('../public/img/bgmovie.jpg')",
      },
    },
  },
  plugins: [],
};
