"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CodeIcon, TargetIcon, DesktopIcon, GearIcon } from "@radix-ui/react-icons";
import SketchHighlight from "./SketchHighlight";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const services = [
  {
    icon: <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />,
    title: "Software Development",
    description: "Custom software, enterprise platforms, internal tools, and SaaS products built for scale.",
    link: "/software-development"
  },
  {
    icon: <DesktopIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences for iOS and Android devices.",
    link: "/mobile-app-development"
  },
  {
    icon: <GearIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />,
    title: "Cloud Infrastructure",
    description: "Secure, scalable cloud architecture, AWS/GCP consulting, and robust DevOps practices.",
    link: "/cloud-infrastructure"
  },
  {
    icon: <TargetIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />,
    title: "Technology Consulting",
    description: "Strategic guidance for digital transformation, modernization, and technology audits.",
    link: "/technology-consulting"
  }
];

const getT = (p: number, totalCards: number) => {
  if (p >= 1) return totalCards - 0.01;
  const segment = 1 / totalCards; 
  const currentSegment = Math.floor(p / segment); 
  const pInSegment = (p % segment) / segment; 
  
  const readingRatio = 0.65; 
  
  if (pInSegment < readingRatio) {
    return currentSegment; 
  } else {
    const transitionP = (pInSegment - readingRatio) / (1 - readingRatio); 
    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    return currentSegment + easeInOut(transitionP);
  }
}

const Card = ({ 
  service, 
  index, 
  progress, 
  totalCards, 
  isMobile 
}: { 
  service: typeof services[0], 
  index: number, 
  progress: MotionValue<number>, 
  totalCards: number,
  isMobile: boolean
}) => {
  const stackOffset = isMobile ? 18 : 40;
  const shuffleHeight = isMobile ? 550 : 800;

  const yOffset = useTransform(progress, (p) => {
    const t = getT(p, totalCards);
    let pos = index - t;
    let cyclePos = ((pos % totalCards) + totalCards) % totalCards;
    
    const shuffleStart = totalCards - 1; 
    if (cyclePos > shuffleStart) {
      const shuffleProgress = totalCards - cyclePos;
      
      if (shuffleProgress < 0.5) {
        return -(shuffleProgress * 2) * shuffleHeight;
      } else {
        const downProgress = (shuffleProgress - 0.5) * 2; 
        return -shuffleHeight + (downProgress * (shuffleHeight + shuffleStart * stackOffset));
      }
    }
    
    return cyclePos * stackOffset; 
  });

  const scale = useTransform(progress, (p) => {
    const t = getT(p, totalCards);
    let pos = index - t;
    let cyclePos = ((pos % totalCards) + totalCards) % totalCards;
    
    const shuffleStart = totalCards - 1;
    if (cyclePos > shuffleStart) {
      const shuffleProgress = totalCards - cyclePos;
      if (shuffleProgress < 0.5) {
        return 1 - (shuffleProgress * 2 * 0.2); 
      } else {
        const downProgress = (shuffleProgress - 0.5) * 2;
        return 0.8 + (downProgress * (1 - (shuffleStart * 0.05) - 0.8)); 
      }
    }
    
    return 1 - (cyclePos * 0.05);
  });

  const rotate = useTransform(progress, (p) => {
    const t = getT(p, totalCards);
    let pos = index - t;
    let cyclePos = ((pos % totalCards) + totalCards) % totalCards;
    
    const shuffleStart = totalCards - 1;
    if (cyclePos > shuffleStart) {
      const shuffleProgress = totalCards - cyclePos;
      return Math.sin(shuffleProgress * Math.PI) * 15 * (index % 2 === 0 ? 1 : -1);
    }
    
    return (index % 2 === 0 ? 2 : -1.5) * cyclePos;
  });

  const zIndex = useTransform(progress, (p) => {
    const t = getT(p, totalCards);
    let pos = index - t;
    let cyclePos = ((pos % totalCards) + totalCards) % totalCards;
    
    const shuffleStart = totalCards - 1;
    if (cyclePos > shuffleStart) {
      const shuffleProgress = totalCards - cyclePos;
      if (shuffleProgress < 0.5) {
        return 50; 
      } else {
        return 0; 
      }
    }
    
    return Math.round(40 - cyclePos); 
  });

  return (
    <motion.div 
      style={{ zIndex }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full max-w-[650px] flex justify-center px-4 sm:px-6"
    >
      <motion.div
        style={{
          y: yOffset,
          scale,
          rotate,
        }}
        className="w-full max-w-[580px] bg-white sketch-border sketch-shadow p-5 sm:p-8 md:p-12 flex flex-col gap-4 sm:gap-6 md:gap-8 shadow-2xl pointer-events-auto"
      >
        <div className="flex items-center gap-3.5 sm:gap-5 md:gap-6 border-b-2 border-dashed border-black pb-3.5 sm:pb-5 md:pb-6 mb-1 sm:mb-2">
           <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0 flex items-center justify-center text-black sketch-border-dashed rounded-full bg-highlight-pink/30">
             {service.icon}
           </div>
           <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black font-sans tracking-tight leading-tight">
             {service.title}
           </h3>
        </div>
        <p className="text-black/80 leading-relaxed text-sm sm:text-base md:text-2xl font-ultra flex-grow">
          {service.description}
        </p>
        <div className="pt-2 sm:pt-4 md:pt-6 mt-auto">
          <Link href={service.link} className="inline-flex items-center gap-2 text-sm sm:text-base md:text-xl font-bold font-ultra text-black hover:text-highlight-pink transition-colors group">
            Explore Service <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={targetRef} id="services" className="relative h-[350vh] md:h-[400vh] bg-[#f8fafc]">
      <div className="sticky top-0 h-screen flex flex-col justify-between md:justify-center items-center overflow-hidden py-14 md:py-0">
        
        <div className="relative md:absolute md:top-20 text-center w-full z-0 px-4 sm:px-6 max-w-4xl mx-auto shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tight mb-2 sm:mb-4 md:mb-6">
            <SketchHighlight color="pink">What We Do</SketchHighlight>
          </h2>
          <p className="text-xs sm:text-base md:text-xl font-ultra text-black/70 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end technology solutions tailored to your organization's unique challenges.
            <span className="hidden sm:inline"> From architecting scalable cloud infrastructure to engineering high-performance mobile applications and enterprise software, our team acts as your dedicated technical partner.</span>
          </p>
        </div>

        <div className="relative w-full h-[54vh] sm:h-[58vh] md:h-[60vh] max-w-5xl mx-auto flex items-center justify-center">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              service={service} 
              index={index} 
              progress={scrollYProgress} 
              totalCards={services.length}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="md:hidden text-center text-[11px] text-black/40 font-ultra pb-2">
          Scroll to explore services ↓
        </div>
      </div>
    </section>
  );
}

