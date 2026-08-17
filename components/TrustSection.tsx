"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon, ImageIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import SketchHighlight from "./SketchHighlight";

export default function TrustSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  return (
    <section className="py-20 bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Worked with Organizations
            <Image src="/assets/icons/underline-drawn.svg" alt="Hand drawn underline emphasis" width={200} height={24} className="absolute -bottom-4 -left-[5%] w-[110%] h-6 opacity-50" />
          </h2>
          <p className="mt-4 text-black/70 text-xl font-ultra">Delivering robust technical solutions for leading institutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute -top-16 -left-16 opacity-40 hidden sm:block">
            <Image src="/assets/icons/loop-arrows-svgrepo-com.svg" alt="Looping arrows decorative graphic" width={128} height={128} className="w-32 h-32" />
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-30 hidden md:block z-0">
            <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={96} height={96} className="w-24 h-24 animate-wobble" />
          </div>
          <div className="absolute top-1/2 -left-20 opacity-20 hidden md:block z-0">
            <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={80} height={80} className="w-20 h-20 animate-wobble" style={{ animationDelay: '1.2s' }} />
          </div>

          
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 sm:p-8 bg-white sketch-border sketch-shadow transition-all flex flex-col h-full"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 text-black font-bold text-xl sm:text-2xl sketch-border-dashed">
              S
            </div>
            <div className="absolute inset-0 bg-highlight-yellow translate-x-2 translate-y-2 border-2 border-black -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Sreyas Institute of Engineering & Technology</h3>
            <p className="text-black/80 mb-4 sm:mb-6 text-base sm:text-lg font-ultra leading-relaxed flex-grow">
              Development and technical solutions delivered for one of Hyderabad&apos;s leading engineering institutions.
            </p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <button 
                onClick={() => setActiveDemo('sreyas')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black text-white text-xs sm:text-sm font-bold hover:bg-highlight-yellow hover:text-black transition-colors sketch-border"
              >
                <ImageIcon className="w-3.5 h-3.5" /> View Samples
              </button>
              <a 
                href="https://sreyas.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-white text-black text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors sketch-border"
              >
                Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 sm:p-8 bg-white sketch-border sketch-shadow transition-all flex flex-col h-full"
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-highlight-yellow text-black text-xs sm:text-sm font-bold sketch-border-dashed rotate-3">
              Ongoing
            </div>
            <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 text-black sketch-border-dashed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Educational Platform</h3>
            <p className="text-black/80 mb-4 sm:mb-6 text-base sm:text-lg font-ultra leading-relaxed flex-grow">
              A comprehensive learning management system tailored for interactive remote education.
            </p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-black/50">
                In Development
              </span>
            </div>
          </motion.div>

          
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 sm:p-8 bg-white sketch-border sketch-shadow transition-all flex flex-col h-full"
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-highlight-blue text-black text-xs sm:text-sm font-bold sketch-border-dashed -rotate-3">
              Ongoing
            </div>
            <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 text-black sketch-border-dashed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">BYF App</h3>
            <p className="text-black/80 mb-4 sm:mb-6 text-base sm:text-lg font-ultra leading-relaxed flex-grow">
              A worship management platform for organizations, helping streamline member management and communication.
            </p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <button
                onClick={() => setActiveDemo('byf')}
                className="inline-flex w-fit items-center gap-1.5 px-3.5 py-1.5 bg-black text-white text-xs sm:text-sm font-bold hover:bg-highlight-blue hover:text-black transition-colors sketch-border"
              >
                <ImageIcon className="w-3.5 h-3.5" /> View Samples
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeDemo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveDemo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white sketch-border sketch-shadow p-5 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveDemo(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1.5 sm:p-2 bg-black text-white hover:bg-highlight-pink hover:text-black transition-colors sketch-border z-10"
              >
                <Cross1Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 border-black/10 pb-4 pr-10">
                {activeDemo === 'sreyas' ? 'Sreyas Institute Demo' : 
                 activeDemo === 'edu' ? 'Educational Platform Demo' : 
                 'BYF App Demo'}
              </h3>
              
              <div className={`grid gap-6 ${activeDemo === 'byf' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className={`${activeDemo === 'byf' ? 'aspect-[9/16]' : 'aspect-[4/3]'} bg-gray-50 sketch-border flex flex-col items-center justify-center overflow-hidden group relative`}>
                    <ImageIcon className="text-gray-200 w-16 h-16 absolute z-0" />
                    <span className="text-gray-400 mt-24 font-ultra absolute z-0 text-center px-4">Sample Image {num}</span>
                    <Image 
                      src={`/assets/work_demo/${activeDemo}_${num}.webp`} 
                      fill
                      className="object-cover relative z-10 opacity-0 transition-opacity duration-300" 
                      alt={`${activeDemo} project sample ${num}`} 
                      onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
