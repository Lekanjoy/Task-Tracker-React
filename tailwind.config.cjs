/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        ash: "#ebebeb",
        body: " rgb(237, 232, 236)",
      },
    },
    screens:{
      sm: '400px',
      md: '768px'
    }
  },
  plugins: [],
};
