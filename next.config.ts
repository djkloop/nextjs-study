import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img1.doubanio.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img2.doubanio.com',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
