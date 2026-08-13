import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Script from "next/script";



export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const isPlaceholder = true;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study Title Placeholder",
    "author": {
      "@type": "Person",
      "name": "Esvin Joshua"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Esvin Creative",
      "logo": {
        "@type": "ImageObject",
        "url": "https://esvincreative.in/assets/icons/logo-placeholder.svg"
      }
    },
    "datePublished": "2024-01-01T08:00:00+08:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="pt-40 pb-20 px-6 md:px-12 border-b-2 border-dashed border-black bg-highlight-pink/10">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-block mb-8 text-black/60 font-ultra hover:text-black transition-colors underline">
            &larr; Back to Case Studies
          </Link>
          <div className="inline-block px-3 py-1 bg-black text-white text-sm font-ultra uppercase tracking-wider sketch-border mb-6">
            Project Category
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-ultra text-black mb-6 leading-tight">
            Case Study <SketchHighlight color="pink">Title</SketchHighlight>
          </h1>
          <p className="text-xl font-ultra text-black/70 mb-4">
            <strong>Client:</strong> Client Name
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50">
            <span>Author: Esvin Joshua</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="prose prose-lg max-w-none prose-headings:font-ultra prose-headings:font-bold prose-headings:text-black">
            <h2>Challenge</h2>
            <p>We detail the core problem the client was facing before engaging Esvin Creative, focusing on operational bottlenecks or technical limitations.</p>

            <h2>Discovery</h2>
            <p>Our research, auditing, and technology consulting phase, designed to uncover the root cause of the challenge.</p>

            <h2>Solution</h2>
            <p>The high-level architecture and strategic solutions proposed to solve the challenge.</p>

            <h2>Technologies</h2>
            <ul>
              <li>Core Framework</li>
              <li>Database Architecture</li>
              <li>Cloud Infrastructure</li>
            </ul>

            <h2>Implementation</h2>
            <p>A walk through of the execution phase, detailing how we built the solution and what hurdles were overcome during development.</p>

            <h2>Results</h2>
            <div className="bg-highlight-yellow/20 p-6 sketch-border my-8">
              <ul className="m-0 space-y-2">
                <li>✅ <strong>Outcome 1:</strong> Description of the measurable result</li>
                <li>✅ <strong>Outcome 2:</strong> Description of the measurable result</li>
                <li>✅ <strong>Outcome 3:</strong> Description of the measurable result</li>
              </ul>
            </div>

            <h2>Lessons Learned</h2>
            <p>Insights the engineering team gained from this project that can be applied to future builds.</p>

            <h2>Next Steps</h2>
            <p>How the client is continuing to evolve the platform, and the ongoing support Esvin Creative is providing.</p>
          </div>

        </div>
      </section>

      <section className="py-24 bg-highlight-blue border-t-2 border-dashed border-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">
            Facing a Similar Challenge?
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Let's discuss how we can engineer a custom solution for your organization.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
