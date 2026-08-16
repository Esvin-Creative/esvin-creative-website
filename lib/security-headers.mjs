




export function buildCsp(isDev) {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://www.googletagmanager.com https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self' https://docs.google.com https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
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
    // includeSubDomains/preload dropped deliberately: no subdomains to protect,
    // and preload does nothing unless actually submitted to hstspreload.org.
    // Plain max-age still gets the real benefit (no HTTPS->HTTP downgrade for
    // returning visitors) without fighting Vercel's own domain-redirect hop,
    // which can't carry the extra directives anyway.
    { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  ];
}

export function buildSecurityHeaders(isDev) {
  return [
    { key: 'Content-Security-Policy', value: buildCsp(isDev) },
    ...buildStaticHeaders(),
  ];
}
