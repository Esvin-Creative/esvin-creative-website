"use client";

import { motion } from "framer-motion";
import SketchHighlight from "./SketchHighlight";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your requirements and defining project goals." },
  { num: "02", title: "Planning", desc: "Architecture design, technology selection, and roadmap creation." },
  { num: "03", title: "Development", desc: "Iterative building with regular updates and continuous integration." },
  { num: "04", title: "Launch", desc: "Rigorous testing, optimization, and seamless deployment." },
  { num: "05", title: "Support", desc: "Ongoing maintenance, monitoring, and feature enhancements." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white text-black overflow-hidden relative">
      
      <div className="absolute top-24 left-10 opacity-30">
        <img src="/assets/navigation-arrow-with-broken-line-svgrepo-com.svg" className="w-48 h-48" alt="" />
      </div>
      <div className="absolute bottom-10 right-20 opacity-20 hidden md:block">
        <img src="/assets/sparkles-drawn.svg" className="w-24 h-24 animate-wobble" style={{ animationDelay: '0.8s' }} alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            <SketchHighlight color="blue">Our Process</SketchHighlight>
          </h2>
          <p className="mt-4 text-black/80 text-xl max-w-2xl mx-auto font-sketch">
            A systematic, engineering-driven approach to delivering reliable software.
          </p>
        </motion.div>

        <div className="relative">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white sketch-border sketch-shadow p-6 group"
              >
                <div className="h-16 w-16 rounded-full bg-transparent flex items-center justify-center text-black font-sketch font-bold text-2xl mb-6 relative z-10">
                  <img src="/assets/circle-drawn.svg" className="absolute inset-0 w-full h-full opacity-60" alt="" />
                  <span className="relative z-10 group-hover:scale-110 transition-transform">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-black/70 text-lg leading-relaxed font-sketch">
                  {step.desc}
                </p>

                {/* Arrow to next step - visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-0 opacity-50">
                    <img src="/assets/rotated-right-arrow-svgrepo-com.svg" className="w-10 h-10" alt="" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
