import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const CACHE = '.open-next/cache';
const OUT = '.open-next/assets/__html';
const LOCALE = /^(en|vi|es|fr)(\/|$)/;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.cache')) yield p;
  }
}

await rm(OUT, { recursive: true, force: true });
let n = 0;
for await (const file of walk(CACHE)) {
  const rel = file.replace(/\\/g, '/').split('/$/')[1]?.slice(0, -'.cache'.length);
  if (!rel || !LOCALE.test(rel)) continue;
  const entry = JSON.parse(await readFile(file, 'utf8'));
  if (entry.type !== 'app' || !entry.html) continue;
  const out = join(OUT, `${rel}.page`);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, entry.html);
  n++;
}
console.log(`html: ${n} prerendered pages extracted`);
