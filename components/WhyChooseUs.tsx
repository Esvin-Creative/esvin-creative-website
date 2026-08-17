"use client";

import { motion } from "framer-motion";
import { CheckCircledIcon, LockClosedIcon, LightningBoltIcon, GearIcon, ChatBubbleIcon, CubeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import SketchHighlight from "./SketchHighlight";

const reasons = [
  {
    title: "Proven Track Record",
    description: "Delivering high-quality solutions for enterprises and startups alike.",
    icon: <CheckCircledIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-pink"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security protocols integrated from day one.",
    icon: <LockClosedIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-blue"
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance for exceptional user experiences.",
    icon: <LightningBoltIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-yellow"
  },
  {
    title: "Cloud Native",
    description: "Scalable architecture built on AWS and Google Cloud.",
    icon: <GearIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-pink"
  },
  {
    title: "24/7 Support",
    description: "Dedicated engineering team ready when you need them.",
    icon: <ChatBubbleIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-blue"
  },
  {
    title: "Modular Design",
    description: "Component-driven architecture for rapid iteration.",
    icon: <CubeIcon className="w-8 h-8 text-black" />,
    color: "bg-highlight-yellow"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white border-t-2 border-dashed border-black relative">
      <div className="absolute right-5 top-5 opacity-30">
         <Image src="/assets/icons/question-sign-hand-drawn-outline-svgrepo-com.svg" alt="Question mark decorative graphic" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="absolute left-10 bottom-20 opacity-20 hidden md:block">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={80} height={80} className="w-20 h-20 animate-wobble" style={{ animationDelay: '0.3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-4 md:mb-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6">
              <SketchHighlight color="pink">Why Choose EC</SketchHighlight>
            </h2>
            <p className="mt-2 sm:mt-4 text-black/80 text-base sm:text-xl font-ultra leading-relaxed">
              We don&apos;t just write code. We partner with you to build scalable, high-performance systems with exceptional design.
            </p>
          </motion.div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 bg-white sketch-border sketch-shadow relative group"
              >
                <Image src="/assets/icons/star-drawn.svg" alt="Star hover effect graphic" width={32} height={32} className="absolute -top-3 -right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-dashed border-black flex items-center justify-center text-black">
                  {reason.icon}
                </div>
                <span className="text-base sm:text-xl font-bold text-black">{reason.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
