/* eslint-disable @typescript-eslint/no-var-requires */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPlaiceholder from '@plaiceholder/next';
import generated from '@next/mdx';

const withMDX = generated();

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

export default withPlaiceholder(withMDX(withVanillaExtract(nextConfig)));
