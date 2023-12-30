/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ['@company/design-system'],
};

module.exports = withVanillaExtract(nextConfig);
