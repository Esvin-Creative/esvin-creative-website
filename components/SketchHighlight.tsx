"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SketchHighlightProps {
  children: ReactNode;
  color?: "yellow" | "blue" | "pink";
  delay?: number;
  className?: string;
}

const colorMap = {
  yellow: "rgba(253, 253, 150, 0.6)",
  blue: "rgba(174, 198, 207, 0.6)",
  pink: "rgba(255, 183, 178, 0.6)",
};

export default function SketchHighlight({
  children,
  color = "yellow",
  delay = 0,
  className,
}: SketchHighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 70%" }}
      whileInView={{ backgroundSize: "100% 70%" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(to right, ${colorMap[color]}, ${colorMap[color]})`,
        backgroundPosition: "0 80%",
        backgroundRepeat: "no-repeat",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        borderRadius: "10px 30px 10px 40px",
      }}
      className={clsx("relative inline text-black", className)}
    >
      {children}
    </motion.span>
  );
}
