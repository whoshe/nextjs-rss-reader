/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repo = "nextjs-rss-reader";

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
