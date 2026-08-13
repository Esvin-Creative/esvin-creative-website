"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Script from "next/script";

const defaultFaqs = [
  { question: "How much does custom software development cost?", answer: "Custom software development costs vary widely based on the complexity of the project, the technologies used, and the scope of work. At Esvin Creative, we work with our clients to define clear requirements and provide transparent, phased pricing models that align with business value." },
  { question: "How long does software development take?", answer: "Project timelines depend on the scale of the requirements. A minimal viable product (MVP) might take 2-3 months, while complex enterprise systems can take 6 months to over a year. We emphasize iterative delivery so you see working software early and often." },
  { question: "What technologies do you use?", answer: "We utilize modern, scalable technologies suited to the problem. Our core stack includes Next.js, React, TypeScript, Flutter for mobile, Node.js, Python, and cloud infrastructure on Google Cloud Platform and AWS." },
  
  { question: "Do you develop Android apps?", answer: "Yes, we develop high-performance Android applications. We primarily use Flutter and React Native to build cross-platform apps that provide a native-like experience on Android devices." },
  { question: "Do you develop iOS apps?", answer: "Yes, we design and develop iOS applications. Our cross-platform expertise ensures your app runs seamlessly on iPhones and iPads while sharing a unified codebase with your Android version." },
  { question: "Can you publish apps to app stores?", answer: "Absolutely. We handle the end-to-end deployment process, including Apple App Store and Google Play Store submission, compliance checks, and post-launch updates." },

  { question: "Do you manage cloud infrastructure?", answer: "Yes, we architect, deploy, and manage cloud infrastructure. We focus on scalability, security, and cost-optimization across AWS, Google Cloud, and Vercel environments." },
  { question: "Can you migrate existing systems?", answer: "Yes. We help organizations modernize legacy applications and seamlessly migrate on-premise or outdated systems to modern cloud infrastructure with minimal downtime." },

  { question: "Do you provide technology consulting?", answer: "We offer strategic technology consulting to help businesses align their IT investments with business goals, select the right tech stack, and overcome complex technical challenges." },
  { question: "Do you support startups?", answer: "Yes, we regularly partner with startups to build MVPs, scale their technology architecture, and provide technical leadership during crucial growth phases." },
  { question: "Do you support educational institutions?", answer: "Yes. We have extensive experience building scalable learning management systems, student portals, and digital infrastructure tailored specifically for educational institutions." },

  { question: "Do you provide maintenance?", answer: "We provide comprehensive maintenance services to ensure your software remains secure, performant, and up-to-date with the latest operating systems and browser requirements." },
  { question: "Do you offer long-term support?", answer: "We prioritize long-term partnerships. We offer ongoing Service Level Agreements (SLAs) for continued development, monitoring, and dedicated technical support after deployment." },
  { question: "Can you work with existing teams?", answer: "Yes. We often integrate with our clients' internal engineering or design teams, providing specialized expertise, extra capacity, or leadership to help them deliver projects successfully." },
  { question: "How do you ensure code quality?", answer: "We enforce strict engineering standards, including peer code reviews, automated testing (unit and integration), continuous integration/continuous deployment (CI/CD) pipelines, and comprehensive documentation." }
];

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function FAQ({ faqs = defaultFaqs, title = "Frequently Asked Questions" }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white relative">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-12 text-center">
          {title}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white sketch-border sketch-shadow overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold font-ultra text-black">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-black transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-lg text-black/80 font-ultra leading-relaxed border-t-2 border-dashed border-black/10 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
