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
  title: "Mobile App Development Company Hyderabad | Esvin Creative",
  description: "Expert mobile app development company in Hyderabad. We build high-performance iOS, Android, and cross-platform Flutter applications.",
  keywords: ["mobile app development company hyderabad", "android app development", "ios app development", "flutter development", "cross platform development", "telangana", "india"],
  alternates: {
    canonical: "https://esvincreative.in/mobile-app-development",
  },
};

const serviceFaqs = [
  { question: "Do you build both iOS and Android apps?", answer: "Yes, we provide both iOS app development and Android app development services. We build native experiences tailored to each platform's design guidelines." },
  { question: "What is cross-platform development?", answer: "Cross-platform development allows us to write a single codebase that runs on both iOS and Android. We use Flutter development to achieve native-like performance and beautiful UIs while significantly reducing development time and cost." },
  { question: "Do you help with app store publishing?", answer: "Absolutely. We manage the entire publishing process, including Google Play publishing, Apple App Store publishing, and providing ongoing store compliance support to ensure your app meets all guidelines." },
  { question: "How much does mobile app development cost?", answer: "Costs depend on features, platform choice (native vs cross-platform), and complexity. We offer transparent pricing structures and often recommend building an MVP first to validate your idea cost-effectively." },
  { question: "Will my app work on tablets and iPads?", answer: "Yes, all our mobile applications are designed with responsive layouts that automatically adapt and look stunning on smartphones, tablets, and iPads." }
];

const aiSearchBlocks = [
  {
    question: "What is Esvin Creative's mobile app development service?",
    answer: "Esvin Creative is a top-tier mobile app development company in Hyderabad, India, engineering robust iOS, Android, and cross-platform (Flutter) applications from UI/UX design through to App Store publishing."
  },
  {
    question: "Who is this mobile app development service for?",
    answer: "This service is for startups launching new mobile products, enterprises needing internal mobile tools, and businesses looking to engage customers directly on their smartphones with high-performance apps."
  },
  {
    question: "Why choose Esvin Creative for mobile apps?",
    answer: "Esvin Creative delivers native-like performance, exceptional UI/UX design, and end-to-end publishing support. Our expertise in Flutter development ensures rapid delivery across platforms without compromising quality."
  },
  {
    question: "What outcomes can clients expect?",
    answer: "Clients can expect highly rated, crash-free mobile applications, seamless approval in the Apple App Store and Google Play Store, and scalable codebases ready for future feature iterations."
  }
];

export default function MobileAppDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
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
    "serviceType": "Mobile Application Development"
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
        "name": "Mobile App Development"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute right-10 top-40 opacity-30">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-ultra text-black mb-8 leading-tight">
            Mobile App <SketchHighlight color="yellow">Development</SketchHighlight>
          </h1>
          <p className="text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-10">
            As a premier mobile app development company in Hyderabad, we engineer beautiful, scalable iOS and Android applications that users love.
          </p>
          <div className="flex items-center gap-4 text-sm font-ultra text-black/50 mb-10">
            <span>Authored by: Esvin Joshua</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms & Support Section */}
      <section className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-ultra text-black mb-8">Platforms We Master</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 sketch-border sketch-shadow">
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2 flex items-center gap-2">
                    <span className="text-highlight-pink text-3xl">•</span> iOS App Development
                  </h3>
                  <p className="text-lg font-ultra text-black/70">Native applications built for the Apple ecosystem, delivering seamless experiences across iPhones and iPads.</p>
                </div>
                <div className="bg-white p-6 sketch-border sketch-shadow">
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2 flex items-center gap-2">
                    <span className="text-highlight-blue text-3xl">•</span> Android App Development
                  </h3>
                  <p className="text-lg font-ultra text-black/70">Robust native Android applications optimized for performance across a diverse range of devices.</p>
                </div>
                <div className="bg-white p-6 sketch-border sketch-shadow">
                  <h3 className="text-2xl font-bold font-ultra text-black mb-2 flex items-center gap-2">
                    <span className="text-highlight-yellow text-3xl">•</span> Flutter Development (Cross-Platform)
                  </h3>
                  <p className="text-lg font-ultra text-black/70">Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase, drastically reducing time-to-market.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold font-ultra text-black mb-8">Publishing & Compliance</h2>
              <p className="text-xl font-ultra text-black/80 leading-relaxed mb-8">
                Building the app is only half the journey. Getting it approved and into users' hands requires navigating complex store policies. We handle it all for you.
              </p>
              
              <div className="space-y-4">
                {[
                  "Apple App Store publishing & guidelines",
                  "Google Play publishing & console management",
                  "Store compliance support and policy audits",
                  "App Store Optimization (ASO) basics",
                  "Crashlytics setup and error monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg font-ultra text-black">
                    <div className="w-6 h-6 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 md:px-12 bg-gray-50 border-y-2 border-dashed border-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-ultra text-black mb-12">The Esvin Creative Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-highlight-pink mx-auto mb-6 sketch-border flex items-center justify-center text-3xl">🚀</div>
              <h3 className="text-2xl font-bold font-ultra text-black mb-3">Stunning UI/UX</h3>
              <p className="text-black/70 font-ultra">Interface designs that captivate users and ensure high retention rates.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-highlight-blue mx-auto mb-6 sketch-border flex items-center justify-center text-3xl">⚡</div>
              <h3 className="text-2xl font-bold font-ultra text-black mb-3">High Performance</h3>
              <p className="text-black/70 font-ultra">Optimized animations and architecture for 60fps buttery-smooth experiences.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-highlight-yellow mx-auto mb-6 sketch-border flex items-center justify-center text-3xl">🛡️</div>
              <h3 className="text-2xl font-bold font-ultra text-black mb-3">Secure APIs</h3>
              <p className="text-black/70 font-ultra">Robust backend integrations protecting your user data at scale.</p>
            </div>
          </div>
        </div>
      </section>

      <AISearchBlocks title="AI Overview: Mobile App Development" blocks={aiSearchBlocks} />
      
      {/* Related Case Studies Placeholder */}
      <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">Related Case Studies</h2>
          <p className="text-xl font-ultra text-black/70 mb-8">Detailed case studies for this service are currently being documented.</p>
          <Link href="/case-studies" className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform">
            View All Case Studies
          </Link>
        </div>
      </section>

      <FAQ title="Mobile App FAQs" faqs={serviceFaqs} />

      {/* CTA Section */}
      <section className="py-24 bg-highlight-yellow border-t-2 border-dashed border-black text-center px-6 relative overflow-hidden">
        <div className="absolute right-10 top-10 opacity-30">
          <Image src="/assets/icons/star-drawn.svg" alt="" width={60} height={60} className="w-16 h-16 animate-wobble" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Launch Your App with Confidence
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Partner with India's leading mobile experts based in Telangana to build your next blockbuster application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-blue hover:text-black transition-colors w-full sm:w-auto">
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
