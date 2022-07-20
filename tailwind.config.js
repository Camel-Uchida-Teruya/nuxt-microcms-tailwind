module.exports = {
  mode: 'jit',
  purge: [
    './layouts/**/*.vue',
    './components/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.js',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#b7c9e9',
          base: '#3151a2',
          dark: '#023894'
        }
      },
      maxWidth: {
        header: '980px',
      },
      padding: {
        5625: '56.25%'
      },
      borderWidth: {
        3: '3px'
      },
      lineHeight: {
        'super-tight': '1.15'
      },
      gridTemplateColumns: {
        'evenly-full': 'repeat(auto-fit, minmax(0, auto))'
      }
    },
  },
  plugins: [],
}