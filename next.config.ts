import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Required for `output: 'export'` / static hosts (Hostinger, etc.).
    // Without this, next/image uses /_next/image which needs a Node server.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: "export",
};

export default nextConfig;
