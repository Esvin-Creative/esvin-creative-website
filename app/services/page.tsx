import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Services | Esvin Creative",
  description: "Explore our comprehensive suite of technology services including software development, mobile apps, cloud infrastructure, and tech consulting.",
  alternates: {
    canonical: "https://www.esvincreative.in/services",
  },
};

export default function ServicesHubPage() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software, enterprise platforms, internal tools, and SaaS products built for scale.",
      link: "/software-development",
      color: "bg-highlight-pink"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences for iOS and Android devices.",
      link: "/mobile-app-development",
      color: "bg-highlight-yellow"
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud architecture, AWS/GCP consulting, and robust DevOps practices.",
      link: "/cloud-infrastructure",
      color: "bg-highlight-blue"
    },
    {
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation, modernization, and technology audits.",
      link: "/technology-consulting",
      color: "bg-highlight-pink"
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Services" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute right-10 top-32 opacity-30 hidden sm:block">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-ultra text-black mb-4 sm:mb-8 leading-tight">
            Our <SketchHighlight color="pink">Services</SketchHighlight>
          </h1>
          <p className="text-lg sm:text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed">
            We are a full-stack technology partner. From conceptualizing architecture to developing platforms and managing cloud infrastructure, we deliver end-to-end solutions.
          </p>
          <p className="text-sm sm:text-xl font-ultra text-black/70 max-w-3xl leading-relaxed mt-4 sm:mt-6">
            Every engagement is run by the same team end to end: the engineers who scope the architecture also write the code, configure the cloud infrastructure, and stay on for support after launch. That means no handoff gap between the people who make the technical decisions and the people who ship them — across a Next.js, React, Node.js, and Flutter stack, deployed on AWS, Google Cloud Platform, and Vercel. Each service below covers a distinct part of that work; most engagements combine two or three of them into one project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.link} className="group block">
                <div className="h-full bg-white p-6 sm:p-8 sketch-border sketch-shadow hover:-translate-y-2 transition-transform duration-300 relative">
                  <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 ${service.color} sketch-border-b sketch-border-l z-0`} />
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold font-ultra text-black mb-3 sm:mb-4 group-hover:underline">
                      {service.title}
                    </h2>
                    <p className="text-base sm:text-xl font-ultra text-black/70 mb-6 sm:mb-8">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-black font-bold font-ultra text-base sm:text-lg">
                      Explore Service <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-highlight-yellow border-t-2 border-dashed border-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-ultra text-black mb-4 sm:mb-6">
            Ready to start a project?
          </h2>
          <p className="text-base sm:text-xl font-ultra text-black/80 mb-8 sm:mb-10">
            Let's discuss how we can partner to build your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 sm:px-8 sm:py-4 bg-black text-white text-lg sm:text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors w-full sm:w-auto">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
