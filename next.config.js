/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // random string for jwt token
    secret: '#bbe@r!pE!DuLmTNwU8OwV27HW5HrCHl'
  },
  publicRuntimeConfig: {
    // API url
    apiUrl: 'http://localhost:3000/api'
  }
}

module.exports = nextConfig
