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
  yellow: "bg-highlight-yellow",
  blue: "bg-highlight-blue",
  pink: "bg-highlight-pink",
};

export default function SketchHighlight({
  children,
  color = "yellow",
  delay = 0,
  className,
}: SketchHighlightProps) {
  return (
    <span className={clsx("relative inline-block whitespace-nowrap", className)}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        style={{ transformOrigin: "left center", borderRadius: "10px 30px 10px 40px" }}
        className={clsx(
          "absolute left-0 top-[40%] h-[70%] w-[102%] z-0 opacity-60 rotate-[-1deg]",
          colorMap[color]
        )}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
