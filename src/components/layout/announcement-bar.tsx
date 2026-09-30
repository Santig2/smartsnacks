"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useStoreHours } from "@/hooks/use-store-hours";

export function AnnouncementBar() {
  const { isOpen, statusText } = useStoreHours();

  return (
    <aside
      className="bg-[#17343A] text-[#FDF9F3] text-xs py-2.5 border-b border-white/10"
      aria-label="Store Status and Hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 font-medium tracking-wide">
          <span
            className={`w-2 h-2 rounded-full ${
              isOpen ? "bg-[#55C5D5] animate-pulse-aqua" : "bg-[#E83C8B]"
            }`}
            aria-hidden="true"
          />
          <span className="text-white/95">{statusText}</span>
        </div>

        {/* Center message */}
        <div className="hidden md:flex items-center gap-2 font-medium text-white/85">
          <Sparkles className="w-3.5 h-3.5 text-[#F4C84A]" aria-hidden="true" />
          <span>Energizing Mega Teas & 24g+ Protein Shakes Made Fresh Daily</span>
        </div>

        {/* Quick action link */}
        <div>
          <Link
            href="/location"
            className="inline-flex items-center gap-1 text-[#55C5D5] font-bold hover:text-white transition-colors"
          >
            <span>Visit Us</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
