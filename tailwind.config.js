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
            color: theme('colors.gray.700'),
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
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
              color: theme('colors.gray.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              display: 'flex',
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%'
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.200'),
            },
            'h2, h3, h4': {
              'scroll-margin-top': '6.25rem'
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.indigo.400'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
