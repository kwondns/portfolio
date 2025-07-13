/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_IMAGE_URL}/**`)] },
  devIndicators: false,
};
module.exports = nextConfig;
