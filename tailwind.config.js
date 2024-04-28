/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flowbite from "flowbite/plugin";
import lineClamp from '@tailwindcss/line-clamp';

// import flowbite from
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary_blue: "#0067F6",
      primary_blue_light: "#3588ff",
      primary_blue_dark: "#003075",
      primary_cyan: "#00A2B6",
      primary_cyan_light: "rgb(0,77,86)",
      primary_cyan_dark: "rgb(0,77,86)",
      background: "#121120",
      card_color: "#191836",
      navy:{
        900: '#121120',
      },
      fgray: {
        500: "rgba(130,130,138,0.2)",
        700: "#201F2D"
      },
      fpurple:{
        400: '#9200D0',
        700: '#4C0083'
      },
      fblue:{
        400: '#005C97',
        800:'#363795',
      }
    },
    extend: {
      // color: {
      //     primary: '#121120',
      //     faizan: '#ff0087'
      // }
    },
  },
  plugins: [
    flowbite,
    lineClamp
  ],
};
