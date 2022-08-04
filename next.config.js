/** @type {import('next').NextConfig} */
const subDirectory = process.env.SUB_DIRECTORY

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: subDirectory,
  basePath: subDirectory,
  trailingSlash: subDirectory !== undefined
}

module.exports = nextConfig
