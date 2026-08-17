"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your requirements, technical constraints, and defining project goals." },
  { num: "02", title: "Planning", desc: "Architecture design, technology selection, and scoping a clear technical roadmap." },
  { num: "03", title: "Development", desc: "Iterative sprints with regular updates, continuous testing, and working software early." },
  { num: "04", title: "Launch", desc: "Rigorous testing, optimization, and seamless deployment to cloud infrastructure." },
  { num: "05", title: "Support", desc: "Post-launch monitoring, ongoing maintenance, and feature enhancements as you scale." },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const updateScrollDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const paddingOffset = windowWidth < 768 ? 32 : 64;
        const distance = Math.max(0, trackWidth - windowWidth + paddingOffset);
        setScrollDistance(distance);
      }
    };

    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);
    return () => window.removeEventListener("resize", updateScrollDistance);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={targetRef} id="process" className="relative h-[380vh] md:h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-20 -left-16 md:-left-8 opacity-30 hidden sm:block">
          <Image src="/assets/icons/navigation-arrow-with-broken-line-svgrepo-com.svg" alt="Dashed navigation arrow decorative graphic" width={192} height={192} className="w-48 h-48" />
        </div>
        
        <div className="pl-4 sm:pl-6 md:pl-12 relative z-10 w-full flex flex-col justify-center h-full">
          <div className="mb-6 sm:mb-10 md:mb-12 mt-6 md:mt-12 shrink-0 pr-4">
            <h2 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-2 sm:mb-4 md:mb-6">
              Our Process
              <Image src="/assets/icons/underline-drawn.svg" alt="Hand drawn underline emphasis graphic" width={200} height={24} className="absolute -bottom-3 sm:-bottom-4 -left-[5%] w-[110%] h-5 sm:h-6 opacity-50" />
            </h2>
            <p className="mt-2 sm:mt-4 text-black/80 text-sm sm:text-base md:text-xl max-w-2xl font-ultra">
              A systematic, engineering-driven approach to delivering reliable software.
            </p>
          </div>

          <div className="w-full overflow-visible">
            <motion.div 
              ref={trackRef}
              style={{ x }} 
              className="flex gap-6 sm:gap-10 md:gap-20 w-max items-center pr-8 sm:pr-16 md:pr-32"
            >
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  style={{ zIndex: steps.length - index }}
                  className="relative bg-white sketch-border sketch-shadow p-5 sm:p-7 md:p-8 flex-shrink-0 w-[82vw] max-w-[360px] sm:max-w-none sm:w-[380px] md:w-[450px] min-h-[290px] sm:min-h-[320px] md:h-[350px] flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-transparent flex items-center justify-center text-black font-ultra font-bold text-xl sm:text-2xl mb-3 sm:mb-6 relative z-10">
                      <Image src="/assets/icons/circle-drawn.svg" alt="Hand drawn circle highlighting step number" width={64} height={64} className="absolute inset-0 w-full h-full opacity-60" />
                      <span className="relative z-10 group-hover:scale-110 transition-transform">{step.num}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{step.title}</h3>
                    <p className="text-black/70 text-xs sm:text-sm md:text-lg leading-relaxed font-ultra">
                      {step.desc}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute -right-[2.2rem] sm:-right-[3.2rem] md:-right-[5.5rem] top-1/2 transform -translate-y-1/2 z-0 opacity-40 hidden sm:block">
                      <Image src="/assets/icons/rotated-right-arrow-svgrepo-com.svg" alt="Right arrow connecting process steps" width={64} height={64} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

