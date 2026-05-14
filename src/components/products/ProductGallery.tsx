'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';

export default function ProductGallery({ product, name }: { product: Product; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const images = product.images.length > 0 ? product.images : [];
  const hasVideo = Boolean(product.video);

  return (
    <div className="space-y-3">
      {/* Main display */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white border border-border">
        {showVideo && hasVideo ? (
          <video
            src={product.video}
            controls
            autoPlay
            muted
            loop
            className="h-full w-full object-contain"
          />
        ) : images[activeIndex] ? (
          <Image
            src={images[activeIndex]}
            alt={`${name} — image ${activeIndex + 1}`}
            fill
            className="object-contain p-8"
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg className="h-24 w-24 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Thumbnail row: up to 4 images + optional video thumbnail */}
      {(images.length > 1 || hasVideo) && (
        <div className="grid grid-cols-5 gap-2">
          {images.slice(0, 4).map((src, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); setShowVideo(false); }}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-all ${
                !showVideo && activeIndex === i
                  ? 'border-brand-orange ring-1 ring-brand-orange'
                  : 'border-border hover:border-brand-orange/50'
              } bg-surface`}
            >
              <Image
                src={src}
                alt={`${name} ${i + 1}`}
                fill
                className="object-contain p-1.5"
                sizes="10vw"
              />
            </button>
          ))}

          {/* Video thumbnail */}
          {hasVideo && (
            <button
              onClick={() => setShowVideo(true)}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-all flex flex-col items-center justify-center gap-1 ${
                showVideo
                  ? 'border-brand-orange ring-1 ring-brand-orange bg-brand-orange/5'
                  : 'border-border hover:border-brand-orange/50 bg-surface'
              }`}
            >
              <svg className="h-6 w-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-[10px] font-semibold text-brand-gray/70 uppercase tracking-wide">Video</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
