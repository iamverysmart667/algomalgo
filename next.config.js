/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // random string for jwt token
    secret: '#bbe@r!pE!DuLmTNwU8OwV27HW5HrCHl'
  }
}

module.exports = nextConfig
