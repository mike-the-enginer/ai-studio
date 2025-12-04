import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled due to source map errors in dev

  // Enable standalone output for Docker
  output: 'standalone',

  // Disable image optimization for generated assets
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://example.com/api/:path*', // TODO: Replace with your actual target URL
      },
    ];
  },
};

export default nextConfig;
