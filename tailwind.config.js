/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: "#2EBAC1",
        grayDark: "#292D32",
      },
      backgroundColor: {
        grayLight: "#E7ECF3",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)`,
      },
      borderColor: {
        primary: "#00B4AA",
      },
    },
  },
  plugins: [],
};
