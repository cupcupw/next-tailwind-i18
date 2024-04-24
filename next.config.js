/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    //https://nextjs.org/docs/pages/building-your-application/routing/internationalization#disabling-automatic-locale-detection
    localeDetection: true,
    ...i18n,
  },
}

module.exports = nextConfig
