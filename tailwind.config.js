module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cpurple: "#550686",
        clpurple: "#EEDBEC", 
        customgreen:  "#0c5905",
        sidepurple: "#170021",
        clgreen: "#4AD268",
        cardwhite: "#EFEEF1"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};