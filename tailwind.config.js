const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        font1: ['Delius'],
        font2: ['Balsamiq Sans'],
        font3: ['Overlock SC'],
        font4: ['Sniglet'],
      },
      screens: {
        'sm': '425px',  // Small devices (425px)
        'md': '768px',  // Medium devices (768px)
        'lg': '1024px', // Large devices (1024px)
        'xl': '1440px', // Extra-large devices (1440px)
      },
      backgroundImage: {
        'bg0': "url('/assets/bg0.jpg')",
        'bg1': "url('/assets/bg1.jpg')",
        'bg2': "url('/assets/bg2.jpg')",
        'bg3': "url('/assets/bg3.jpg')",
        'bg4': "url('/assets/bg4.jpg')",
        'bgblock': "url('/block.jpg')",
      },
      backdropBlur: {
        'xs': '2px',  // Custom backdrop-blur with 2px blur effect
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
