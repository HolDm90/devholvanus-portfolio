import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Cette configuration est nécessaire pour éviter les erreurs de modules Web3
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      "@react-native-async-storage/async-storage": false,
    };

    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    return config;
  },
};

export default nextConfig;
