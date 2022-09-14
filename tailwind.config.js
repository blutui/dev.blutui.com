const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
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
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none'
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            'h1, h2, h3, h4, h5, h6': {
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
