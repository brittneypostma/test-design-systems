/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  safelist: [
    {
      pattern: /^(bg)/
    }
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        50: '#f5f7f7',
        100: '#eff0f0',
        200: '#eaeaea',
        300: '#d9d9d9',
        400: '#bfbfbf',
        500: '#848484',
        600: '#595959',
        800: '#1b1b1b'
      },
      primary: {
        800: '#052c48',
        600: '#025384',
        200: '#ddeef9',
        100: '#f1f6fb'
      },
      secondary: {
        900: '#006789',
        800: '#127ca5',
        500: '#23b0da',
        200: '#cdecf5'
      },
      integrated: {
        600: '#243ca8'
      },
      negative: {
        800: '#b1201b',
        600: '#df2b26',
        200: '#fbdddf',
        100: '#ffeeef'
      },
      positive: {
        800: '#006644',
        600: '#078854',
        200: '#e3f2f0'
      },
      warning: {
        600: '#f7b01c',
        200: '#f8f3db'
      }
    },
    backgroundImage: {
      'blue-gradient': 'linear-gradient(#f2f7fb 65%, transparent 65%)'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    // fontFamily: {
    //   'display': ['Inter', 'sans-serif'],
    //   'heading': ['Kanit', 'sans-serif'],
    //   'body': ['Karla', 'sans-serif'],
    // },

    // fontSize: {
    //   'heading-1': ['2rem', '2.5rem'],
    //   'heading-2': ['1.5rem', '2.25rem'],
    //   'heading-3': ['1.25rem', '1.875rem'],
    //   'heading-4': ['1rem', '1.5rem'],
    //   large: ['1rem', '1.5rem'],
    //   medium: ['0.875rem', '1.25rem'],
    //   small: ['0.75rem', '1.125rem'],
    //   tiny: ['0.625rem', '0.75rem']
    // },
    fontWeight: {
      normal: 400,
      semibold: 600
    },
    maxWidth: {
      margin: '1456px'
    },
    screens: {
      sm: '375px',
      md: '700px',
      lg: '1024px',
      xl: '1440px'
    },
    // spacing: {
    //   2: '0.125rem',
    //   4: '0.25rem',
    //   8: '0.5rem',
    //   12: '0.75rem',
    //   16: '1rem',
    //   20: '1.25rem',
    //   24: '1.5rem',
    //   32: '2rem',
    //   48: '3rem',
    //   64: '4rem',
    //   96: '6rem',
    //   128: '8rem',
    // },
    zIndex: {
      sticky: 100,
      'sticky-header': 200,
      popover: 300,
      drawer: 400,
      overlay: 500,
      modal: 1000
    },
    extend: {
      borderRadius: {
        small: '2px',
        medium: '4px',
        large: '8px',
        xlarge: '16px',
        round: '50%',
        full: '100%'
      },
      gridTemplateRows: {
        page: 'auto 1fr auto'
      },
      gridTemplateColumns: {
        page: '1fr min(1456px, 100%) 1fr'
      },
      boxShadow: {
        'popover-shadow': '0 2px 4px 0px rgba(0, 0, 0, 0.5)',
        'modal-shadow': '0 0 10px 2px #595959',
        DEFAULT: '0px 3px 5px rgba(89, 89, 89, 0.25), 0px 0px 1px rgba(89, 89, 89, 0.3)',
        storefront: '0px 3px 5px rgba(89, 89, 89, 0.25), 0px 0px 1px rgba(89, 89, 89, 0.3',
        top: '0 -2px 6px 0 rgba(0, 0, 0, 0.14);',
        'input-focus': '0px 0px 6px #0090c3',
        'input-shadow': 'inset 0 1px 3px 0 #bfbfbf'
      },
      width: {
        margin: '1456px'
      }
    }
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};

module.exports = config;
