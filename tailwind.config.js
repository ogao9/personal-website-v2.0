module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'Segoe UI',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica',
        'Noto Sans',
        'sans-serif',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'serif']
    },
    extend: {
      colors: {
        'm-blue' : '#081e3e ',
        'm-maize' : '#FFCB1F',
        'darkmodebg' : '#121212',
        'darkmodetext': "#DEDEDE",
        'blacktext' : "#212121",
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
