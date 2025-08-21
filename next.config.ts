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
  async redirects() {
    return [{ source: '/discord', destination: 'https://discord.gg/4H8dZW6Fva', permanent: false }]
  },
}

export default nextConfig
