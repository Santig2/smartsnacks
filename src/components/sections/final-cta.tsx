"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { AutoplayVideo } from "@/components/ui/autoplay-video";

export function FinalCTASection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative py-32 sm:py-48 overflow-hidden" 
      aria-labelledby="final-cta-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AutoplayVideo 
          src="/assets/images/video-hero1.mp4" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#17343A]/70" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        
        <motion.span variants={fadeUp} className="font-serif italic text-3xl sm:text-5xl text-[#F4C84A] mb-4">
          Ready for Fuel?
        </motion.span>
        
        <motion.h2 
          variants={fadeUp} 
          id="final-cta-heading" 
          className="text-5xl sm:text-7xl font-black text-white uppercase tracking-wider mb-6"
        >
          Stop By Today
        </motion.h2>

        <motion.div variants={fadeUp} className="w-16 h-0.5 bg-[#F4C84A] mb-8 opacity-80" />

        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-medium">
          Whether you need a quick energy boost, a post-workout recovery shake, or just a great spot to hang out, we are ready to serve you in Pembroke Pines.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="/location"
            className="clay-btn-yellow inline-flex items-center justify-center font-bold px-10 py-4 uppercase tracking-wider"
          >
            Get Directions
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
