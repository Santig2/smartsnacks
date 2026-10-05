"use client";

import { Star, MessageSquareHeart, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  // Duplicate reviews to ensure seamless infinite looping
  const reviewsList = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section className="py-32 sm:py-40 bg-[#FDF9F3] overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-xs border border-[#17343A]/10 mb-4">
          <div className="flex text-[#F4C84A]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F4C84A]" />
            ))}
          </div>
          <span className="text-xs font-black text-[#17343A]">5.0 STAR GOOGLE REVIEWS</span>
        </div>

        <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black text-[#17343A] uppercase tracking-tight mb-4">
          Loved by Our <span className="text-[#55C5D5]">Community</span>
        </h2>
        <p className="text-base sm:text-lg text-[#3D585E] max-w-2xl mx-auto leading-relaxed">
          Real feedback from our neighbors in Pembroke Pines who fuel their active days with our shakes, teas, and protein snacks.
        </p>
      </div>

      {/* Fluid Marquee Track with Hover-Pause */}
      <div className="relative w-full overflow-hidden marquee-container py-4">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FDF9F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FDF9F3] to-transparent z-10" />

        <div className="animate-marquee-reviews flex gap-6 px-4">
          {reviewsList.map((item, index) => (
            <div
              key={index}
              className="w-[320px] sm:w-[380px] shrink-0 bg-[#17343A]/5 p-2 rounded-[2rem] border border-[#17343A]/10 group"
            >
              <div className="bg-white rounded-[calc(2rem-8px)] p-6 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_16px_rgba(0,0,0,0.02)] border border-[#17343A]/5 h-full flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
                <div>
                  {/* Header: Stars & Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#F4C84A] gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F4C84A]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D585E]/70 bg-[#FDF9F3] px-2.5 py-1 rounded border border-[#17343A]/10">
                      {item.timeAgo}
                    </span>
                  </div>

                  {/* Review Body */}
                  <p className="text-sm sm:text-base text-[#17343A] font-medium leading-relaxed mb-6 italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#17343A]">
                      {item.author}
                    </div>
                    {item.badge && (
                      <div className="text-[11px] text-[#55C5D5] font-semibold">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* Google Icon / Link */}
                  {item.googleProfileUrl ? (
                    <a
                      href={item.googleProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#FDF9F3] rounded-full flex items-center justify-center text-[#3D585E]/60 hover:text-[#55C5D5] border border-[#17343A]/5 hover:bg-[#EBF8FA] transition-colors"
                      title="View on Google"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prominent CTA to Review on Google */}
      <div className="mt-12 text-center px-4">
        <Button asChild variant="secondary" size="lg" className="border-[#F4C84A] hover:border-[#F4C84A]">
          <a
            href="https://share.google/5C5CK3OQHNS4xqemb"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Leave a Review on Google</span>
            <div className="w-8 h-8 rounded-full bg-[#17343A]/5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-105 ml-2">
              <ExternalLink className="w-4 h-4 text-[#17343A]/70" />
            </div>
          </a>
        </Button>
      </div>
    </section>
  );
}
