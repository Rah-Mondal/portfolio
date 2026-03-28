import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Only use basePath in production for deployment
  ...(process.env.NODE_ENV === "production" && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
