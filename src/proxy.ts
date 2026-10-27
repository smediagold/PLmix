import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intl = createMiddleware(routing);

const BLOCKED = new Set(['VN']);
const BYPASS_KEY = process.env.VN_BYPASS_KEY;
const BYPASS_COOKIE = 'pl_access';
const VN_SITE = 'https://vi.phulongglobal.com';

const ROUTES = new Set(['', ...routing.locales, 'products', 'about', 'contact', 'blog']);
const LEGACY: [RegExp, string][] = [
  [/stirrup|dai-thep|uon-dai|be-dai/, '/en/products/stirrup-bending-machines'],
  [/mixer|tron|concrete|betong|be-tong/, '/en/products/concrete-mixers'],
  [/wheelbarrow|xe-rua|trolley|hand-truck|xe-day/, '/en/products/wheelbarrows'],
  [/thresher|tuot/, '/en/products/paddy-threshers'],
  [/transplanter|cay-lua|seedling/, '/en/products/rice-transplanters'],
  [/fan|quat/, '/en/products/industrial-fans'],
  [/vikyno|diesel|engine|dong-co|motor/, '/en/products/engines'],
  [/^\/(home|trang-chu)/, '/en'],
  [/review|about|gioi-thieu|lien-he|contact/, '/en/about'],
  [/whole-machine|belt|tu-khoa|danh-muc|san-pham|product|shop|cart|tag|category/, '/en/products'],
];

function legacyTarget(pathname: string) {
  const first = pathname.split('/')[1] ?? '';
  if (ROUTES.has(first)) return null;
  const path = decodeURIComponent(pathname).toLowerCase();
  return LEGACY.find(([re]) => re.test(path))?.[1] ?? '/en';
}

export function proxy(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('access');
  if (BYPASS_KEY && key === BYPASS_KEY) {
    const url = req.nextUrl.clone();
    url.searchParams.delete('access');
    const res = NextResponse.redirect(url);
    res.cookies.set(BYPASS_COOKIE, BYPASS_KEY, { maxAge: 60 * 60 * 24 * 365, httpOnly: true, secure: true, sameSite: 'lax' });
    return res;
  }

  const legacy = legacyTarget(req.nextUrl.pathname);
  if (legacy) return NextResponse.redirect(new URL(legacy, req.url), 301);

  const country = req.headers.get('x-vercel-ip-country');
  if (country && BLOCKED.has(country) && (!BYPASS_KEY || req.cookies.get(BYPASS_COOKIE)?.value !== BYPASS_KEY)) {
    if (VN_SITE) return NextResponse.redirect(VN_SITE, 302);
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
