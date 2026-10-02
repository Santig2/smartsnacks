"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";

export function ChooseYourGoalSection() {
  const products = PRODUCTS.filter(p => !p.isFeatured).slice(0, 6); // Grab 6 non-featured products

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white" aria-labelledby="more-menu-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-20 flex flex-col items-center">
          <span className="font-serif italic text-3xl sm:text-4xl text-[#F4C84A] mb-2">
            More Options
          </span>
          <h2 id="more-menu-heading" className="text-4xl sm:text-5xl font-black text-[#17343A] uppercase tracking-wide mb-6">
            From Our Menu
          </h2>
          <div className="w-16 h-0.5 bg-[#F4C84A] opacity-80" />
        </motion.div>

        {/* 2-Column Menu List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 w-full max-w-6xl">
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUp} className="flex items-center gap-6 group">
              
              {/* Circle Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-[#FDF9F3] shadow-sm group-hover:border-[#55C5D5] transition-colors duration-300">
                <Image 
                  src={product.image || "/assets/images/hero_shakes_teas.jpg"} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1 flex flex-col min-w-0">
                
                {/* Title & Price Row */}
                <div className="flex items-end justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#17343A] uppercase tracking-wider truncate">
                    {product.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#3D585E] truncate mb-3">
                  {product.shortDescription}
                </p>

                {/* Macros / Badges */}
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#17343A]">
                  {product.proteinAmount && (
                    <span className="text-[#3D585E] font-medium">{product.proteinAmount}</span>
                  )}
                  {product.proteinAmount && product.caloriesPlaceholder && (
                    <span className="text-[#17343A]/20">/</span>
                  )}
                  {product.caloriesPlaceholder && (
                    <span className="text-[#3D585E] font-medium">{product.caloriesPlaceholder}</span>
                  )}

                  {/* Highlights (like SPECIAL, VEGAN) */}
                  <div className="flex items-center gap-1.5 ml-2">
                    <span className="bg-[#F4C84A] text-[#17343A] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    {product.highlights.slice(0, 1).map((h) => (
                      <span key={h} className="border border-[#17343A]/20 text-[#17343A] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
