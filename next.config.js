/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_IMAGE_URL}/**`)] },
  devIndicators: false,
  async headers() {
    return [
      {
        source: '/project/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
