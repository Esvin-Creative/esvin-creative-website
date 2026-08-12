"use client";

import { motion } from "framer-motion";
import SketchHighlight from "./SketchHighlight";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute right-10 bottom-10 opacity-40">
        <img src="/assets/question-sign-hand-drawn-outline-svgrepo-com.svg" className="w-32 h-32" alt="" />
      </div>
      <div className="absolute left-10 top-20 opacity-30 hidden md:block">
        <img src="/assets/sparkles-drawn.svg" className="w-24 h-24 animate-wobble" alt="" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            <SketchHighlight color="yellow">Built By Engineers.</SketchHighlight>
          </h2>
          <div className="text-2xl md:text-3xl text-black/80 leading-relaxed font-sketch">
            Esvin Creative is a software studio focused on creating practical, scalable, and modern digital products. 
            <br /><br />
            We combine engineering, design, and AI to deliver solutions that solve real business problems.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
