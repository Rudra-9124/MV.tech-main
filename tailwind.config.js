/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052FF',
          dark: '#0052FF',
        },
      },
    },
  },
  plugins: [],
};
