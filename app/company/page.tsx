import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import LocalBusinessInfo from "@/components/LocalBusinessInfo";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Company | Esvin Creative",
  description: "Esvin Creative is a technology consulting and software engineering firm based in Hyderabad, India. Discover our mission and corporate information.",
  alternates: {
    canonical: "https://www.esvincreative.in/company",
  },
};

export default function CompanyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Company" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />


      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-black text-white text-sm font-ultra uppercase tracking-wider sketch-border mb-6">
            Corporate Profile
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            About the <SketchHighlight color="blue">Company</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            Esvin Creative is an end-to-end technology partner. We bridge the gap between high-level business strategy and deep technical execution.
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50">
            <span>Authored by: Esvin Joshua (Founder)</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-ultra text-black border-b-2 border-black pb-4 inline-block">Our Mission</h2>
              <p className="text-xl font-ultra text-black/80 leading-relaxed">
                Our mission is to eliminate the complexity of digital transformation. We believe that technology should accelerate your business, not hold it back. By taking full ownership of architecture, development, and infrastructure, we allow organizations to focus on their core competencies.
              </p>
            </div>

            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-ultra text-black border-b-2 border-black pb-4 inline-block">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Software Development", link: "/software-development" },
                  { name: "Mobile App Development", link: "/mobile-app-development" },
                  { name: "Cloud Infrastructure", link: "/cloud-infrastructure" },
                  { name: "Technology Consulting", link: "/technology-consulting" },
                ].map((service) => (
                  <Link key={service.name} href={service.link} className="flex items-center justify-between p-6 bg-gray-50 sketch-border hover:bg-highlight-yellow/20 transition-colors group">
                    <span className="text-xl font-bold font-ultra text-black">{service.name}</span>
                    <ArrowRightIcon className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-ultra text-black border-b-2 border-black pb-4 inline-block">Social Profiles</h2>
              <div className="flex flex-wrap gap-6">
                <a href="https://github.com/Esvin-Creative" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-black text-white font-ultra sketch-border hover:-translate-y-1 transition-transform">
                  <GitHubLogoIcon className="w-6 h-6" /> GitHub
                </a>
                
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-100 text-black/50 font-ultra sketch-border cursor-not-allowed" title="Coming Soon">
                  <LinkedInLogoIcon className="w-6 h-6" /> LinkedIn (Soon)
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-100 text-black/50 font-ultra sketch-border cursor-not-allowed" title="Coming Soon">
                  <InstagramLogoIcon className="w-6 h-6" /> Instagram (Soon)
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <LocalBusinessInfo />
              
              <div className="mt-8 bg-highlight-pink/20 p-8 sketch-border sketch-shadow text-center">
                <h3 className="text-2xl font-bold font-ultra text-black mb-4">Start a Project</h3>
                <p className="text-black/70 font-ultra mb-6">Looking for a technology partner?</p>
                <Link href="/contact" className="block w-full py-4 bg-black text-white font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
