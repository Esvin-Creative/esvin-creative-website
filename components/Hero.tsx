"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SketchHighlight from "./SketchHighlight";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-subtle-grid min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <span className="font-sketch text-3xl md:text-4xl text-black">We are Esvin Creative</span>
          <img src="/assets/bars-graphic-up-hand-drawn-symbol-svgrepo-com.svg" alt="" className="absolute -right-16 -top-10 w-16 h-16 opacity-70" />
        </motion.div>

        <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight text-black max-w-5xl leading-tight">
          <img src="/assets/sparkles-drawn.svg" alt="" className="absolute -left-12 -top-12 w-20 h-20 opacity-80 animate-wobble" />
          <TypingEffect text="Custom Software Built To " speed={0.03} />
          <SketchHighlight color="yellow" delay={0.8}>
            <TypingEffect text="Move Businesses Forward." delay={0.8} speed={0.03} />
          </SketchHighlight>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 text-xl md:text-2xl text-black/80 max-w-3xl font-sketch"
        >
          Esvin Creative builds websites, mobile apps, and AI-powered solutions that help businesses operate, grow, and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative"
        >
          <img src="/assets/rotated-right-arrow-svgrepo-com.svg" alt="" className="absolute -left-20 -top-16 w-24 h-24 hidden md:block opacity-60" />
          <Link
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-black bg-white sketch-border sketch-shadow hover:bg-highlight-yellow transition-all"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="#services"
            className="flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-transparent sketch-border-dashed hover:bg-black/5 transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
