import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module?.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-2.amazonaws.com", // Asegúrate de que sea correcto
        pathname: "/s3.inventorymanagement.images/**",
      },
    ],
  },
};

export default nextConfig;
