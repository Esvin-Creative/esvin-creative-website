import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import PortfolioCard, { PortfolioItem } from "@/components/PortfolioCard";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Our Portfolio & Work | Esvin Creative",
  description: "Explore our portfolio of custom software, mobile apps, and digital platforms built for organizations globally.",
  alternates: {
    canonical: "https://www.esvincreative.in/portfolio",
  },
};



const portfolioItems: PortfolioItem[] = caseStudies.map((study) => ({
  name: study.title,
  client: study.client,
  category: study.category,
  technologies: study.technologies,
  summary: study.summary,
  outcomes: study.outcomes,
  projectUrl: study.projectUrl,
  slug: study.slug,
}));

export default function PortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30 hidden sm:block">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-ultra text-black mb-4 sm:mb-8 leading-tight">
            Our <SketchHighlight color="yellow">Portfolio</SketchHighlight>
          </h1>
          <p className="text-lg sm:text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-6 sm:mb-10">
            A showcase of the custom software, platforms, and digital experiences we've engineered for our partners.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gray-50">
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
