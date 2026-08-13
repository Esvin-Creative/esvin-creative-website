"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SketchHighlight from "./SketchHighlight";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-subtle-grid min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <span className="font-ultra text-3xl md:text-4xl text-black">We are Esvin Creative</span>
          <Image src="/assets/icons/bars-graphic-up-hand-drawn-symbol-svgrepo-com.svg" alt="Hand drawn upward bars graphic representing growth" width={64} height={64} className="absolute -right-16 -top-10 opacity-70" />
        </motion.div>

        <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="Hand drawn sparkles graphic representing creativity" width={80} height={80} className="absolute -left-12 -top-12 opacity-80 animate-wobble" priority />
          <motion.span 
            initial={{ opacity: 1 }} 
            animate={{ opacity: 0.6 }} 
            transition={{ delay: 1.6, duration: 1 }}
          >
            <TypingEffect text="Custom Software Built To " speed={0.03} />
          </motion.span>
          
          <SketchHighlight color="yellow" delay={1.25}>
            <motion.span 
              initial={{ opacity: 1 }} 
              animate={{ opacity: 0.6 }} 
              transition={{ delay: 1.6, duration: 1 }}
              className="inline-block"
            >
              <TypingEffect text="Move Businesses&nbsp;" delay={0.75} speed={0.03} />
            </motion.span>
            
            <span className="relative inline-block text-black">
              <TypingEffect text="Forward." delay={1.25} speed={0.03} />
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 2200 800" 
                className="absolute -right-[15%] -top-[40%] w-[130%] h-[180%] opacity-70 pointer-events-none"
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M1136 719c-183.3-3.2-366-25-546-59.7a1894.8 1894.8 0 0 1-186.9-44c-52.6-16-105.5-34.8-151.3-66-31.2-23.1-65.8-42.5-91.1-72.8-51.6-56-55.7-137.1-2.2-193.5 61.2-64 150.8-89.7 233.5-113.6 118.3-32.7 240.9-42.7 362-57.7C1083.5 57 1427 73.3 1747 170c-11.7-5.7-5.7-17.6 5.5-12a3350 3350 0 0 1 30.3 24.2c13.2 4.2 26 9.4 39 14.4 95.4 38.6 253.7 112.3 258 230.2-1.9 111-194.4 170.1-282.6 199.2-81.6 24.4-165.4 39.6-248 60.5-135.7 27.7-274.9 34.7-413.2 32.5Zm-61.1-24c133.1 3.5 266.5-2.5 398.9-17.5 51.3-6.4 102.6-13.6 153.4-23.5a770 770 0 0 0 170.4-70c-168.5 51-344.3 73-519.3 85.8-179.1 11-359.2 11.9-538-4 110.9 15.7 222.6 25.8 334.6 29.3Zm-178.5-32.2c191.7 6 384 0 574.3-24.7 124.8-16.3 249.5-39.7 368.5-81.3 95.9-68 162.5-184.4 47-271l-48-40.8c-33.6-13-68.2-23.3-102.8-33.4-3.5 3.5-9.3 1-11.4-3-139-39.9-283.5-53.3-427.5-60.3-247.7-11-496.5 10.7-739.8 58A1909.1 1909.1 0 0 0 388 248c-24.4 8-48.8 16.1-72.5 26-18 11.4-35 24.2-51.4 37.7-38 32.4-76.3 77.4-69.5 130.8 7 14.5 16.7 27.6 27.8 39.3 155.2 149 467.1 171.3 674 181Zm942.2-88.6a638 638 0 0 1-104.4 56c90.5-24.4 295.9-83.4 326.1-179.8 29-120.2-155.9-208-246.8-243.2 11.3 9 22 19.1 33.7 27.6 21.9 8 43 17.7 64.1 27.7 32.3 16 63.5 35.2 89.7 60.2 59.4 54.8 57.6 125.7-8.6 173.8-28.6 22-61.5 37.5-94.4 51.8-19.5 9.3-42 13.2-59.4 25.9ZM254 532.2a640.1 640.1 0 0 0 54.3 27 365.2 365.2 0 0 1-93.3-65c10.8 14.5 23 29.3 39 38Zm1651.3-248c98.3 78 58.8 185-23.5 256.5 206.6-78.5 185.6-195.9-3.3-279.2l26.8 22.7ZM195.5 491.6c-13.3-21.5-16.3-46.8-24-70.4-16-79.6 66.5-128.3 129-155 96.8-59.8 205.1-98.7 315.4-125.7-128.1 17.6-410 59.6-469.4 186.4-29.2 58.5 1.5 126.2 49 164.7Zm-8.8-107.1-.7 3.6c11.5-29.3 32-53.8 55-74.8-24.5 17.2-48.1 41-54.3 71.2ZM397 229.4c-5.3 2.3-10.5 4.8-15.6 7.5 143-43 291-66.3 439.2-83.8a2987.2 2987.2 0 0 1 519.8-14.3c-193.6-22.1-389.2-28-583.5-12.5-45 3.6-88.9 15.6-132.7 25.6A1235.4 1235.4 0 0 0 397 229.4Zm1336.8-31.2c25.6 7 51.1 14.5 76.2 23.2l-34-28c-20-6.9-40-13.6-60.4-19.3a1814 1814 0 0 0-135.3-34.2 2254.7 2254.7 0 0 0-695.7-33.4c196.8-6.7 394 7.8 588.6 37.5 36.4 5.8 72.7 12.1 109 19 50.9 8.8 104.7 12.5 151.6 35.2Z" 
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="10"
                  initial={{ pathLength: 0, fillOpacity: 0 }}
                  animate={{ pathLength: 1, fillOpacity: 1 }}
                  transition={{ 
                    pathLength: { delay: 1.6, duration: 1, ease: "easeInOut" },
                    fillOpacity: { delay: 2.2, duration: 0.5, ease: "easeIn" }
                  }}
                />
              </motion.svg>
            </span>
          </SketchHighlight>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 text-xl md:text-2xl text-black/80 max-w-3xl font-ultra"
        >
          Esvin Creative builds websites, mobile apps, and AI-powered solutions that help businesses operate, grow, and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative"
        >
          <Image src="/assets/icons/rotated-right-arrow-svgrepo-com.svg" alt="Hand drawn right arrow pointing to schedule consultation" width={96} height={96} className="absolute -left-20 -top-16 hidden md:block opacity-60" />
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
