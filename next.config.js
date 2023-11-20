/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: "10mb",
  },
  images: {
    domains: ["spoonacular.com"],
  },
}

module.exports = nextConfig
