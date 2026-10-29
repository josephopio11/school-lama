import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["dev.josephopio.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
}

export default nextConfig
