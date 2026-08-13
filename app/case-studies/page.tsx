import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Case Studies | Esvin Creative",
  description: "Read our case studies to see how we solve complex technical challenges and deliver measurable business results.",
  alternates: {
    canonical: "https://esvincreative.in/case-studies",
  },
};

export default function CaseStudiesHubPage() {
 
  const caseStudies: any[] = [
   
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute right-10 top-32 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Case <SketchHighlight color="pink">Studies</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            Deep dives into how we tackle complex engineering problems, architect scalable systems, and drive operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {caseStudies.length === 0 ? (
            <div className="bg-white p-12 text-center sketch-border sketch-shadow max-w-3xl mx-auto">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Case Studies Coming Soon</h3>
              <p className="text-lg font-ultra text-black/60">
                We are currently documenting our recent projects. Check back soon for detailed breakdowns of our engineering process and results.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block">
                  <div className="h-full bg-white p-8 sketch-border sketch-shadow hover:-translate-y-2 transition-transform duration-300 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-highlight-pink sketch-border-b sketch-border-l z-0" />
                    <div className="relative z-10">
                      <div className="inline-block px-3 py-1 bg-black text-white text-sm font-ultra uppercase tracking-wider sketch-border mb-4">
                        {study.category}
                      </div>
                      <h2 className="text-3xl font-bold font-ultra text-black mb-8 group-hover:underline">
                        {study.title}
                      </h2>
                      <div className="flex items-center gap-2 text-black font-bold font-ultra text-lg">
                        Read Case Study <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
