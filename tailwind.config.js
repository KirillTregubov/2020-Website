/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
*/
module.exports = {
  purge: [
    './**/*.vue'
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    // gray: '#4a5568',
    // colors: {
    //   neutral: {
    //     '900': '#1F2933',
    //     '800': '#323F4B',
    //     '700': '#3E4C59',
    //     '600': '#52606D',
    //     '500': '#616E7C',
    //     '400': '#7B8794',
    //     '300': '#9AA5B1',
    //     '200': '#CBD2D9',
    //     '100': '#E4E7EB',
    //     '050': '#F5F7FA',
    //   }
    // },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('~assets/svg/topography.svg')",
      }),
      colors: {
        transparent: 'transparent',
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
        gray: {
          '900': '#222222',
          '800': '#3B3B3B',
          '700': '#515151',
          '600': '#626262',
          '500': '#7E7E7E',
          '400': '#9E9E9E',
          '300': '#B1B1B1',
          '200': '#CFCFCF',
          '100': '#E1E1E1',
          '050': '#F7F7F7'
        }
      },
      fontFamily: {
        'sans': 'Inter var'
      },
      fontSize: {
        '0': '0px'
      },
      padding: {
        'fix': 'calc(100vw - 100%)'
      },
      transitionProperty: {
        'width': 'width'
      }
    }
  },
  variants: {
    extend: {
      // ringWidth: ['group-focus'],
      margin: ['first'] //'last', 'even'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
