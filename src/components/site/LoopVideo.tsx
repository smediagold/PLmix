'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LoopVideo({ src, poster, label, className = '' }: { src: string; poster?: string; label: string; className?: string }) {
  const t = useTranslations('media');
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const nearIo = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          nearIo.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );
    nearIo.observe(v);
    return () => nearIo.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => {});
      else {
        v.pause();
        setPlaying(false);
      }
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={near ? poster : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t('pause') : t('play')}
        className="press absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center bg-ink/80 text-white hover:bg-ink"
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
          {playing ? <path d="M4 3h3v10H4zM9 3h3v10H9z" /> : <path d="M4 2.5v11l9-5.5z" />}
        </svg>
      </button>
    </div>
  );
}
