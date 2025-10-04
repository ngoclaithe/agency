import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.funnelish.com",
      },
    ],
  },
};

export default nextConfig;
