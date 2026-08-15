"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import SketchHighlight from "@/components/SketchHighlight";


export default function ContactConfirmedPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pt-40 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center overflow-hidden">
        <Image src="/assets/icons/speech-bubble-drawn.svg" alt="" width={100} height={100} className="absolute top-20 right-10 md:right-32 opacity-60 animate-wobble" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
            Thank you for <SketchHighlight color="yellow">Reaching out!</SketchHighlight>
          </h1>
          <p className="text-2xl md:text-3xl font-ultra text-black/80 leading-relaxed max-w-3xl mx-auto">
            Our engineering team will review your requirements and reach out shortly.
          </p>
          <button
            className="mt-8 px-8 py-3 bg-white sketch-border sketch-shadow text-black font-bold text-xl hover:bg-highlight-yellow transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
