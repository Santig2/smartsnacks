"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "MENU", href: "/menu" },
    { label: "ABOUT", href: "/#meet-the-crafter" },
    { label: "LOCATION", href: "/#location" },
    { label: "CONTACT", href: "/contact" },
  ];

  const headerBg = isHome && !isScrolled 
    ? "bg-transparent absolute w-full top-0" 
    : "bg-[#FDF9F3]/95 backdrop-blur-md border-b border-[#17343A]/10 sticky top-0";

  const textColor = isHome && !isScrolled ? "text-white" : "text-[#17343A]";
  const logoColor = isHome && !isScrolled ? "text-white" : "text-[#55C5D5]";

  return (
    <header className={`z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="group flex items-center justify-center select-none"
            aria-label="Smart Snack Nutrition - Home"
          >
            <div className={`relative transition-all duration-300 w-52 sm:w-64 h-16 sm:h-20 ${isHome && !isScrolled ? 'drop-shadow-md' : ''}`}>
              <Image 
                src="/assets/images/logo-smartsancks.png" 
                alt="Smart Snack Nutrition Logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-60 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Primary Action Button */}
            <Link
              href="/menu"
              className="ml-4 clay-btn-yellow inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-6 py-2.5"
            >
              Order Now
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-[#17343A] hover:bg-black/5'}`}
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="xl:hidden border-t border-[#17343A]/10 bg-[#FDF9F3] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold text-[#17343A] hover:text-[#55C5D5] py-2 border-b border-[#17343A]/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://jairoguerrero.herbalife.com/es-us/u/loyalty-premium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-between text-sm font-bold text-[#17343A] bg-white border border-[#17343A]/15 px-4 py-3 rounded-2xl mt-2 transition-colors"
            >
              <span>Shop Nutrition Products Online</span>
              <ExternalLink className="w-4 h-4 text-[#55C5D5]" aria-hidden="true" />
            </a>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/menu"
                className="w-full justify-center clay-btn-yellow inline-flex items-center font-bold px-6 py-3 uppercase tracking-wider mb-3 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Full Menu
              </Link>

              <Link
                href="/#location"
                className="w-full justify-center clay-btn-aqua inline-flex items-center font-bold px-6 py-3 uppercase tracking-wider rounded-full text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                Visit Store & Directions
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
