"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function CommunityLifestyleSection() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#FDF9F3]" aria-labelledby="promos-heading">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 id="promos-heading" className="sr-only">Promotions and Lifestyle</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          
          {/* Top Left: Delicious Food */}
          <motion.div variants={fadeUp} className="relative h-[300px] sm:h-[400px] bg-gray-200 overflow-hidden group">
            <Image 
              src="/assets/images/hero_shakes_teas.jpg" 
              alt="Delicious Shakes" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#17343A]/60 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
                Smart Nutrition
              </h3>
              <p className="text-white/90 text-sm max-w-sm mb-8 leading-relaxed hidden sm:block">
                Our protein shakes are crafted to taste like a cheat meal, while delivering the premium nutrition your body needs.
              </p>
              <Link
                href="/menu"
                className="clay-btn-yellow text-[#17343A] font-bold px-8 py-3 uppercase tracking-wider inline-flex"
              >
                View Menus
              </Link>
            </div>
          </motion.div>

          {/* Top Right: Special Events */}
          <motion.div variants={fadeUp} className="relative h-[300px] sm:h-[400px] bg-gray-200 overflow-hidden group">
            <Image 
              src="/assets/images/community-events.png" 
              alt="Community Workout Events & Challenges" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#17343A]/60 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
                Community Events
              </h3>
              <p className="text-white/90 text-sm max-w-sm mb-8 leading-relaxed hidden sm:block">
                Join our workout camps, wellness challenges, and community hangouts right here in Pembroke Pines.
              </p>
              <a
                href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn-yellow text-[#17343A] font-bold px-8 py-3 uppercase tracking-wider inline-flex"
              >
                Join the Club
              </a>
            </div>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Bottom Left: Welcoming Atmosphere */}
          <motion.div variants={fadeUp} className="bg-white p-10 sm:p-14 flex flex-col justify-center border-l-4 border-[#F4C84A] shadow-sm">
            <h3 className="text-2xl font-black text-[#17343A] uppercase tracking-wide mb-6">
              Welcoming Atmosphere
            </h3>
            <p className="text-[#3D585E] leading-relaxed text-sm sm:text-base">
              Step into a space designed for you to thrive. Whether you're grabbing a quick post-workout shake, bringing your laptop to work while sipping a loaded tea, or meeting friends, our club is your daily wellness sanctuary.
            </p>
          </motion.div>

          {/* Bottom Right: Happy Hour Pink Box */}
          <motion.div variants={fadeUp} className="bg-[#E83C8B] p-10 sm:p-14 flex flex-col justify-center text-white shadow-sm relative overflow-hidden">
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M17 10l-4-4-4 4"/>
                 <path d="M13 6v16"/>
               </svg>
             </div>
             
             <div className="border border-white/30 inline-flex self-start px-3 py-1 text-xs font-bold uppercase tracking-wider rounded mb-6">
               Limited Time
             </div>
             
             <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-wider mb-2 leading-tight">
               Combo<br/>Specials
             </h3>
             <p className="text-white/90 text-lg font-bold">
               Pair a Shake & Tea for the ultimate boost.
             </p>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
