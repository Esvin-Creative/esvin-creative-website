import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import PortfolioCard, { PortfolioItem } from "@/components/PortfolioCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Portfolio & Work | Esvin Creative",
  description: "Explore our portfolio of custom software, mobile apps, and digital platforms built for organizations globally.",
  alternates: {
    canonical: "https://www.esvincreative.in/portfolio",
  },
};

const portfolioItems: PortfolioItem[] = [
  {
    name: "Sreyas Institute of Engineering and Technology",
    client: "Sreyas Institute of Engineering and Technology",
    category: "Educational Institution Website",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    summary: "Complete digital presence overhaul for a leading engineering college. We architected and developed a fast, accessible, and scalable web platform to serve prospective students, current faculty, and administrative staff.",
    outcomes: [
      "Improved page load speeds",
      "Increased mobile engagement",
      "Streamlined admissions inquiry pipeline"
    ],
    projectUrl: "https://sreyas.ac.in",
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Our <SketchHighlight color="yellow">Portfolio</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            A showcase of the custom software, platforms, and digital experiences we've engineered for our partners.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-16">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
