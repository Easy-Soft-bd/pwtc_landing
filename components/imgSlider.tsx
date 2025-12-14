"use client";
import React from "react";
import Image from "next/image";

const photos = [
  "/photo/photo1.jpg",
  "/photo/photo2.jpg",
  "/photo/photo3.jpg",
  "/photo/photo4.jpg",
  "/photo/photo1.jpg",
  "/photo/photo2.jpg",
  "/photo/photo3.jpg",
  "/photo/photo4.jpg",
  "/photo/photo1.jpg",
  "/photo/photo2.jpg",
  "/photo/photo3.jpg",
  "/photo/photo4.jpg",
  "/photo/photo1.jpg",
  "/photo/photo2.jpg",
  "/photo/photo3.jpg",
  "/photo/photo4.jpg",
];

const PremiumPhotoSlider = () => {
  const doubledPhotos = [...photos, ...photos];

  return (
    <div className="w-full flex items-center justify-center overflow-hidden py-8">
      <div className="w-full relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        {/* Slider container */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll-left">
            {doubledPhotos.map((src, i) => (
              <div key={i} className="shrink-0 px-2 sm:px-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-50 group-hover:opacity-75" />
                  <Image
                    src={src}
                    alt={`Photo ${(i % photos.length) + 1}`}
                    fill
                    className="relative w-full h-full object-cover rounded-2xl border-2 border-accent shadow-xl group-hover:scale-105 transition-all duration-300 group-hover:border-primary"
                    sizes="80px, 96px, 112px, 128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PremiumPhotoSlider;
