import { NextRequest, NextResponse } from "next/server";
import { buildSecurityHeaders } from "./lib/security-headers.mjs";

const APEX_HOST = "esvincreative.in";
const CANONICAL_HOST = "www.esvincreative.in";

const isDev = process.env.NODE_ENV !== "production";

function applySecurityHeaders(response: NextResponse) {
  for (const { key, value } of buildSecurityHeaders(isDev)) {
    response.headers.set(key, value);
  }
  return response;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();

  if (hostname === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    const redirect = NextResponse.redirect(url, 308);
    return applySecurityHeaders(redirect);
  }

  const response = NextResponse.next();
  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
