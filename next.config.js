/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  basePath: "/nextjs-rss-reader",
  reactStrictMode: true,
};

module.exports = nextConfig;
