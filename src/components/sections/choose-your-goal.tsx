"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ChooseYourGoalSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section className="py-32 sm:py-40 bg-[#FDF9F3] overflow-hidden" aria-labelledby="more-menu-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        
        {/* Left: Collage */}
        <motion.div variants={fadeUp} className="relative w-full aspect-square max-w-lg lg:max-w-xl mx-auto lg:mx-0">
          {/* Ambient background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#55C5D5]/15 via-transparent to-[#E83C8B]/15 rounded-full blur-3xl -z-10" />

          {/* Card 1: Protein Shakes (Top Left) */}
          <div className="absolute top-0 left-0 w-[68%] h-[68%] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(23,52,58,0.12)] z-10 transition-transform duration-700 hover:scale-[1.02]">
            <Image 
              src="/assets/images/real-shakes.jpeg" 
              alt="Real Handcrafted Protein Shakes" 
              fill 
              sizes="(max-width: 768px) 100vw, 400px" 
              className="object-cover object-center" 
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#17343A] shadow-sm uppercase tracking-wider">
              Protein Shakes
            </div>
          </div>

          {/* Card 2: Protein Waffles (Bottom Right) */}
          <div className="absolute bottom-0 right-0 w-[64%] h-[64%] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(23,52,58,0.16)] z-20 transition-transform duration-700 hover:scale-[1.02]">
            <Image 
              src="/assets/images/real2-wafle.jpeg" 
              alt="Fresh Belgian Protein Waffles" 
              fill 
              sizes="(max-width: 768px) 100vw, 360px" 
              className="object-cover object-center" 
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#17343A] shadow-sm uppercase tracking-wider">
              Protein Waffles
            </div>
          </div>

          {/* Card 3: Fresh Acai Bowl (Center overlap circle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(23,52,58,0.25)] z-30 transition-transform duration-500 hover:scale-105">
            <Image 
              src="/assets/images/realacai.jpeg" 
              alt="Fresh Organic Açaí Bowl" 
              fill 
              sizes="(max-width: 768px) 50vw, 240px" 
              className="object-cover object-[center_35%]" 
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-3 left-6 bg-[#17343A] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-30 flex items-center gap-2 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#55C5D5] animate-pulse" />
            <span>100% Real Ingredients</span>
          </div>
        </motion.div>

        {/* Right: Text and CTA */}
        <motion.div variants={fadeUp} className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center justify-center bg-white border border-[#17343A]/10 text-[#17343A] rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Find Your Flavor
          </div>
          
          <h2 id="more-menu-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17343A] tracking-tight leading-[1.1] mb-6">
            Healthy Doesn&apos;t Have To Be <span className="text-[#55C5D5]">Boring</span>
          </h2>
          
          <p className="text-lg text-[#3D585E] leading-relaxed mb-10 max-w-lg">
            We use only the finest, carefully selected ingredients for our protein shakes, energy teas, and açaí bowls. Our commitment to premium nutrition ensures you get the fuel your body deserves without compromising on incredible taste.
          </p>

          <Link href="/menu">
            <Button variant="default" size="lg" className="group shadow-[0_8px_20px_rgba(23,52,58,0.15)]">
              <span>View Full Menu</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-105 ml-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
