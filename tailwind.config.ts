/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        typing: {
          from: { width: '0ch' },
          to: { width: '28ch' },
        },
      },
      boxShadow: {
        button: '-3px 3px 0px 0px #a8a29e',
        'button-hover': '-5px 5px 0px 0px #a8a29e',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(text|bg)-(inherit|current|transparent|black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|lightBlue|warmGray|trueGray|coolGray|blueGray)-(400|500|600)/,
    },
  ],
};
