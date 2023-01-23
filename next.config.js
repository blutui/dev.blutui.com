const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  images: {
    domains: ['cdn.blutui.com']
  },
  redirects: async () => {
    return require('./redirects.json')
  }
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc'
})(nextConfig)
