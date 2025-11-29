"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Parallax,
} from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef } from "react";
import hero1 from "@/components/assets/hero/pic (1).png";
import hero2 from "@/components/assets/hero/pic (2).png";
import hero3 from "@/components/assets/hero/pic (3).png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const heroImages = [
    { src: hero1, alt: "Hero Image 1" },
    { src: hero2, alt: "Hero Image 2" },
    { src: hero3, alt: "Hero Image 3" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = (index + 1) * 0.3;
          const yPos = scrollProgress * 100 * speed;
          ref.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-60px)] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !rounded-full",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-8",
        }}
        navigation={true}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <div
                ref={(el) => {
                  parallaxRefs.current[index * 2] = el;
                }}
                className="absolute inset-0 will-change-transform"
                data-swiper-parallax="-23%"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover scale-110"
                  sizes="100vw"
                />
              </div>

              {/* Animated overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/65 to-transparent" />

              {/* Animated mesh overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-accent/20 via-transparent to-tertiary/20 animate-pulse" />
              </div>

              {/* Content overlay with parallax */}
              <div
                ref={(el) => {
                  parallaxRefs.current[index * 2 + 1] = el;
                }}
                className="absolute inset-0 flex items-center will-change-transform"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax="200"
              >
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                  <div className="max-w-2xl">
                    <h1
                      className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                      data-swiper-parallax="-100"
                    >
                      Welcome to{" "}
                      <span className="text-light drop-shadow-lg">
                        Privilege World
                      </span>
                    </h1>
                    <p
                      className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md"
                      data-swiper-parallax="-200"
                    >
                      Discover exclusive travel experiences and premium visa
                      services tailored for your journey.
                    </p>
                    <div
                      className="flex flex-col sm:flex-row gap-4"
                      data-swiper-parallax="-300"
                    >
                      <a
                        href="#visa"
                        className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-all duration-300 shadow-2xl hover:shadow-primary/50 transform hover:scale-105 inline-block text-center backdrop-blur-sm"
                      >
                        Explore Visa Services
                      </a>
                      <a
                        href="#about-us"
                        className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300 inline-block text-center shadow-xl"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator - Desktop only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Custom Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          width: 80px;
          height: 100%;
          top: 0 !important;
          margin-top: 0 !important;
          border: none !important;
          border-radius: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: none !important;
        }

        .swiper-button-next {
          right: 0 !important;
          transform: translateX(calc(100% - 20px));
        }

        .swiper-button-prev {
          left: 0 !important;
          transform: translateX(calc(-100% + 20px));
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
          transform: translateX(0);
          background: transparent !important;
        }

        .swiper-button-next:hover::before,
        .swiper-button-prev:hover::before {
          opacity: 1;
        }

        .swiper-button-next:active,
        .swiper-button-prev:active {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0.2) 100%
          );
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: 700;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .swiper-button-next:hover::after {
          transform: translateX(4px);
        }

        .swiper-button-prev:hover::after {
          transform: translateX(-4px);
        }

        .swiper-button-next {
          right: 0 !important;
          border-left: none;
          border-right: 2px solid rgba(255, 255, 255, 0.2);
        }

        .swiper-button-prev {
          left: 0 !important;
          border-right: none;
          border-left: 2px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 60px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 18px;
          }
        }

        .swiper-pagination {
          bottom: 40px !important;
          left: 40px !important;
          right: auto !important;
          width: auto !important;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .swiper-pagination-bullet {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          margin: 0 !important;
        }
        .swiper-pagination-bullet-active {
          box-shadow: 0 4px 16px rgba(44, 49, 119, 0.6),
            0 0 20px rgba(168, 160, 244, 0.4);
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            left: 50% !important;
            transform: translateX(-50%);
            flex-direction: row;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
