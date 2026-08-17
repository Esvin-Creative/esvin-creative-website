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
  title: "AWS Cloud Architecture & Migration Services Hyderabad | Esvin Creative",
  description: "AWS architecture design, migration, and cost optimization for businesses in Hyderabad and across India. VPC, IAM, Terraform-managed infrastructure, and ongoing AWS cost control.",
  keywords: ["aws architecture service providers in hyderabad", "aws consulting hyderabad", "aws migration services", "aws cloud architecture india", "amazon web services consulting"],
  alternates: {
    canonical: "https://www.esvincreative.in/aws-cloud-architecture",
  },
};

const serviceFaqs = [
  { question: "Do you only work with AWS, or other clouds too?", answer: "AWS is one of the three environments we work in day to day, alongside Google Cloud and Vercel — see our Cloud Infrastructure page for the broader, multi-cloud service. This page covers our AWS-specific practice for teams who have already standardized on AWS or are migrating to it." },
  { question: "Can you migrate an existing on-premise or other-cloud system to AWS?", answer: "Yes. We plan the migration path — networking (VPC), compute, and data — and execute the cutover with zero to minimal downtime, rather than a risky one-shot switch." },
  { question: "Can you help reduce our AWS bill?", answer: "Yes, cost optimization is a standing part of the engagement, not a one-time audit: right-sizing instances, Reserved/Spot capacity where it fits your workload, and removing idle or over-provisioned resources." },
  { question: "Do you set up AWS the right way from day one for a new project?", answer: "Yes. For new builds, we architect the VPC, IAM roles, and compute/storage layout up front — least-privilege access and encryption from the first deployment, not retrofitted later." },
  { question: "Do you work within an existing AWS account, or do we need to start fresh?", answer: "We can work within your existing AWS account and organization structure, or set up a new one — whichever avoids disrupting what's already running." }
];

const aiSearchBlocks = [
  {
    question: "What is Esvin Creative's AWS cloud architecture service?",
    answer: "Esvin Creative designs, migrates, and manages infrastructure on Amazon Web Services — VPC networking, compute and storage architecture, IAM security policies, and Terraform-managed infrastructure as code, for businesses based in Hyderabad and across India."
  },
  {
    question: "Who typically hires Esvin Creative for AWS work specifically?",
    answer: "Teams already standardized on AWS who need architecture help or cost control, and businesses migrating an on-premise or other-cloud system onto AWS rather than starting a new multi-cloud evaluation."
  },
  {
    question: "How does this differ from Esvin Creative's general Cloud Infrastructure service?",
    answer: "The general Cloud Infrastructure service covers AWS, Google Cloud, and Vercel and helps you choose between them. This page is for teams who've already chosen AWS and want a partner who works in it specifically — deeper on VPC design, IAM, and AWS-native cost optimization."
  },
  {
    question: "What outcomes can clients expect?",
    answer: "A VPC and IAM setup built on least-privilege access from day one, a migration with no unplanned downtime, and an ongoing reduction in AWS spend through right-sizing and removing idle resources."
  }
];

