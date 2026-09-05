import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no server to run Next's image optimization endpoint,
    // so images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
