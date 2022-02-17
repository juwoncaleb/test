const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      headerText: [
        
        "Michroma"
        
      ],
      fancy: ["Michroma"],
    },
    extend: {
      colors: {
        navbar: "#1D1F20",
        landingPage: "#034335",
      },
      textColor: {
        navbar: "#D49F6A",
      },
      plugins: [
        require("@tailwindcss/aspect-ratio"),
        // ...
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
