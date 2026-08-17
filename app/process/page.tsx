import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | Esvin Creative",
  description: "How Esvin Creative runs a project from discovery through ongoing support — the five-stage engineering process behind every engagement.",
  alternates: {
    canonical: "https://www.esvincreative.in/process",
  },
};

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Every engagement starts with understanding the actual problem, not just the requested feature list. We map current workflows, technical constraints, and business goals with your team before any architecture decisions are made. For consulting-led engagements, this stage includes a technology audit of the existing codebase, infrastructure, and costs.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "Architecture and technology selection happen here: database design, service boundaries, third-party integrations, and the cloud environment (AWS, GCP, or Vercel) the project will run on. You receive a scope of work, timeline, and price before development begins — the same proposal-first process described on the Pricing page.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Iterative sprints with regular check-ins, not a black-box handoff. Timelines scale with scope — an MVP typically runs 2-3 months, while larger enterprise or digital-infrastructure projects run 6 months to over a year. You see working software early rather than waiting for a single final delivery.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Testing, performance checks, and deployment to production cloud infrastructure, followed by app store or domain/hosting configuration where relevant. The same engineers who built the system handle deployment, so there's no separate hand-off team interpreting someone else's architecture.",
  },
  {
    num: "05",
    title: "Support",
    desc: "Every package includes a complimentary post-launch window (30 to 90 days depending on scope) covering monitoring, bug fixes, and performance checks. Beyond that, we offer ongoing service-level agreements for continued development, monitoring, and feature enhancements as the system needs to scale.",
  },
];

export default function ProcessPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Process" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-ultra text-black mb-4 sm:mb-8 leading-tight">
            Our <SketchHighlight color="blue">Process</SketchHighlight>
          </h1>
          <p className="text-lg sm:text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed">
            A systematic, engineering-driven approach to delivering reliable software — the same five stages, whether the engagement is a Launch-tier website or a full digital-infrastructure rebuild.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-12">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-10 bg-white sketch-border sketch-shadow p-6 sm:p-8 md:p-10">
              <div className="text-3xl sm:text-5xl font-bold font-ultra text-black/20 shrink-0">{step.num}</div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-ultra text-black mb-2 sm:mb-4">{step.title}</h2>
                <p className="text-sm sm:text-base md:text-lg font-ultra text-black/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-highlight-blue border-t-2 border-dashed border-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-ultra text-black mb-4 sm:mb-6">
            Ready to start Discovery?
          </h2>
          <p className="text-base sm:text-xl font-ultra text-black/80 mb-8 sm:mb-10">
            Schedule a consultation and we'll scope the project together.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3.5 sm:px-8 sm:py-4 bg-black text-white text-lg sm:text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
