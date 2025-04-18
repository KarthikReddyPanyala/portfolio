/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Add these for GitHub Pages
  output: 'export',
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 