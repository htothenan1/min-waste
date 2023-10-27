/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["spoonacular.com"],
  },
}

module.exports = nextConfig
