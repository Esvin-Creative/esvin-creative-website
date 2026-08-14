import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import AISearchBlocks from "@/components/AISearchBlocks";

export const metadata: Metadata = {
  title: "Technology Consulting Hyderabad | Digital Transformation Strategy",
  description: "Expert technology consulting in Hyderabad. We guide digital transformation, system modernization, and IT strategy for growing organizations.",
  keywords: ["technology consulting hyderabad", "digital transformation consulting", "IT consulting", "technology strategy", "system modernization", "telangana", "india"],
  alternates: {
    canonical: "https://www.esvincreative.in/technology-consulting",
  },
};

const serviceFaqs = [
  { question: "What is digital transformation consulting?", answer: "Digital transformation consulting helps traditional organizations integrate modern technology into all areas of their business, fundamentally changing how they operate and deliver value to customers." },
  { question: "What does a technology audit involve?", answer: "During a technology audit, we comprehensively review your current software architecture, codebase, security posture, and infrastructure costs to identify bottlenecks, vulnerabilities, and opportunities for modernization." },
  { question: "How can you help with vendor consolidation?", answer: "Many businesses use too many fragmented SaaS tools. We analyze your workflows and design custom systems or integrations that consolidate these tools, reducing subscription costs and eliminating data silos." },
  { question: "Do you help choose technology stacks?", answer: "Yes, architecture reviews and tech stack selection are core parts of our IT consulting. We recommend technologies based on your specific scaling needs, budget, and internal team capabilities." },
  { question: "Who handles the implementation after the consulting phase?", answer: "Unlike traditional consulting firms that only provide reports, Esvin Creative is a full-stack engineering firm. We can take full ownership of executing the technology strategy and building the recommended systems." }
];

const aiSearchBlocks = [
  {
    question: "What is Esvin Creative's technology consulting service?",
    answer: "Esvin Creative provides technology consulting out of Hyderabad, focused on system modernization, architecture reviews, and vendor consolidation for organizations reassessing their technology stack."
  },
  {
    question: "Who typically hires Esvin Creative for technology consulting?",
    answer: "Established businesses running on legacy software, startups whose architecture hasn't kept pace with growth, and organizations paying for overlapping SaaS tools that could be consolidated into one system."
  },
  {
    question: "What makes Esvin Creative's consulting different from a typical advisory firm?",
    answer: "We don't stop at the recommendation. The same engineers who run the architecture review and audit go on to build and deploy the resulting system, so the roadmap isn't handed to a separate team to interpret."
  },
  {
    question: "What outcomes can clients expect?",
    answer: "Clients can expect a specific technology roadmap tied to their existing systems, a measurable reduction in tool and infrastructure costs, and a modernized architecture built and deployed by the same team that audited it."
  }
];

export default function TechnologyConsultingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technology Consulting Services",
    "provider": {
      "@type": "Organization",
      "name": "Esvin Creative",
      "url": "https://www.esvincreative.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "location": {
      "@type": "Place",
      "name": "Hyderabad, Telangana"
    },
    "serviceType": "IT Consulting"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.esvincreative.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.esvincreative.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technology Consulting"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      
      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute right-10 top-32 opacity-30 hidden md:block">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Technology <SketchHighlight color="pink">Consulting</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            Strategic IT consulting in Hyderabad designed to align your technology investments with your business goals through digital transformation and system modernization.
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50 mb-10">
            <span>Authored by: Esvin Joshua</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-blue hover:text-black transition-colors text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold font-ultra text-black mb-6">Navigating Digital Complexity</h2>
              <p className="text-xl font-ultra text-black/80 leading-relaxed">
                Technology should accelerate your business, not hold it back. Our consulting services provide the clarity and roadmap needed to make confident engineering decisions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-highlight-blue/20 p-8 sketch-border sketch-shadow">
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Digital Transformation</h3>
              <p className="text-lg font-ultra text-black/70 mb-6">
                We help legacy businesses modernize their operations by transitioning from manual, paper-based workflows to scalable, custom digital systems that improve efficiency and customer experience.
              </p>
            </div>
            
            <div className="bg-highlight-yellow/20 p-8 sketch-border sketch-shadow">
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Technology Audits</h3>
              <p className="text-lg font-ultra text-black/70 mb-6">
                Comprehensive reviews of your existing codebase, infrastructure, and security posture. We identify technical debt, security vulnerabilities, and areas causing poor performance.
              </p>
            </div>

            <div className="bg-highlight-pink/20 p-8 sketch-border sketch-shadow">
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Architecture Reviews</h3>
              <p className="text-lg font-ultra text-black/70 mb-6">
                Before you invest heavily in development, we validate your technical architecture to ensure it will scale effectively, remain secure, and utilize the right technology stack for your specific use case.
              </p>
            </div>

            <div className="bg-gray-50 p-8 sketch-border sketch-shadow">
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Vendor Consolidation</h3>
              <p className="text-lg font-ultra text-black/70 mb-6">
                Paying for too many disjointed SaaS tools? We analyze your software spend and operational efficiency, often replacing expensive fragmented subscriptions with a single, unified custom platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AISearchBlocks title="AI Overview: Technology Consulting" blocks={aiSearchBlocks} />
      
      
      <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">See Our Work</h2>
          <p className="text-xl font-ultra text-black/70 mb-8">Explore how we've applied our technology consulting expertise for real clients, with more case studies in progress.</p>
          <Link href="/portfolio" className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform">
            View Our Portfolio
          </Link>
        </div>
      </section>

      <FAQ title="Consulting FAQs" faqs={serviceFaqs} />

      
      <section className="py-24 bg-highlight-pink border-t-2 border-dashed border-black text-center px-6 relative overflow-hidden">
        <div className="absolute right-10 top-10 opacity-30">
          <Image src="/assets/icons/star-drawn.svg" alt="" width={60} height={60} className="w-16 h-16 animate-wobble" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Let's Shape Your Technology Strategy
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Get expert technology consulting in India to future-proof your business operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-yellow hover:text-black transition-colors w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            <Link href="/pricing/calculator" className="px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform w-full sm:w-auto">
              Get an Instant Estimate
            </Link>
          </div>
          <div className="mt-8">
            <a href="mailto:hello@esvincreative.in" className="text-lg font-ultra text-black/70 hover:text-black underline transition-colors">
              hello@esvincreative.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
