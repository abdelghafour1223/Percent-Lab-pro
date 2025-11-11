import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of blocked country codes (Arabic countries)
const BLOCKED_COUNTRIES = new Set([
  'MA', // Morocco
  'DZ', // Algeria
  'TN', // Tunisia
  'LY', // Libya
  'EG', // Egypt
  'SD', // Sudan
  'SO', // Somalia
  'MR', // Mauritania
  'EH', // Western Sahara
  'SA', // Saudi Arabia
  'AE', // United Arab Emirates
  'QA', // Qatar
  'KW', // Kuwait
  'BH', // Bahrain
  'OM', // Oman
  'YE', // Yemen
  'IQ', // Iraq
  'SY', // Syria
  'JO', // Jordan
  'LB', // Lebanon
  'PS', // Palestine
  'DJ', // Djibouti
  'KM', // Comoros
]);

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

  // Allow search engine bots regardless of location
  if (isSearchEngineBot(userAgent)) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'index, follow');
    return response;
  }

  // Get country from Vercel's geo headers
  const country = request.headers.get('x-vercel-ip-country');

  // Check if country is blocked
  if (country && BLOCKED_COUNTRIES.has(country)) {
    // Return 451 (Unavailable For Legal Reasons) with noindex header
    const response = new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Service Unavailable</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: white;
      border-radius: 12px;
      padding: 40px;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 {
      font-size: 48px;
      color: #667eea;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 15px;
    }
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .code {
      display: inline-block;
      background: #f5f5f5;
      padding: 5px 10px;
      border-radius: 4px;
      font-family: monospace;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>451</h1>
    <h2>Service Unavailable</h2>
    <p>We're sorry, but this service is not available in your region.</p>
    <p>If you believe this is an error, please contact us.</p>
    <div class="code">Error Code: 451 - Unavailable For Legal Reasons</div>
  </div>
</body>
</html>`,
      {
        status: 451,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    );
    return response;
  }

  // Allow all other traffic with index, follow headers
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'index, follow');
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
