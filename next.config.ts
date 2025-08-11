import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Required for Freestyle deployment
  images: {
    unoptimized: true, // Required for Freestyle deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
