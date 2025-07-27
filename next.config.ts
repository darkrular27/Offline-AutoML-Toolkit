import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Enables static export
  assetPrefix: "./",     // Ensures relative asset paths (CSS/JS loads correctly in desktop apps)
  trailingSlash: true,   // Recommended to help static routing work smoothly with file-based serving
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove or comment out images.remotePatterns if you want fully offline (no external image fetching)
};

export default nextConfig;
