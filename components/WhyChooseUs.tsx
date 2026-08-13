"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, CloudCog, HeadphonesIcon, Blocks } from "lucide-react";
import SketchHighlight from "./SketchHighlight";

const reasons = [
  { title: "End-to-End Development", icon: <Blocks size={24} strokeWidth={1.5} /> },
  { title: "Modern Technology Stack", icon: <Zap size={24} strokeWidth={1.5} /> },
  { title: "AI-First Thinking", icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
  { title: "Cloud Migration Capabilities", icon: <CloudCog size={24} strokeWidth={1.5} /> },
  { title: "Competitive Pricing", icon: <CheckCircle2 size={24} strokeWidth={1.5} /> },
  { title: "After-Deployment Support", icon: <HeadphonesIcon size={24} strokeWidth={1.5} /> },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-t-2 border-dashed border-black relative">
      <div className="absolute right-5 top-5 opacity-30">
         <img src="/assets/icons/question-sign-hand-drawn-outline-svgrepo-com.svg" className="w-16 h-16" alt="" />
      </div>
      <div className="absolute left-10 bottom-20 opacity-20 hidden md:block">
        <img src="/assets/icons/sparkles-drawn.svg" className="w-20 h-20 animate-wobble" style={{ animationDelay: '0.3s' }} alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
              <SketchHighlight color="pink">Why Choose EC</SketchHighlight>
            </h2>
            <p className="mt-4 text-black/80 text-xl font-sketch leading-relaxed">
              We don&apos;t just write code. We partner with you to build scalable, high-performance systems with exceptional design.
            </p>
          </motion.div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white sketch-border sketch-shadow relative group"
              >
                <img src="/assets/icons/star-drawn.svg" className="absolute -top-3 -right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" alt="" />
                <div className="flex-shrink-0 h-12 w-12 rounded-full border-2 border-dashed border-black flex items-center justify-center text-black">
                  {reason.icon}
                </div>
                <span className="text-xl font-bold text-black">{reason.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
