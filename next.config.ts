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
};

export default nextConfig;
