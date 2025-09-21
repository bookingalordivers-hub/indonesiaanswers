/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en'
      }
    ]
  }
}

export default nextConfig
