export function buildCsp(isDev) {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://www.googletagmanager.com https://va.vercel-scripts.com https://w.behold.so https://*.behold.so`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://*.google.com https://*.google.co.in https://*.g.doubleclick.net https://*.behold.so https://cdn.behold.so https://behold.pictures https://*.behold.pictures https://*.cdninstagram.com https://*.fbcdn.net",
    "media-src 'self' blob: https://*.behold.so https://cdn.behold.so https://behold.pictures https://*.behold.pictures https://*.cdninstagram.com https://*.fbcdn.net",
    "font-src 'self' data:",
    "connect-src 'self' https://docs.google.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://*.google.com https://*.google.co.in https://va.vercel-scripts.com https://vitals.vercel-insights.com https://feeds.behold.so https://*.behold.so",
    "form-action 'self' https://docs.google.com",
    "frame-src 'none'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "upgrade-insecure-requests",
  ].join('; ');
}

export function buildStaticHeaders() {
  return [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  ];
}

export function buildSecurityHeaders(isDev) {
  return [
    { key: 'Content-Security-Policy', value: buildCsp(isDev) },
    ...buildStaticHeaders(),
  ];
}
