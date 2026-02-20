import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self'; object-src 'none';", // Example, adjust as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;