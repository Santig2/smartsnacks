"use client";

import { Leaf } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function BrandPillarsSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="fresh-food-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        
        {/* Offset Overlap Layout - Mirrored (Box Left, Image Right) */}
        <div className="flex flex-col-reverse lg:block">
          
          {/* Right Image */}
          <motion.div 
            variants={fadeUp} 
            className="relative w-full max-w-4xl lg:w-4/5 h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-200 lg:ml-auto"
          >
             <div className="w-full h-full bg-[#EBF8FA] flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/assets/images/hero_shakes_teas.jpg"
                  alt="Fresh Ingredients at Smart Snack Nutrition"
                  fill
                  className="object-cover opacity-80"
                />
             </div>
          </motion.div>

          {/* Left Overlapping White Box */}
          <motion.div 
            variants={fadeUp}
            className="bg-white p-10 sm:p-16 shadow-2xl relative lg:absolute top-1/2 lg:-translate-y-1/2 left-0 lg:left-8 w-full lg:w-[45%] mt-[-50px] lg:mt-0 z-10 text-center flex flex-col items-center"
          >
             
             <div className="w-16 h-16 rounded-full bg-[#EBF8FA] text-[#55C5D5] flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
             </div>

             <h3 id="fresh-food-heading" className="text-2xl sm:text-3xl font-black text-[#17343A] uppercase tracking-wide mb-4">
               Premium Quality
             </h3>
             <div className="w-12 h-0.5 bg-[#F4C84A] mb-6 opacity-80" />

             <p className="text-base text-[#3D585E] leading-relaxed mb-0">
               We use only the finest, carefully selected ingredients for our protein shakes, energy teas, and açaí bowls. Our commitment to premium nutrition ensures you get the fuel your body deserves without compromising on incredible taste.
             </p>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
