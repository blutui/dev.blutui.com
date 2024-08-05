const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.blutui.com',
      },
    ],
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/api/:slug*',
  //       destination: '/api-reference/:slug*'
  //     }
  //   ]
  // },
  redirects: async () => {
    return require('./redirects.json')
  },
}

module.exports = withMarkdoc({
  schemaPath: './src/markdoc',
})(nextConfig)
