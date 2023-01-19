const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdoc'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  redirects: async () => {
    return require('./redirects.json')
  }
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc',
})(nextConfig)
