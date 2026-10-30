// Lightweight edge routing in front of OpenNext, replacing the Next.js proxy (middleware)
// so most requests skip the expensive Node middleware path.
// OpenNext is loaded lazily so cold starts that only serve prerendered HTML or redirects skip it.
// @ts-ignore generated at build time
const nextHandler = () => import('./.open-next/worker.js').then((m) => m.default);

type Env = { VN_BYPASS_KEY?: string; ASSETS: { fetch(input: URL | Request): Promise<Response> }; [k: string]: unknown };

const LOCALES = new Set(['en', 'vi', 'es', 'fr']);
const UNPREFIXED = new Set(['products', 'about', 'contact', 'blog']);
const SKIP = new Set(['_next', 'api', 'cdn-cgi', '_img', 'images', 'videos', '__html']);
const VN_SITE = 'https://vi.phulongglobal.com/';
const BYPASS_COOKIE = 'pl_access';

const LEGACY: [RegExp, string][] = [
  [/stirrup|dai-thep|uon-dai|be-dai/, '/en/products/stirrup-bending-machines'],
  [/mixer|tron|concrete|betong|be-tong/, '/en/products/concrete-mixers'],
  [/wheelbarrow|xe-rua|trolley|hand-truck|xe-day/, '/en/products/wheelbarrows'],
  [/thresher|tuot/, '/en/products/paddy-threshers'],
  [/transplanter|cay-lua|seedling/, '/en/products/rice-transplanters'],
  [/fan|quat/, '/en/products/industrial-fans'],
  [/vikyno|diesel|engine|dong-co|motor/, '/en/products/engines'],
  [/^\/(home|trang-chu)/, '/en'],
  [/review|about|gioi-thieu|lien-he|contact/, '/en/about'],
  [/whole-machine|belt|tu-khoa|danh-muc|san-pham|product|shop|cart|tag|category/, '/en/products'],
];

const redirect = (location: string, status: number, headers: Record<string, string> = {}) =>
  new Response(null, { status, headers: { location, ...headers } });

function hasBypass(req: Request, key: string) {
  const cookie = req.headers.get('cookie') ?? '';
  return cookie.split(/;\s*/).includes(`${BYPASS_COOKIE}=${key}`);
}

export default {
  async fetch(req: Request, env: Env, ctx: unknown) {
    const url = new URL(req.url);

    if (url.hostname === 'phulongglobal.com') {
      url.hostname = 'www.phulongglobal.com';
      return redirect(url.toString(), 308);
    }

    const key = env.VN_BYPASS_KEY;
    if (key && url.searchParams.get('access') === key) {
      url.searchParams.delete('access');
      return redirect(url.pathname + url.search, 307, {
        'set-cookie': `${BYPASS_COOKIE}=${key}; Path=/; Max-Age=31536000; Secure; HttpOnly; SameSite=Lax`,
      });
    }

    const path = url.pathname;
    const first = path.split('/')[1] ?? '';
    const isFile = path.slice(path.lastIndexOf('/')).includes('.');

    if (!isFile && !SKIP.has(first)) {
      if (!LOCALES.has(first)) {
        if (first === '' || UNPREFIXED.has(first)) return redirect(`/en${path === '/' ? '' : path}${url.search}`, 307);
        const target = LEGACY.find(([re]) => re.test(decodeURIComponent(path).toLowerCase()))?.[1] ?? '/en';
        return redirect(target, 301);
      }

      const country = (req as Request & { cf?: { country?: string } }).cf?.country ?? req.headers.get('cf-ipcountry');
      if (country === 'VN' && !(key && hasBypass(req, key))) {
        return redirect(VN_SITE, 302, { 'cache-control': 'no-store' });
      }
    }

    if ((req.method === 'GET' || req.method === 'HEAD') && LOCALES.has(first) && !url.search && !req.headers.has('rsc')) {
      const page = await env.ASSETS.fetch(new URL(`/__html${path.replace(/\/$/, '')}.page`, url));
      if (page.ok) {
        return new Response(req.method === 'HEAD' ? null : page.body, {
          headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate', vary: 'rsc, next-router-state-tree, next-router-prefetch' },
        });
      }
    }

    return (await nextHandler()).fetch(req, env, ctx);
  },
};
