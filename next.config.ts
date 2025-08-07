import { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
  rewrites: async () => {
    return [
      {
        source: '/api/:slug*',
        destination: '/api-reference/:slug*',
      },
    ]
  },
  redirects: async () => {
    return require('./redirects.json')
  },
}

export default nextConfig
