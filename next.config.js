/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configuration for GitHub Pages
  output: 'export',
  // No basePath needed for username.github.io repository
  basePath: '',
  // Disable asset prefix for username.github.io repository
  assetPrefix: '',
  // Prevent conflicts with GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig 