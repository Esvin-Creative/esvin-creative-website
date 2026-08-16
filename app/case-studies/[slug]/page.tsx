import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} | Case Study | Esvin Creative`,
    description: study.summary,
    alternates: {
      canonical: `https://www.esvincreative.in/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "image": ["https://www.esvincreative.in/logos/icon.png"],
    "author": {
      "@type": "Person",
      "name": "Esvin Joshua"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Esvin Creative",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.esvincreative.in/logos/icon.png"
      }
    },
    "datePublished": study.datePublished,
    "dateModified": study.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.esvincreative.in/case-studies/${study.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.esvincreative.in/case-studies" },
      { "@type": "ListItem", "position": 3, "name": study.title }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="article-schema" data={articleSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-40 pb-20 px-6 md:px-12 border-b-2 border-dashed border-black bg-highlight-pink/10">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-block mb-8 text-black/60 font-ultra hover:text-black transition-colors underline">
            &larr; Back to Case Studies
          </Link>
          <div className="inline-block px-3 py-1 bg-black text-white text-sm font-ultra uppercase tracking-wider sketch-border mb-6">
            {study.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-ultra text-black mb-6 leading-tight">
            <SketchHighlight color="pink">{study.title}</SketchHighlight>
          </h1>
          <p className="text-xl font-ultra text-black/70 mb-4">
            <strong>Client:</strong> {study.client}
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50">
            <span>Author: Esvin Joshua</span>
            <span>•</span>
            <span>Published: {new Date(study.datePublished).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="prose prose-lg max-w-none prose-headings:font-ultra prose-headings:font-bold prose-headings:text-black">
            <h2>Summary</h2>
            <p>{study.summary}</p>

            <h2>Technologies</h2>
            <ul>
              {study.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <h2>Results</h2>
            <div className="bg-highlight-yellow/20 p-6 sketch-border my-8">
              <ul className="m-0 space-y-2">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>✅ {outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          {study.projectUrl && (
            <a
              href={study.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform"
            >
              View Live Project ↗
            </a>
          )}
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
