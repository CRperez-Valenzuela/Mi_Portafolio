/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#0A192F',
        'navy-light': '#112240',
        'slate': '#8892B0',
        'slate-light': '#A8B2D1',
      },
      animation: {
        'skill-progress': 'skill-progress 1s ease-out forwards',
      },
      keyframes: {
        'skill-progress': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
      },
    },
  },
  plugins: [],
};