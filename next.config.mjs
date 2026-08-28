/** @type {import('next').NextConfig} */
const heldLocationPaths = [
  "/locations/bantry-bay",
  "/locations/bishopscourt",
  "/locations/clifton",
  "/locations/de-waterkant",
  "/locations/franschhoek",
  "/locations/fresnaye",
  "/locations/gardens",
  "/locations/higgovale",
  "/locations/hout-bay",
  "/locations/llandudno",
  "/locations/mouille-point",
  "/locations/newlands",
  "/locations/oranjezicht",
  "/locations/paarl",
  "/locations/rondebosch",
  "/locations/somerset-west",
  "/locations/stellenbosch",
  "/locations/tamboerskloof",
  "/locations/tokai",
];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: false,

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 70, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.luxurymspa.co.za" }],
        destination: "https://luxurymspa.co.za/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return heldLocationPaths.map((source) => ({
      source,
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex, follow",
        },
      ],
    }));
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
