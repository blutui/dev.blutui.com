/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
}

module.exports = nextConfig
