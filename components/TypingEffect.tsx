"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface TypingEffectProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number; // duration per character
}

export default function TypingEffect({
  text,
  delay = 0,
  className,
  speed = 0.05,
}: TypingEffectProps) {
  const characters = Array.from(text);

  return (
    <span className={clsx("inline-block", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.1, delay: delay + index * speed }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
