"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, BrainCircuit, Code2 } from "lucide-react";
import SketchHighlight from "./SketchHighlight";

const services = [
  {
    title: "Web Development",
    description: "Modern websites, portals, dashboards, and custom web applications.",
    icon: <Monitor size={32} strokeWidth={1.5} />,
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform applications for Android, iOS, and Web.",
    icon: <Smartphone size={32} strokeWidth={1.5} />,
  },
  {
    title: "AI Solutions",
    description: "AI integrations, automation workflows, OCR systems, chatbots, and intelligent software.",
    icon: <BrainCircuit size={32} strokeWidth={1.5} />,
  },
  {
    title: "Custom Software",
    description: "Tailored solutions designed around specific operational needs.",
    icon: <Code2 size={32} strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-10 w-24 h-24 opacity-40">
        <img src="/assets/candle-with-burning-flame-hand-drawn-outline-svgrepo-com.svg" alt="" />
      </div>
      <div className="absolute bottom-40 left-10 w-32 h-32 opacity-20 hidden md:block">
        <img src="/assets/sparkles-drawn.svg" className="animate-wobble" alt="" />
      </div>
      <div className="absolute top-40 right-20 w-24 h-24 opacity-20 hidden md:block">
        <img src="/assets/sparkles-drawn.svg" className="animate-wobble" style={{ animationDelay: '0.5s' }} alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Our Services
            <img src="/assets/underline-drawn.svg" className="absolute -bottom-6 left-0 w-full h-8 opacity-70 text-highlight-pink" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,183,178,1))' }} alt="" />
          </h2>
          <p className="mt-4 text-xl text-black/80 max-w-2xl mx-auto font-sketch">
            We deliver robust technical solutions engineered to solve complex problems and scale alongside your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white sketch-border sketch-shadow group"
            >
              <div className="h-16 w-16 mb-6 flex items-center justify-center text-black sketch-border-dashed rounded-full group-hover:bg-highlight-blue transition-colors">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-black mb-3 relative inline-block">
                {service.title}
                <img src="/assets/asterisk-drawn.svg" className="absolute -right-8 -top-2 w-6 h-6 opacity-40" alt="" />
              </h3>
              <p className="text-black/70 leading-relaxed text-lg font-sketch">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
