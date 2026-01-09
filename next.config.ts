import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
    "*.replit.app",
    "9ee03300-45cb-454d-ae98-adafb11a9ceb-00-3t6llizen78up.janeway.replit.dev",
    "localhost:5000",
    "127.0.0.1"
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

export default nextConfig;
