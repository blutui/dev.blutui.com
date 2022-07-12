const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdoc']
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc',
})(nextConfig)
