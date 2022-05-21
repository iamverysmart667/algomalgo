/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // random string for jwt token
    secret: '#bbe@r!pE!DuLmTNwU8OwV27HW5HrCHl'
  },
  publicRuntimeConfig: {
    // API url
    apiUrl: 'https://walrus-app-4pbjg.ondigitalocean.app/api'
  }
}

module.exports = nextConfig
