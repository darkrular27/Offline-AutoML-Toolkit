import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: './',  // Important for relative linking (load CSS/JS correctly)
  trailingSlash: true, // Optional - helps with routing under file-path serving
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
