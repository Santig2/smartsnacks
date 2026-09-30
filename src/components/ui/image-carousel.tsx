"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
  badgeText?: string;
  aspectClassName?: string;
  interval?: number;
}

export function ImageCarousel({
  images,
  altPrefix,
  badgeText,
  aspectClassName = "h-[500px]",
  interval = 3500,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isHovered, images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full ${aspectClassName} clay-card p-3 sm:p-4 overflow-hidden group select-none`}
    >
      <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-stone-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${altPrefix} - ${currentIndex + 1}`}
              fill
              className="object-cover object-center"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Badge */}
        {badgeText && (
          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md border border-[#17343A]/10 flex items-center gap-1.5 text-xs font-bold text-[#17343A]">
            <span className="w-2 h-2 rounded-full bg-[#E83C8B] animate-pulse" />
            <span>{badgeText}</span>
          </div>
        )}

        {/* Left / Right Buttons */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-[#17343A] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-[#17343A] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-5 h-2 bg-[#F4C84A]"
                    : "w-2 h-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