export default function AwsCloudArchitecturePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AWS Cloud Architecture & Migration",
    "provider": { "@id": "https://www.esvincreative.in/#organization" },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "location": {
      "@type": "Place",
      "name": "Hyderabad, Telangana"
    },
    "serviceType": "AWS Cloud Architecture and Migration"
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
        "name": "AWS Cloud Architecture"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="service-schema" data={serviceSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 relative border-b-2 border-dashed border-black">
        <div className="absolute left-10 top-32 opacity-30 hidden sm:block">
          <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={80} height={80} className="w-20 h-20 animate-wobble" />
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-ultra text-black mb-4 sm:mb-8 leading-tight">
            AWS Cloud <SketchHighlight color="yellow">Architecture</SketchHighlight> & Migration
          </h1>
          <p className="text-lg sm:text-2xl font-ultra text-black/80 max-w-3xl leading-relaxed mb-6 sm:mb-10">
            Dedicated AWS architecture, migration, and cost-optimization work for businesses in Hyderabad and across India — VPC design, IAM security, and Terraform-managed infrastructure, built by the same engineers who deploy it.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-ultra text-black/50 mb-6 sm:mb-10">
            <span>Authored by: Esvin Joshua</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-6 py-3.5 sm:px-8 sm:py-4 bg-black text-white text-lg sm:text-xl font-bold font-ultra sketch-border hover:bg-highlight-yellow hover:text-black transition-colors text-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold font-ultra text-black mb-3 sm:mb-4">AWS Services We Architect</h2>
          <p className="text-base sm:text-xl font-ultra text-black/70 max-w-3xl leading-relaxed mb-8 sm:mb-12">
            This is a focused AWS practice, not a generic cloud page with AWS mentioned in passing. If your infrastructure runs — or will run — on AWS specifically, this is what we cover.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "VPC & Network Architecture", desc: "Designing the network layer — subnets, route tables, and peering — that everything else in your AWS account sits on." },
              { title: "Migration to AWS", desc: "Moving an on-premise or other-cloud workload onto EC2, RDS, and S3 with a planned cutover, not a risky one-shot switch." },
              { title: "IAM & Security", desc: "Least-privilege IAM roles and policies, encryption at rest and in transit, configured from the first deployment." },
              { title: "Infrastructure as Code", desc: "Your AWS account provisioned and versioned through Terraform, so environments are reproducible and auditable." },
              { title: "Cost Optimization", desc: "Right-sizing instances, Reserved or Spot capacity where it fits, and cutting idle or over-provisioned resources." },
              { title: "Monitoring & Reliability", desc: "AWS-native monitoring and alerting, automated backups, and a tested disaster-recovery plan." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 sketch-border sketch-shadow hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-highlight-yellow rounded-full mb-6 sketch-border flex items-center justify-center text-xl">☁️</div>
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
              <h2 className="text-4xl font-bold font-ultra text-black mb-4">Why a Dedicated AWS Practice?</h2>
              <p className="text-xl font-ultra text-black/80 leading-relaxed">
                AWS rewards teams who know its specific services well — the same architecture decisions made generically across clouds tend to leave cost and reliability on the table on AWS specifically.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">AWS-Native Cost Control</h4>
                    <p className="text-black/70 font-ultra text-lg">Reserved Instances, Spot capacity, and right-sizing decisions specific to how AWS bills usage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">Security by Default</h4>
                    <p className="text-black/70 font-ultra text-lg">IAM least-privilege and VPC segmentation designed in from the start, not bolted on after an incident.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-highlight-yellow flex items-center justify-center shrink-0 mt-1">✓</span>
                  <div>
                    <h4 className="text-xl font-bold font-ultra text-black">Multi-AZ Reliability</h4>
                    <p className="text-black/70 font-ultra text-lg">Architecture that survives a single availability zone going down, without over-provisioning for it.</p>
                  </div>
                </li>
              </ul>

              <p className="text-lg font-ultra text-black/60 pt-2">
                Evaluating AWS against Google Cloud or Vercel rather than committed to it already? See our broader <Link href="/cloud-infrastructure" className="underline hover:text-black">Cloud Infrastructure &amp; DevOps</Link> service.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 sketch-border sketch-shadow relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-highlight-blue sketch-border rounded-full z-10" />
                <h3 className="text-3xl font-bold font-ultra text-black mb-6">AWS Stack We Work In</h3>
                <div className="flex flex-wrap gap-4">
                  {['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront', 'VPC', 'IAM', 'CloudWatch', 'Terraform'].map(tech => (
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

      <AISearchBlocks title="AI Overview: AWS Cloud Architecture" blocks={aiSearchBlocks} />

      <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-ultra text-black mb-6">See Our Work</h2>
          <p className="text-xl font-ultra text-black/70 mb-8">Explore how we've applied our cloud and infrastructure expertise for real clients, with more case studies in progress.</p>
          <Link href="/portfolio" className="inline-block px-8 py-4 bg-white text-black text-xl font-bold font-ultra sketch-border sketch-shadow hover:-translate-y-1 transition-transform">
            View Our Portfolio
          </Link>
        </div>
      </section>

      <FAQ title="AWS Cloud Architecture FAQs" faqs={serviceFaqs} />

      <section className="py-24 bg-highlight-yellow border-t-2 border-dashed border-black text-center px-6 relative overflow-hidden">
        <div className="absolute left-10 top-10 opacity-30">
          <Image src="/assets/icons/star-drawn.svg" alt="" width={60} height={60} className="w-16 h-16 animate-wobble" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Ready to Architect Your AWS Environment?
          </h2>
          <p className="text-xl font-ultra text-black/80 mb-10">
            Talk to our team in Hyderabad about your AWS architecture, migration, or cost-optimization needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 bg-black text-white text-xl font-bold font-ultra sketch-border hover:bg-highlight-pink hover:text-black transition-colors w-full sm:w-auto">
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
