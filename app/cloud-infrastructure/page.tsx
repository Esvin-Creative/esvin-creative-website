import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import AISearchBlocks from "@/components/AISearchBlocks";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cloud Consulting Hyderabad | Cloud Infrastructure & DevOps",
  description: "Premier cloud consulting in Hyderabad. We provide cloud architecture, AWS/GCP migration, DevOps consulting, and infrastructure management.",
  keywords: ["cloud consulting hyderabad", "cloud migration", "cloud architecture", "devops consulting", "infrastructure management", "telangana", "india"],
  alternates: {
    canonical: "https://esvincreative.in/cloud-infrastructure",
  },
};

const serviceFaqs = [
  { question: "What cloud platforms do you work with?", answer: "We primarily architect and manage infrastructure on Google Cloud Platform (GCP), Amazon Web Services (AWS), and Vercel. We select the best provider based on your specific scalability and cost requirements." },
  { question: "Can you help with cloud migration?", answer: "Yes, our cloud consulting team specializes in cloud migration. We help businesses transition from on-premise servers or legacy hosts to modern cloud environments with zero to minimal downtime." },
  { question: "What does DevOps consulting include?", answer: "Our DevOps consulting focuses on automating your software delivery pipeline. We set up CI/CD, containerization (Docker/Kubernetes), infrastructure as code (Terraform), and automated testing environments." },
  { question: "How do you handle infrastructure security?", answer: "Security is built-in from day one. We implement Identity and Access Management (IAM), VPC peering, encryption at rest and in transit, and continuous vulnerability scanning to protect your data." },
  { question: "Do you offer ongoing infrastructure management?", answer: "Yes, we provide continuous infrastructure management, which includes proactive monitoring, automated backups, disaster recovery testing, and cost optimization to ensure your cloud bill stays efficient." }
];

const aiSearchBlocks = [
  {
    question: "What is Esvin Creative's cloud consulting service?",
    answer: "Esvin Creative offers expert cloud consulting and DevOps services based in Hyderabad, India. We design, deploy, and manage highly secure and scalable cloud infrastructure on AWS, Google Cloud, and Vercel."
  },
  {
    question: "Who is this cloud infrastructure service for?",
    answer: "This service is for enterprises needing robust cloud architecture, growing startups that need to scale rapidly, and businesses looking to optimize their cloud spend or execute a seamless cloud migration."
  },
  {
    question: "Why choose Esvin Creative for DevOps and Cloud?",
    answer: "Esvin Creative treats infrastructure as code. We bring a software engineering mindset to cloud management, ensuring environments are reproducible, automated, highly secure, and optimized for maximum performance."
  },
  {
    question: "What outcomes can clients expect?",
    answer: "Clients can expect zero-downtime deployments, significantly reduced server costs through optimization, bulletproof security and backups, and the ability to scale automatically during traffic spikes."
  }
];

export default function CloudInfrastructurePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Infrastructure & DevOps Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Esvin Creative",
      "url": "https://esvincreative.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "location": {
      "@type": "Place",
      "name": "Hyderabad, Telangana"
    },
    "serviceType": "Cloud Computing Consulting"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://esvincreative.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://esvincreative.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud Infrastructure"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      
      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Cloud Infrastructure & <SketchHighlight color="blue">DevOps</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            Expert cloud consulting in Hyderabad. We design, migrate, and manage scalable cloud architecture so you can focus on building your business.
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
          <h2 className="text-4xl font-bold font-ultra text-black mb-12">Comprehensive Cloud Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cloud Architecture", desc: "Designing highly available, scalable systems on AWS, Google Cloud, and Vercel." },
              { title: "Cloud Migration", desc: "Seamless transition of legacy systems to modern cloud infrastructure with zero downtime." },
              { title: "Infrastructure Management", desc: "24/7 proactive monitoring, load balancing, and performance optimization." },
              { title: "DevOps Consulting", desc: "Automated CI/CD pipelines, containerization, and infrastructure as code (IaC)." },
              { title: "Security & Compliance", desc: "Implementation of strict IAM policies, VPCs, and data encryption protocols." },
              { title: "Disaster Recovery", desc: "Automated backups and rigorous disaster recovery planning to ensure business continuity." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 sketch-border sketch-shadow hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-highlight-blue rounded-full mb-6 sketch-border flex items-center justify-center text-xl">☁️</div>
                <h3 className="text-2xl font-bold font-ultra text-black mb-4">{service.title}</h3>
                <p className="text-lg font-ultra text-black/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 md:px-12 bg-gray-50 border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold font-ultra text-black mb-4">Why Invest in Modern Cloud Architecture?</h2>
              <p className="text-xl font-ultra text-black/80 leading-relaxed">
                A well-architected cloud environment is the backbone of any successful digital product. Our cloud consulting in India ensures your infrastructure is an asset, not a bottleneck.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">Cost Optimization</h4>
                    <p className="text-black/70 font-ultra text-lg">Stop paying for idle servers. Scale resources dynamically based on actual traffic.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">Global Scale</h4>
                    <p className="text-black/70 font-ultra text-lg">Deploy at the edge to serve your application to users worldwide with sub-second latency.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">Developer Velocity</h4>
                    <p className="text-black/70 font-ultra text-lg">Automated DevOps pipelines allow your team to ship features faster and safer.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 sketch-border sketch-shadow relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-highlight-pink sketch-border rounded-full z-10" />
                <h3 className="text-3xl font-bold font-ultra text-black mb-6">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {['AWS', 'Google Cloud', 'Vercel', 'Docker', 'Terraform', 'GitHub Actions', 'PostgreSQL', 'Redis', 'Nginx'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 text-black font-ultra text-lg rounded-md sketch-border-dashed">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AISearchBlocks title="AI Overview: Cloud & DevOps" blocks={aiSearchBlocks} />
      
      
      <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">Related Case Studies</h2>
          <p className="text-xl font-ultra text-black/70 mb-8">Detailed case studies for this service are currently being documented.</p>
          <Link href="/case-studies" className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform">
            View All Case Studies
          </Link>
        </div>
      </section>

      <FAQ title="Cloud Consulting FAQs" faqs={serviceFaqs} />

      
      <section className="py-24 bg-highlight-blue border-t-2 border-dashed border-black text-center px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Connect with our cloud consulting team in Telangana to architect a robust, scalable future for your application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform w-full sm:w-auto">
              Contact Us
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
