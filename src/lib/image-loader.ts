const WIDTHS = [256, 384, 640, 828, 1080, 1440, 1920];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!/^\/[^?#]+\.(png|jpe?g|webp)$/i.test(src)) return src;
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `/_img/${w}${src.replace(/\.(png|jpe?g|webp)$/i, '.webp')}`;
}
