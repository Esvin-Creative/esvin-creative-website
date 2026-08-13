"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  "Next.js", "TypeScript", "Tailwind CSS", "React",
  "Flutter", "Firebase", "Google Cloud", 
  "Python", "PostgreSQL", "Docker", "Kubernetes", "OpenAI"
];

export default function TechStack() {
  return (
    <section className="py-20 bg-subtle-grid border-t-2 border-dashed border-black overflow-hidden relative">
      <div className="absolute right-10 top-20 opacity-30 hidden md:block">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={112} height={112} className="w-28 h-28 animate-wobble" />
      </div>
      <div className="absolute left-10 bottom-10 opacity-30 hidden md:block">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={80} height={80} className="w-20 h-20 animate-wobble" style={{ animationDelay: '1s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Powered By Modern Technologies
            <Image src="/assets/icons/underline-drawn.svg" alt="Drawn underline decorative element" width={200} height={24} className="absolute -bottom-4 -left-[5%] w-[110%] h-6 opacity-50" />
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-white sketch-border sketch-shadow text-black font-bold text-lg hover:bg-highlight-pink transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
