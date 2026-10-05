"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function WorkWithUsSection() {
  return (
    <section 
      id="careers"
      className="relative w-full bg-[#FDF9F3] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="work-with-us-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0E2024] rounded-3xl sm:rounded-[2.5rem] overflow-hidden text-white shadow-2xl border border-[#17343A]/30 min-h-[580px] flex items-center">
          
          {/* Background Running / Fitness Community Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/images/team-running-fitness.jpg"
              alt="Herbalife Nutrition fitness community running together in Pembroke Pines"
              fill
              className="object-cover object-center lg:object-[center_35%]"
              priority={false}
            />
            {/* Multi-layer Gradient: High text contrast on left, rich transparency on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E2024] via-[#0E2024]/95 sm:via-[#0E2024]/90 lg:via-[#0E2024]/80 to-[#0E2024]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2024] via-transparent to-[#0E2024]/40" />
          </div>

          {/* Ambient Corner Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#55C5D5] opacity-20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E83C8B] opacity-15 rounded-full blur-[100px] pointer-events-none" />

          {/* Main Content Layout */}
          <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Value Props & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#55C5D5] border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#55C5D5] animate-pulse" />
                <span>Careers & Opportunity</span>
              </div>

              <h2 
                id="work-with-us-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
              >
                Work With Us & Turn Your Passion Into a <span className="text-[#F4C84A]">Career</span>
              </h2>

              <p className="text-[#EBF8FA]/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Are you passionate about fitness, nutrition, and helping others? Join the Smart Snack Nutrition team in Pembroke Pines. Partner with us and Herbalife to launch your independent wellness business with full mentorship, flexible hours, and unlimited growth potential.
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                {[
                  { label: "Flexible Schedule", desc: "Work on your terms" },
                  { label: "1-on-1 Mentorship", desc: "Full club training" },
                  { label: "Product Discounts", desc: "VIP Herbalife rates" },
                  { label: "Community First", desc: "Inspiring teammates" },
                  { label: "No Experience Needed", desc: "Step-by-step coaching" },
                  { label: "Leadership Growth", desc: "Expand your career" },
                ].map((perk, i) => (
                  <div key={i} className="bg-[#17343A]/80 border border-white/15 rounded-xl p-3 backdrop-blur-md shadow-sm">
                    <p className="text-xs sm:text-sm font-bold text-white leading-snug">{perk.label}</p>
                    <p className="text-[11px] text-[#EBF8FA]/70 mt-0.5">{perk.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/join" className="w-full sm:w-auto">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full sm:w-auto justify-center shadow-[0_8px_20px_rgba(232,60,139,0.35)] group inline-flex items-center text-base"
                  >
                    <span>Join Our Team</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-105 ml-3 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Button>
                </Link>

                <span className="text-xs text-[#EBF8FA]/75 text-center sm:text-left">
                  Quick 2-minute application form • We contact you within 24 hrs
                </span>
              </div>
            </div>

            {/* Right Column: Glassmorphic Coaching Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-end">
              <div className="bg-[#17343A]/85 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#55C5D5]/20 flex items-center justify-center text-[#55C5D5] font-black text-xl border border-[#55C5D5]/30">
                      ★
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Smart Snack Club</p>
                      <p className="text-xs text-[#55C5D5] font-medium">Herbalife Nutrition Partner</p>
                    </div>
                  </div>
                  <span className="bg-[#F4C84A]/20 text-[#F4C84A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#F4C84A]/30">
                    Now Hiring
                  </span>
                </div>

                <p className="text-sm text-[#EBF8FA]/90 leading-relaxed italic">
                  &ldquo;Starting as a wellness coach with Smart Snack transformed my lifestyle. I get to inspire our Pembroke Pines community every day while building a career I truly love.&rdquo;
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#EBF8FA]/70 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-white font-medium">Pembroke Pines, FL</span>
                  </div>
                  <Link href="/join" className="text-[#F4C84A] hover:underline font-bold transition-all">
                    Start Today →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
