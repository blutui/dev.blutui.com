const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdoc'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc',
})(nextConfig)
