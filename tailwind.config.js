/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './**/*.vue'
  ],
  theme: {
    colors: {
      white: '#fff',
      primary: {
        '900': '#841003',
        '800': '#AD1D07',
        '700': '#C52707',
        '600': '#DE3A11',
        '500': '#F35627',
        '400': '#F9703E',
        '300': '#FF9466',
        '200': '#FFB088',
        '100': '#FFD0B5',
        '050': '#FFE8D9'
      },
      neutral: {
        '900': '#1F2933',
        '800': '#323F4B',
        '700': '#3E4C59',
        '600': '#52606D',
        '500': '#616E7C',
        '400': '#7B8794',
        '300': '#9AA5B1',
        '200': '#CBD2D9',
        '100': '#E4E7EB',
        '050': '#F5F7FA',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xs': '375px'
      }
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'even']
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
