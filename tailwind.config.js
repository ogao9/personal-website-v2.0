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
         'blacksurface': "#242424",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: '#DEDEDE',
            h1: {color: '#DEDEDE'},
            h2: {color: '#DEDEDE'},
            h3: {color: '#DEDEDE'},
            h4: {color: '#DEDEDE'},
            strong: {color: '#DEDEDE'},
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
