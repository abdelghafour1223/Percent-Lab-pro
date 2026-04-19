import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Force www canonical — redirect non-www to www with 301
  if (host === 'percentlab.app' || host.startsWith('percentlab.app:')) {
    url.host = 'www.percentlab.app';
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets:
     * - _next/static, _next/image, favicon.ico
     * - robots.txt, sitemap files, images
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.*\.xml|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
