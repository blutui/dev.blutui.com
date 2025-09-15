export default {
  content: ['./src/pages/**/*.{ts,tsx}', './src/layouts/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle farthest-side, var(--tw-gradient-stops))',
        dots: 'radial-gradient(rgba(0, 0, 0, 0) 2px, var(--tw-gradient-stops) 1px)',
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
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
