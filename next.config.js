/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-us', 'es-ar'],
    defaultLocale: 'es-ar',
    localeDetection: true
  }
}

module.exports = nextConfig
