"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { UnsplashImage } from "@/lib/config/images";

interface RandomUnsplashCoverProps {
  images: readonly UnsplashImage[];
  country: string;
  title: string;
  flagCode: string;
}

const RandomUnsplashCover = ({
  images,
  country,
  title,
  flagCode,
}: RandomUnsplashCoverProps) => {
  const [cover, setCover] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    setCover(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  return (
    <div className="relative h-44 sm:h-48 w-full overflow-hidden">
      {cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-secondary/20 to-tertiary/30 animate-pulse" />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-primary/10" />
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end gap-4">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden ring-2 ring-white/30 shadow-lg shrink-0">
          <Image
            src={`https://flagcdn.com/w80/${flagCode}.png`}
            alt={`${country} flag`}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0 text-white">
          <p className="text-[10px] sm:text-xs font-medium text-white/70 uppercase tracking-widest mb-0.5">
            {country}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RandomUnsplashCover;
