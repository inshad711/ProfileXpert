import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['i-p.rmcdn.net'],
  // },
    images: {
    domains: [
      'cdn.prod.website-files.com',
      'example.com',
      'another-cdn.com',
      'i-p.rmcdn.net'
    ],
  },
};

export default nextConfig;
