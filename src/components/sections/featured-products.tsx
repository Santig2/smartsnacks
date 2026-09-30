"use client";

import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/menu/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts().slice(0, 3); // Take exactly 3 to match the reference grid

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#FDF9F3]" aria-labelledby="featured-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-16 flex flex-col items-center">
          <span className="font-serif italic text-3xl sm:text-4xl text-[#F4C84A] mb-2">
            Menu
          </span>
          <h2 id="featured-heading" className="text-4xl sm:text-5xl font-black text-[#17343A] uppercase tracking-wide mb-6">
            Signature Products
          </h2>
          <div className="w-16 h-0.5 bg-[#F4C84A] opacity-80" />
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Centered CTA */}
        <motion.div variants={fadeUp}>
          <Link
            href="/menu"
            className="clay-btn-aqua inline-flex items-center justify-center font-bold px-8 py-3 uppercase tracking-wider"
          >
            <span>View Full Menu</span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
