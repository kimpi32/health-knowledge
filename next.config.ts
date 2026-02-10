import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/health',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
