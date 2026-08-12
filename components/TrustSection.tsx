"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SketchHighlight from "./SketchHighlight";

export default function TrustSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            <SketchHighlight color="pink">Worked with Organizations</SketchHighlight>
          </h2>
          <p className="mt-4 text-black/70 text-xl font-sketch">Delivering robust technical solutions for leading institutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute -top-16 -left-16 opacity-40">
            <img src="/assets/loop-arrows-svgrepo-com.svg" className="w-32 h-32" alt="" />
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-30 hidden md:block z-0">
            <img src="/assets/sparkles-drawn.svg" className="w-24 h-24 animate-wobble" alt="" />
          </div>
          <div className="absolute top-1/2 -left-20 opacity-20 hidden md:block z-0">
            <img src="/assets/sparkles-drawn.svg" className="w-20 h-20 animate-wobble" style={{ animationDelay: '1.2s' }} alt="" />
          </div>

          {/* Sreyas Institute Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-white sketch-border sketch-shadow transition-all"
          >
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 text-black font-bold text-2xl sketch-border-dashed">
              S
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Sreyas Institute of Engineering & Technology</h3>
            <p className="text-black/80 mb-6 text-lg font-sketch leading-relaxed">
              Development and technical solutions delivered for one of Hyderabad&apos;s leading engineering institutions.
            </p>
            <a
              href="https://sreyas.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-md font-bold text-black hover:underline"
            >
              Visit Website <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Placeholder 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-white sketch-border sketch-shadow transition-all"
          >
            <div className="absolute top-6 right-6 px-3 py-1 bg-highlight-yellow text-black text-sm font-bold sketch-border-dashed rotate-3">
              Ongoing
            </div>
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 text-black sketch-border-dashed">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Educational Platform</h3>
            <p className="text-black/80 mb-6 text-lg font-sketch leading-relaxed">
              A comprehensive learning management system tailored for interactive remote education.
            </p>
            <span className="inline-flex items-center gap-2 text-md font-bold text-black/50">
              In Development
            </span>
          </motion.div>

          {/* Placeholder 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-white sketch-border sketch-shadow transition-all"
          >
            <div className="absolute top-6 right-6 px-3 py-1 bg-highlight-blue text-black text-sm font-bold sketch-border-dashed -rotate-3">
              Ongoing
            </div>
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 text-black sketch-border-dashed">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Mobile Application Project</h3>
            <p className="text-black/80 mb-6 text-lg font-sketch leading-relaxed">
              Cross-platform Flutter application integrating real-time services and user management.
            </p>
            <span className="inline-flex items-center gap-2 text-md font-bold text-black/50">
              In Development
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
