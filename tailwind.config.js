module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'light-apricot': '#f5f4ef',
        'orange': {
          '100': '#fee8db',
          // '200': '#',
          // '300': '#',
          // '400': '#',
          '500': '#d88239',
          '600': '#d95a0d',
          // '700': '#',
          // '800': '#',
          // '900': '#',
        },
        'cyan': {
          '100': '#bbe9ed',
          '200': '#81c1c7',
          '800': '#0d818d'
        }
      },
    },
  },
  plugins: [],
}

