"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface TypingEffectProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

export default function TypingEffect({
  text,
  delay = 0,
  className,
  speed = 0.05,
}: TypingEffectProps) {
  const characters = Array.from(text);

  return (
    <span className={clsx("inline", className)}>
      {characters.map((char, index) => (
        char === " " ? (
          <span key={`space-${index}`}>{" "}</span>
        ) : (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.1, delay: delay + index * speed }}
          >
            {char}
          </motion.span>
        )
      ))}
    </span>
  );
}
