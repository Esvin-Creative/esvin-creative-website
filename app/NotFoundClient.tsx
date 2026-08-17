"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import {
  ArrowLeft,
  Home,
  Search,
  Code2,
  Smartphone,
  Cloud,
  Layers,
  CircleDollarSign,
  PhoneCall,
  Sparkles,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

interface QuickLink {
  title: string;
  desc: string;
  href: string;
  icon: typeof Code2;
  color: "yellow" | "blue" | "pink";
  category: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "Software Development",
    desc: "Custom web applications, APIs, and scalable distributed systems.",
    href: "/software-development",
    icon: Code2,
    color: "yellow",
    category: "Services",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps for iOS and Android with Flutter.",
    href: "/mobile-app-development",
    icon: Smartphone,
    color: "blue",
    category: "Services",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Secure, highly available GCP & AWS cloud architectures.",
    href: "/cloud-infrastructure",
    icon: Cloud,
    color: "pink",
    category: "Services",
  },
  {
    title: "Engineering Process",
    desc: "Our 6-phase methodology from discovery to long-term scale.",
    href: "/process",
    icon: Layers,
    color: "yellow",
    category: "Company",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, predictable pricing models tailored to your requirements.",
    href: "/pricing",
    icon: CircleDollarSign,
    color: "blue",
    category: "Pricing",
  },
  {
    title: "Contact Engineering",
    desc: "Schedule a consultation with our technology leads in Hyderabad.",
    href: "/contact",
    icon: PhoneCall,
    color: "pink",
    category: "Contact",
  },
];

export default function NotFoundClient() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = quickLinks.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white relative flex flex-col justify-between selection:bg-highlight-yellow">
      <Navbar />

      
      <section className="relative pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-6xl mx-auto text-center w-full">
        
        <div className="absolute top-24 left-6 md:left-12 opacity-40 pointer-events-none hidden sm:block">
          <Image
            src="/assets/icons/sparkles-drawn.svg"
            alt="Sparkles decorative graphic"
            width={70}
            height={70}
            className="animate-wobble"
          />
        </div>
        <div className="absolute top-28 right-8 md:right-16 opacity-35 pointer-events-none hidden sm:block">
          <Image
            src="/assets/icons/telescope-hand-drawn-filled-tool-svgrepo-com.svg"
            alt="Telescope graphic"
            width={75}
            height={75}
          />
        </div>
        <div className="absolute bottom-8 left-10 opacity-20 pointer-events-none hidden md:block">
          <Image
            src="/assets/icons/question-sign-hand-drawn-outline-svgrepo-com.svg"
            alt="Question mark graphic"
            width={60}
            height={60}
          />
        </div>
        <div className="absolute bottom-12 right-12 opacity-25 pointer-events-none hidden md:block">
          <Image
            src="/assets/icons/loop-arrows-svgrepo-com.svg"
            alt="Loop arrows graphic"
            width={85}
            height={85}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-highlight-yellow sketch-border sketch-shadow text-black font-ultra text-sm md:text-base font-bold uppercase tracking-wider mb-6 -rotate-1 hover:rotate-0 transition-transform">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            HTTP Status: 404 &bull; Destination Missing
          </div>

          
          <div className="relative inline-block mb-6">
            <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-bold text-black tracking-tighter leading-none select-none font-ultra">
              404
            </h1>
            <Image
              src="/assets/icons/underline-drawn.svg"
              alt="Underline graphic"
              width={260}
              height={24}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 opacity-70"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 max-w-3xl mx-auto">
            Looks like this page got lost in{" "}
            <SketchHighlight color="pink">deployment</SketchHighlight>.
          </h2>

          <p className="text-xl sm:text-2xl font-ultra text-black/75 leading-relaxed max-w-2xl mx-auto mb-10">
            The URL you requested doesn't exist, was relocated, or took an unexpected detour.
            Don't worry — our systems are up and we'll get you right back on track.
          </p>

          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xl font-bold font-ultra text-black bg-highlight-yellow sketch-border sketch-shadow hover:bg-white transition-all group"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Return Home
            </Link>

            <button
              onClick={() => router.back()}
              type="button"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xl font-bold font-ultra text-black bg-white sketch-border sketch-shadow hover:bg-highlight-blue transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xl font-bold font-ultra text-black bg-highlight-pink/70 sketch-border sketch-shadow hover:bg-highlight-pink transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              Report Issue
            </Link>
          </div>
        </motion.div>
      </section>

      
      <section className="relative py-20 bg-subtle-grid border-t-2 border-dashed border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-black/60" />
              <span className="text-base font-bold font-ultra uppercase tracking-widest text-black/60">
                Quick Navigation Directory
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Popular Destinations &amp; Services
            </h3>

            
            <div className="max-w-md mx-auto mt-6 relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter pages (e.g. cloud, mobile, pricing)..."
                  className="w-full pl-11 pr-10 py-3 text-lg font-ultra text-black bg-white sketch-border sketch-shadow focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/40"
                />
                <Search className="w-5 h-5 text-black/50 absolute left-3.5 pointer-events-none" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 p-1 text-black/50 hover:text-black text-sm font-bold"
                    aria-label="Clear search"
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredLinks.length > 0 ? (
                filteredLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex flex-col justify-between h-full bg-white sketch-border sketch-shadow p-6 hover:-translate-y-1 transition-all relative overflow-hidden"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className={`w-12 h-12 flex items-center justify-center sketch-border ${
                                item.color === "yellow"
                                  ? "bg-highlight-yellow"
                                  : item.color === "blue"
                                  ? "bg-highlight-blue"
                                  : "bg-highlight-pink"
                              }`}
                            >
                              <Icon className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-xs font-bold font-ultra px-2.5 py-1 bg-black/5 rounded uppercase tracking-wider text-black/70">
                              {item.category}
                            </span>
                          </div>

                          <h4 className="text-2xl font-bold text-black mb-2 flex items-center justify-between group-hover:text-black transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-base font-ultra text-black/70 leading-relaxed mb-6">
                            {item.desc}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-base font-bold font-ultra text-black pt-4 border-t border-dashed border-black/20 group-hover:translate-x-1 transition-transform">
                          <span>Explore</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-12 text-center bg-white sketch-border sketch-shadow p-8">
                  <p className="text-xl font-ultra text-black/70 mb-4">
                    No matching destinations found for "{searchQuery}".
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-lg font-bold font-ultra text-black bg-highlight-yellow sketch-border sketch-shadow"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Reset Search
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white sketch-border sketch-shadow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-highlight-yellow sketch-border flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/star-drawn.svg"
                  alt="Star icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-bold text-black">
                  Need direct assistance with an ongoing project?
                </h4>
                <p className="text-base md:text-lg font-ultra text-black/70">
                  Email us directly at{" "}
                  <a
                    href="mailto:hello@esvincreative.in"
                    className="underline hover:text-black font-bold"
                  >
                    hello@esvincreative.in
                  </a>{" "}
                  or contact our team directly.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="whitespace-nowrap px-6 py-3 text-lg font-bold font-ultra text-black bg-highlight-yellow sketch-border sketch-shadow hover:bg-white transition-all shrink-0"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
