const isProd = process.env.NODE_ENV === "production"
import type { NextConfig } from "next";

/* config options here */
const nextConfig: NextConfig = {
  basePath: isProd ? '/MyPortfolio' : '',
  assetPrefix: isProd ? '/MyPortfolio/' : '',
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true
};

export default nextConfig;
