const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '8xl': '90rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.700'),
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            'h2, h3, h4': {
              'scroll-margin-top': '6.25rem'
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.indigo.500')}`
            },
            'a:hover': {
              borderBottomWidth: '2px'
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none'
            },
            pre: {
              color: theme('colors.zinc.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              display: 'flex',
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%'
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.zinc.700'),
              borderBottomColor: theme('colors.zinc.200')
            },
            'thead th': {
              color: theme('colors.zinc.700'),
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.zinc.400'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.200'),
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.indigo.400'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            code: {
              color: theme('colors.zinc.200'),
            },
            thead: {
              color: theme('colors.zinc.300'),
              borderBottomColor: theme('colors.zinc.700')
            },
            'thead th': {
              color: theme('colors.zinc.300'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.700')
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
