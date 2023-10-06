const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  corePlugins: {
    preflight: true
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black": "#0C0C0C",
      "white": "#FFFFFF",

      "hover-grey": "#2C2B2B",
      "default-grey": "#666363",
      "copy-grey": "#9C9C9C",
      "light-grey": "#CFCFCF",
      "faint-grey": "#EDEDED",
      "faded-grey": "#F8F8F8",

      "energy-yellow": "#EDFF00",

      "electric-blue": "#0000FF",
      "mid-blue": "#0000DA",
      "deep-blue": "#0000DA",
      
      "background-black": "#1D1D1D",
      "dark-grey": "#404040",

      
      "dark-green": "#23251F",
      "medium-green": "#3B3F35",
      "lighter-green": "#474B3F",
      "faded-green": "#939A92",
    },
    extend: {
      spacing: {
        ...sizes
      },
      width: {
        ...sizes
      },
      minWidth: {
        ...sizes
      },
      height: {
        ...sizes
      },
    },
  },
  plugins: [],
}

