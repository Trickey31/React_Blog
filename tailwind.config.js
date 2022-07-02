/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      textColor: {
        primary: "#2EBAC1",
        grayDark: "#292D32",
        grayLight: "#E7ECF3",
        tertiary: "#3A1097",
      },
      backgroundColor: {
        grayLight: "#E7ECF3",
        accent: "#00D1ED",
        secondary: "#A4D96C",
        greenGradient: `rgb(29, 192, 113)`,
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)`,
        "secondary-gradient": `linear-gradient( 179.77deg, #6b6b6b 36.45%, rgba(163, 163, 163, 0.622265)
        63.98%, rgba(255, 255, 255, 0) 99.8% )`,
      },
      borderColor: {
        primary: "#00B4AA",
      },
    },
  },
  plugins: [],
};
