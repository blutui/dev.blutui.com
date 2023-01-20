const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdoc'],
  redirects: async () => {
    return require('./redirects.json')
  }
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc',
})(nextConfig)
