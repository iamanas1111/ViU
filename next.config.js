/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-anas-bucket.s3.ap-southeast-2.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
