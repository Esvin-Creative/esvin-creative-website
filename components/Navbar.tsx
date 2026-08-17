"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b-2 border-dashed border-black py-2.5 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center py-1 group">
          <Image
            src="/logos/icon.png"
            alt="Esvin Creative"
            width={120}
            height={80}
            priority
            className="h-8 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold font-ultra text-black hover:text-black/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-base font-bold font-ultra text-black bg-highlight-yellow sketch-border sketch-shadow hover:bg-white transition-colors"
          >
            Start Your Project
          </Link>
        </nav>

        
        <button
          className="md:hidden text-black p-2 flex items-center justify-center w-10 h-10 rounded sketch-border bg-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <Cross1Icon className="w-5 h-5" /> : <HamburgerMenuIcon className="w-5 h-5" />}
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-dashed border-black py-6 px-6 flex flex-col gap-3 items-center shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="inline-block py-2 text-xl font-bold font-ultra text-black hover:text-highlight-pink transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block text-center px-6 py-2.5 mt-2 text-lg font-bold font-ultra text-black bg-highlight-yellow sketch-border sketch-shadow hover:bg-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Your Project
          </Link>
        </motion.div>
      )}
    </header>
  );
}

