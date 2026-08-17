import { buildSecurityHeaders } from './lib/security-headers.mjs';

const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'esvincreative.in',
          },
        ],
        destination: 'https://www.esvincreative.in/:path*',
        permanent: true,
      },
    ];
  },
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
