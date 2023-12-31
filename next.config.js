/* eslint-disable @typescript-eslint/no-var-requires */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withMDX = require('@next/mdx')();

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
};

module.exports = withMDX(withVanillaExtract(nextConfig));
