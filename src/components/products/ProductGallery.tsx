'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Product } from '@/data/products';

export default function ProductGallery({ product, name }: { product: Product; name: string }) {
  const t = useTranslations('media');
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const images = product.images;
  const hasVideo = Boolean(product.video);
  const thumbs = images.slice(0, 7);

  return (
    <div>
      <div className="tone-tile relative aspect-square overflow-hidden">
        {showVideo && hasVideo ? (
          <video src={product.video} controls autoPlay muted loop playsInline className="h-full w-full bg-ink object-contain" aria-label={name} />
        ) : images[activeIndex] ? (
          <Image
            src={images[activeIndex]}
            alt={`${name}, ${activeIndex + 1}/${images.length}`}
            fill
            className="multiply object-contain p-[8%]"
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[17px] text-soft">{name}</div>
        )}
      </div>

      {(thumbs.length > 1 || hasVideo) && (
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {thumbs.map((src, i) => {
            const on = !showVideo && activeIndex === i;
            return (
              <button
                key={src}
                type="button"
                aria-label={`${name}, ${i + 1}`}
                aria-pressed={on}
                onClick={() => {
                  setActiveIndex(i);
                  setShowVideo(false);
                }}
                className={`press relative aspect-square overflow-hidden bg-white ${on ? 'outline outline-3 -outline-offset-3 outline-ink' : 'hover:opacity-80'}`}
              >
                <Image src={src} alt="" fill className="object-contain p-1" sizes="96px" />
              </button>
            );
          })}
          {hasVideo && (
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              aria-pressed={showVideo}
              className={`press flex aspect-square flex-col items-center justify-center gap-1 text-[15px] font-semibold ${
                showVideo ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-stone'
              }`}
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t('play')}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
