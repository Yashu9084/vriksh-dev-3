/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        peg: ['"Square Peg"'],
        sen: ["Sen"],
        neue: ["Bebas Neue"],
        jakarta: ["Plus Jakarta Sans"],
        lato: ["Lato"],
        manrope: ["manrope"],
      },
    },
  },
  plugins: [],
};
