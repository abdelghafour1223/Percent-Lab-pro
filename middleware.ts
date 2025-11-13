import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Common search engine bot user agents
const SEARCH_ENGINE_BOTS = [
  'googlebot',
  'bingbot',
  'slurp', // Yahoo
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'pinterestbot',
  'applebot',
];

function isSearchEngineBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return SEARCH_ENGINE_BOTS.some((bot) => ua.includes(bot));
}

export function middleware(request: NextRequest) {
  // Get user agent
  const userAgent = request.headers.get('user-agent') || '';

  // Set appropriate X-Robots-Tag based on user agent
  const response = NextResponse.next();

  if (isSearchEngineBot(userAgent)) {
    response.headers.set('X-Robots-Tag', 'index, follow');
  } else {
    response.headers.set('X-Robots-Tag', 'index, follow');
  }

  return response;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
