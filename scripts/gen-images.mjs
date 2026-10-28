import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, dirname, extname } from 'node:path';
import sharp from 'sharp';

const PUBLIC = 'public';
const OUT = join(PUBLIC, '_img');
const WIDTHS = [256, 384, 640, 828, 1080, 1440, 1920];
const EXT = /\.(png|jpe?g|webp)$/i;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (p !== OUT) yield* walk(p);
    } else if (EXT.test(e.name)) yield p;
  }
}

let made = 0;
for await (const file of walk(PUBLIC)) {
  const rel = relative(PUBLIC, file).replace(/\\/g, '/');
  const src = await stat(file);
  const meta = await sharp(file).metadata();
  for (const w of WIDTHS) {
    const out = join(OUT, String(w), rel.slice(0, -extname(rel).length) + '.webp');
    const done = await stat(out).catch(() => null);
    if (done && done.mtimeMs >= src.mtimeMs) continue;
    await mkdir(dirname(out), { recursive: true });
    await sharp(file).resize({ width: Math.min(w, meta.width ?? w), withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    made++;
  }
}
console.log(`images: ${made} variants generated`);
