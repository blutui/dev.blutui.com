import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX({})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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

export default withMDX(config)
