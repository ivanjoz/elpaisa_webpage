const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['raw-loader'/*,'svg-loader'*/],
    });
    // config.resolveLoader.alias['svg-loader'] = path.resolve('./loaders/svgloader')
    return config;
  },
}

module.exports = nextConfig
