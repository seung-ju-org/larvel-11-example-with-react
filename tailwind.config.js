import defaultTheme from 'tailwindcss/defaultTheme';

const range = (length) => Array.from({ length }, (_, i) => i);
const pixels = range(1000 + 1).map((x) => [x, `calc(${x}rem / 16)`]);
const px0_10 = Object.fromEntries(pixels.slice(0, 10 + 1));
const px0_100 = Object.fromEntries(pixels.slice(0, 100 + 1));
const px0_200 = Object.fromEntries(pixels.slice(0, 200 + 1));
const px0_1000 = Object.fromEntries(pixels);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      spacing: px0_200,
      width: px0_1000,
      height: px0_1000,
      flexBasis: px0_1000,
      borderRadius: px0_100,
    },
  },
  corePlugins: {
    preflight: true,
  },
};
