import { buildSecurityHeaders } from './lib/security-headers.mjs';

const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: buildSecurityHeaders(isDev),
      },
    ];
  },
};

export default nextConfig;
