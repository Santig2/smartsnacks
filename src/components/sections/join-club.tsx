"use client";

import { motion } from "motion/react";
import { ImageCarousel } from "@/components/ui/image-carousel";

const CAMBI_IMAGES = [
  "/assets/images/cambi1.png",
  "/assets/images/cambi2.png",
  "/assets/images/cambi3.png",
  "/assets/images/cambi6.png",
  "/assets/images/cambi7.png",
  "/assets/images/cambi8.png",
  "/assets/images/cambi9.png",
];

export function JoinClubSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Carousel for Member Transformations (cambi1 to cambi9) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1"
          >
            <ImageCarousel
              images={CAMBI_IMAGES}
              altPrefix="Smart Snack Member Results"
              badgeText="Real Results"
              aspectClassName="h-[480px] sm:h-[540px]"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#17343A] uppercase tracking-tight mb-6">
              Join the <span className="text-[#E83C8B]">Club</span>
            </h2>
            <div className="w-20 h-1 bg-[#55C5D5] mb-8 rounded-full" />
            <p className="text-[#3D585E] text-lg leading-relaxed mb-6 font-medium">
              Become part of a community that celebrates health, wellness, and great taste. Unlock exclusive loyalty rewards, premium products, and special perks by joining us.
            </p>
            <p className="text-[#3D585E] leading-relaxed mb-8">
              Whether you are local to Pembroke Pines or just love our vibe, sign up for premium loyalty benefits and stay connected with the Smart Snack family.
            </p>
            
            <a 
              href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium" 
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn inline-flex text-white font-bold px-8 py-4 uppercase tracking-wider"
            >
              Join the Club
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
