"use client";

import { motion } from "motion/react";
import { ImageCarousel } from "@/components/ui/image-carousel";

const JAIRO_IMAGES = [
  "/assets/images/j1.png",
  "/assets/images/j2.png",
  "/assets/images/j3.png",
];

export function MeetCrafterSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="meet-the-crafter" className="scroll-mt-24 py-24 bg-[#FDF9F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#17343A] uppercase tracking-tight mb-6">
              Meet the <span className="text-[#55C5D5]">Crafter</span>
            </h2>
            <div className="w-20 h-1 bg-[#E83C8B] mb-8 rounded-full" />
            <p className="text-[#3D585E] text-lg leading-relaxed mb-6 font-medium">
              Every shake, tea, and açaí bowl is crafted with passion and precision. Jairo Guerrero brings the energy, knowledge, and dedication to ensure your nutritional goals are met with the best flavors.
            </p>
            <p className="text-[#3D585E] leading-relaxed mb-8">
              At Smart Snack Nutrition, we don't just serve drinks; we build relationships. We are here to empower your healthy lifestyle journey, making every visit a step closer to your best self.
            </p>
            
            <a 
              href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium" 
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn inline-flex text-white font-bold px-8 py-4 uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Carousel for Jairo Guerrero (j1, j2, j3) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <ImageCarousel
              images={JAIRO_IMAGES}
              altPrefix="Jairo Guerrero - Smart Snack Crafter"
              badgeText="Jairo Guerrero"
              aspectClassName="h-[480px] sm:h-[540px]"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
