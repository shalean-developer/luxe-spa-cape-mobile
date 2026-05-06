/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Reduces dev-only UI surface that can interact badly with RSC + webpack on Windows
  devIndicators: false,

  /**
   * Windows: webpack’s persistent file cache often breaks with ENOENT / rename errors on
   * `.next/cache/webpack/*.pack.gz`, which then cascades into missing `app-paths-manifest.json`
   * and 500 "Internal Server Error". Disabling the cache in dev avoids that class of failure.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
