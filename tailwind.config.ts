import type { Config } from 'tailwindcss'

// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/layouts/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle farthest-side, var(--tw-gradient-stops))',
        dots: 'radial-gradient(rgba(0, 0, 0, 0) 2px, var(--tw-gradient-stops) 1px)',
      },
      colors: {
        han: {
          50: '#EBEBFF',
          100: '#D1D3FF',
          200: '#A8ABFF',
          300: '#7A7FFF',
          400: '#5257FF',
          500: '#242BFF',
          600: '#0008EB',
          700: '#0006AD',
          800: '#000475',
          900: '#000238',
        },
      },
      keyframes: {
        pulse: {
          '50%': { opacity: '0.3' },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      inset: {
        header: '6.8125rem',
      },
      maxHeight: {
        sidebar: 'calc(100vh - 6.8125rem)',
      },
      height: {
        sidebar: 'calc(100vh - 6.8125rem)',
      },
      typography: (theme: (arg0: string) => any[]) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.700'),
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            'h2, h3, h4': {
              'scroll-margin-top': '8.5rem',
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.han.500')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            code: {
              color: theme('colors.han.500'),
              padding: '1px 2px',
              backgroundColor: theme('colors.han.50'),
              borderRadius: '4px',
              fontWeight: theme('fontWeight.semiBold'),
              fontVariantLigatures: 'none',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            pre: {
              color: theme('colors.zinc.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              display: 'flex',
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.zinc.700'),
              borderBottomColor: theme('colors.zinc.200'),
            },
            'thead th': {
              color: theme('colors.zinc.700'),
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.zinc.400'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.200'),
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.han.400'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            code: {
              color: theme('colors.han.200'),
              backgroundColor: theme('colors.han.900'),
            },
            thead: {
              color: theme('colors.zinc.300'),
              borderBottomColor: theme('colors.zinc.700'),
            },
            'thead th': {
              color: theme('colors.zinc.300'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    {
      handler: ({ matchUtilities, theme }) => {
        matchUtilities(
          {
            highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
          },
          {
            values: flattenColorPalette(theme('backgroundColor')),
            type: 'color',
          }
        )
      },
    },
  ],
} satisfies Config
