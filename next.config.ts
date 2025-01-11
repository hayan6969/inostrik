import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //disable es lint

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
