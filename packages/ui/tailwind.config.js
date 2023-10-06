import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollBar from 'tailwind-scrollbar';

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
      aspectRatio: {
        square: '1 / 1',
      },
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
  plugins: [
    forms,
    typography,
    aspectRatio,
    scrollBar,
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        '.horizontal-writing-tb': { 'writing-mode': 'horizontal-tb' },
        '.vertical-writing-rl': { 'writing-mode': 'vertical-rl' },
        '.vertical-writing-lr': { 'writing-mode': 'vertical-lr' },
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
        '.orientation-mixed': { 'text-orientation': 'mixed' },
        '.orientation-upright': { 'text-orientation': 'upright' },
        '.orientation-sideways-right': { 'text-orientation': 'sideways-right' },
        '.orientation-sideways': { 'text-orientation': 'sideways' },
        '.orientation-glyph': { 'text-orientation': 'use-glyph-orientation' }
      });
    })
  ],
}

