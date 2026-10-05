"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FAQS } from "@/content/faqs";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax translation and slight rotational tilt as the user scrolls
  const leftY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const rightY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [6, -4]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-32 sm:py-40 bg-[#FDF9F3] border-t border-[#17343A]/10 relative overflow-hidden" 
      aria-labelledby="faq-heading"
    >
      {/* Left Edge Asset: shakes-assets-nobg (Animated entrance + scroll parallax) */}
      <motion.div 
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 0.95, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: leftY, rotate: leftRotate }}
        className="pointer-events-none absolute -left-28 sm:-left-36 md:-left-44 lg:-left-52 xl:-left-64 top-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px] xl:w-[660px] h-[600px] sm:h-[700px] lg:h-[800px] z-0 select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/shakes-assets-nobg.png"
          alt=""
          fill
          className="object-contain object-left drop-shadow-2xl"
          priority={false}
        />
      </motion.div>

      {/* Right Edge Asset: shake-asset-nobg (Animated entrance + scroll parallax) */}
      <motion.div 
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 0.95, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ y: rightY, rotate: rightRotate }}
        className="pointer-events-none absolute -right-24 sm:-right-32 md:-right-40 lg:-right-48 xl:-right-56 top-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[540px] xl:w-[600px] h-[600px] sm:h-[700px] lg:h-[800px] z-0 select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/shake-asset-nobg.png"
          alt=""
          fill
          className="object-contain object-right drop-shadow-2xl"
          priority={false}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <Badge variant="default" className="mb-3 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#55C5D5]" />
            Frequently Asked Questions
          </Badge>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-[#17343A] tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-[#3D585E] max-w-2xl mx-auto leading-relaxed">
            Have questions about our protein shakes, botanical energy teas, custom ingredients, or pickup in Pembroke Pines? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#17343A]/10 overflow-hidden shadow-xs transition-all duration-200 hover:border-[#55C5D5]/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#17343A]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#55C5D5]/20 text-[#17343A]" : "bg-[#FDF9F3] text-[#3D585E]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#3D585E] leading-relaxed border-t border-[#17343A]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
