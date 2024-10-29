import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pixels.com",
      }
    ],
  },
};

export default nextConfig;
