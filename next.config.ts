import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true as any,
  },
};

export default nextConfig;

