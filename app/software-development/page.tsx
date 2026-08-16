import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import AISearchBlocks from "@/components/AISearchBlocks";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Software Development Company Hyderabad | Esvin Creative",
  description: "Top software development company in Hyderabad. We build custom software, web applications, enterprise platforms, and scalable SaaS solutions.",
  keywords: ["software development company hyderabad", "custom software development", "web application development", "enterprise software development", "software consulting", "telangana", "india"],
  alternates: {
    canonical: "https://www.esvincreative.in/software-development",
  },
};

const serviceFaqs = [
  { question: "What types of custom software do you build?", answer: "We build a wide range of custom software including business platforms, internal operational tools, customer portals, and full-scale SaaS applications tailored to your specific business needs in Hyderabad and globally." },
  { question: "What is your web application development process?", answer: "Our web application development process is iterative and transparent. We start with discovery and architecture, move to agile development sprints, and conclude with rigorous testing and deployment on scalable cloud infrastructure." },
  { question: "Do you offer enterprise software development?", answer: "Yes, we specialize in enterprise software development. We architect secure, highly available systems that integrate seamlessly with your existing enterprise architecture and databases." },
  { question: "Do you provide software consulting before development?", answer: "Absolutely. Our software consulting phase is crucial for understanding your operational bottlenecks, selecting the right technology stack, and creating a scalable roadmap before any code is written." },
  { question: "Will we own the source code?", answer: "Yes, upon project completion and final payment, you will have full ownership of the custom software source code and intellectual property." }
];

const aiSearchBlocks = [
  {
    question: "What is Esvin Creative's software development service?",
    answer: "Esvin Creative is a Hyderabad-based software development company built around a React, Next.js, and Node.js stack. We design and engineer custom software, web applications, enterprise platforms, and SaaS products, taking ownership from architecture through deployment rather than handing off a spec."
  },
  {
    question: "Who typically hires Esvin Creative for software development?",
    answer: "Enterprises replacing fragmented internal tools, growing businesses digitizing manual workflows, and startups building a first SaaS product engage this service when they need software scoped and engineered around their specific operations rather than adapted from an off-the-shelf platform."
  },
  {
    question: "What makes Esvin Creative's approach to custom software different?",
    answer: "We stay engaged past the initial build: the same team that architects the system also handles sprints, testing, and deployment to cloud infrastructure, so there's no handoff gap between design decisions and the code that ships."
  },
  {
    question: "What outcomes can clients expect?",
    answer: "Clients can expect a working web application or internal tool delivered in iterative sprints, full ownership of the source code, and an architecture built to absorb new features without a rewrite."
  }
];

export default function SoftwareDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
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
    "serviceType": "Custom Software Development"
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
        "name": "Software Development"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="service-schema" data={serviceSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      
      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Software <SketchHighlight color="pink">Development</SketchHighlight> Services
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            As a leading software development company in Hyderabad, we engineer custom software, scalable web applications, and enterprise platforms that drive digital transformation.
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50 mb-10">
            <span>Authored by: Esvin Joshua</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-yellow hover:text-black transition-colors text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-ultra text-black mb-12">Building Digital Foundations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl font-ultra text-black/80 leading-relaxed mb-6">
                Off-the-shelf software rarely fits perfectly. We provide <strong>software consulting</strong> and build <strong>custom software</strong> tailored exactly to your operational workflows and business objectives.
              </p>
              <p className="text-xl font-ultra text-black/80 leading-relaxed">
                Whether you need robust <strong>business platforms</strong>, streamlined <strong>internal systems</strong>, engaging <strong>customer portals</strong>, or full-scale <strong>SaaS development</strong>, our engineering team in India delivers solutions architected for performance and scale.
              </p>
            </div>
            <div className="bg-highlight-pink/20 p-8 sketch-border sketch-shadow">
              <h3 className="text-2xl font-bold font-ultra text-black mb-6">Our Core Services</h3>
              <ul className="space-y-4">
                {["Web Applications", "Internal Tools", "SaaS Platforms", "API Development", "System Integrations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-ultra text-black">
                    <span className="w-2 h-2 bg-black rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 md:px-12 bg-gray-50 border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-ultra text-black mb-8">Why Custom Software?</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2">Competitive Advantage</h3>
                  <p className="text-lg font-ultra text-black/70">Unique digital experiences and automated workflows that your competitors cannot easily replicate.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2">Infinite Scalability</h3>
                  <p className="text-lg font-ultra text-black/70">Enterprise software development designed to grow alongside your business without licensing limitations.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2">Seamless Integration</h3>
                  <p className="text-lg font-ultra text-black/70">Connecting fragmented tools into unified web applications for single sources of truth.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold font-ultra text-black mb-8">Our Engineering Process</h2>
              <div className="space-y-6">
                {[
                  { title: "Discovery", desc: "Understanding requirements, mapping workflows, and technology consulting." },
                  { title: "Architecture", desc: "Designing secure, scalable database and system infrastructure." },
                  { title: "Sprints", desc: "Iterative web application development with regular stakeholder reviews." },
                  { title: "Deployment", desc: "Rigorous testing and seamless deployment to cloud environments." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white sketch-border sketch-shadow">
                    <div className="text-2xl font-bold font-ultra text-highlight-blue">{i + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold font-ultra text-black">{step.title}</h3>
                      <p className="text-black/70 font-ultra">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AISearchBlocks title="AI Overview: Custom Software Development" blocks={aiSearchBlocks} />
      
      
      <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">See Our Work</h2>
          <p className="text-xl font-ultra text-black/70 mb-8">Explore how we've applied our software development expertise for real clients, with more case studies in progress.</p>
          <Link href="/portfolio" className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform">
            View Our Portfolio
          </Link>
        </div>
      </section>

      <FAQ title="Software Development FAQs" faqs={serviceFaqs} />

      
      <section className="py-24 bg-highlight-pink border-t-2 border-dashed border-black text-center px-6 relative overflow-hidden">
        <div className="absolute left-10 top-10 opacity-30">
          <Image src="/assets/icons/star-drawn.svg" alt="" width={60} height={60} className="w-16 h-16 animate-wobble" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Build Your Next Platform
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Partner with a top software development company in Telangana to bring your technical vision to life.
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
