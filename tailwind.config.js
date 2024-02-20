/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      screens: {
        ds: "1440px",
      },
      colors: {
        primaryBlue: "hsl(246, 80%, 60%)",
        primaryWork: "hsl(15, 100%, 70%)",
        primaryPlay: "hsl(195, 74%, 62%)",
        primaryStudy: "hsl(348, 100%, 68%)",
        primaryExercise: "hsl(145, 58%, 55%)",
        primarySocial: "hsl(264, 64%, 52%)",
        primarySelfCare: "hsl(43, 84%, 65%)",
        neutralVeryDarkBlue: "hsl(226, 43%, 10%)",
        neutralDarkBlue: "hsl(235, 46%, 20%)",
        neutralDesaturatedBlue: "hsl(235, 45%, 61%)",
        neutralPaleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
