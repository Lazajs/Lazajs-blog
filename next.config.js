/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en-us', 'es-ar'],
    defaultLocale: 'es-ar',
    localeDetection: true
  },
  webpack: (config, options) => {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          section_mf: process.env.DEVELOPMENT
            ? `section_mf@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
            : `section_mf@https://mf-lazajs.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true
        },
        shared: [
          'react',
          'react-dom'
        ]
      })
    )
    return config
  }
}

module.exports = nextConfig
