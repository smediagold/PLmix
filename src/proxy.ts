import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intl = createMiddleware(routing);

const BLOCKED = new Set(['VN']);
const BYPASS_KEY = 'Dhx1LNYxkl4e';
const BYPASS_COOKIE = 'pl_access';

export function proxy(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('access');
  if (key === BYPASS_KEY) {
    const url = req.nextUrl.clone();
    url.searchParams.delete('access');
    const res = NextResponse.redirect(url);
    res.cookies.set(BYPASS_COOKIE, BYPASS_KEY, { maxAge: 60 * 60 * 24 * 365, httpOnly: true, secure: true, sameSite: 'lax' });
    return res;
  }

  const country = req.headers.get('x-vercel-ip-country');
  if (country && BLOCKED.has(country) && req.cookies.get(BYPASS_COOKIE)?.value !== BYPASS_KEY) {
    return new NextResponse('Access to this website is not available in your region.', {
      status: 403,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
    });
  }

  return intl(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
