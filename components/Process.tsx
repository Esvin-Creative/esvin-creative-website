"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your requirements and defining project goals." },
  { num: "02", title: "Planning", desc: "Architecture design, technology selection, and roadmap creation." },
  { num: "03", title: "Development", desc: "Iterative building with regular updates and continuous integration." },
  { num: "04", title: "Launch", desc: "Rigorous testing, optimization, and seamless deployment." },
  { num: "05", title: "Support", desc: "Ongoing maintenance, monitoring, and feature enhancements." },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); 

  return (
    <section ref={targetRef} id="process" className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-20 -left-16 md:-left-8 opacity-30">
          <Image src="/assets/icons/navigation-arrow-with-broken-line-svgrepo-com.svg" alt="Dashed navigation arrow decorative graphic" width={192} height={192} className="w-48 h-48" />
        </div>
        
        <div className="pl-6 md:pl-12 relative z-10 w-full flex flex-col justify-center h-full">
          <div className="mb-12 mt-12 shrink-0">
            <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
              Our Process
              <Image src="/assets/icons/underline-drawn.svg" alt="Hand drawn underline emphasis graphic" width={200} height={24} className="absolute -bottom-4 -left-[5%] w-[110%] h-6 opacity-50" />
            </h2>
            <p className="mt-4 text-black/80 text-xl max-w-2xl font-ultra">
              A systematic, engineering-driven approach to delivering reliable software.
            </p>
          </div>

          <div className="w-full overflow-visible">
            <motion.div style={{ x }} className="flex gap-16 md:gap-24 w-[250vw] md:w-[150vw]">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  style={{ zIndex: steps.length - index }}
                  className="relative bg-white sketch-border sketch-shadow p-8 flex-shrink-0 w-[85vw] md:w-[450px] h-[350px] flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-16 w-16 rounded-full bg-transparent flex items-center justify-center text-black font-ultra font-bold text-2xl mb-6 relative z-10">
                      <Image src="/assets/icons/circle-drawn.svg" alt="Hand drawn circle highlighting step number" width={64} height={64} className="absolute inset-0 w-full h-full opacity-60" />
                      <span className="relative z-10 group-hover:scale-110 transition-transform">{step.num}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-black/70 text-lg leading-relaxed font-ultra">
                      {step.desc}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute -right-[4.5rem] md:-right-[6.5rem] top-1/2 transform -translate-y-1/2 z-0 opacity-40">
                      <Image src="/assets/icons/rotated-right-arrow-svgrepo-com.svg" alt="Right arrow connecting process steps" width={64} height={64} className="w-16 h-16" />
                    </div>
                  )}
                </div>
              ))}
              {/* Padding to allow the last card to reach the center before unpinning */}
              <div className="w-[10vw] md:w-[30vw] flex-shrink-0"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
