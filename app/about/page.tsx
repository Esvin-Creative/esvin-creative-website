"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AISearchBlocks from "@/components/AISearchBlocks";
import SketchHighlight from "@/components/SketchHighlight";

export default function AboutPage() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, budgetId: string} | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSedhfM4b6UIRR5xZ7cQVsmpVMLNBuMdM2z6yRgURY7C4YFqOQ/formResponse";
    const body = new URLSearchParams();
    body.append("entry.1709925532", formData.name);
    body.append("entry.736719861", formData.company);
    body.append("entry.1321263650", formData.email);
    body.append("entry.290646291", `I am looking to know more about the ${selectedPlan.name} package.`);
    body.append("entry.1801704685", selectedPlan.budgetId);
    body.append("entry.1801704685_sentinel", "");
    body.append("fvv", "1");
    body.append("pageHistory", "0");

    try {
      await fetch(url, { method: "POST", mode: "no-cors", body });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      
      
      <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center overflow-hidden">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={80} height={80} className="absolute top-20 left-10 md:left-20 opacity-40 animate-wobble" />
        <Image src="/assets/icons/loop-arrows-svgrepo-com.svg" alt="Loop arrows decorative graphic" width={100} height={100} className="absolute bottom-10 right-10 md:right-20 opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
            <SketchHighlight color="pink">About Esvin Creative</SketchHighlight>
          </h1>
          <p className="text-2xl md:text-3xl font-ultra text-black/80 leading-relaxed max-w-4xl mx-auto">
            Technology consulting, software development, cloud infrastructure, and digital transformation services for modern organizations.
          </p>
        </motion.div>
      </section>

      
      <section className="relative py-24 bg-subtle-grid border-t-2 border-dashed border-black">
        <div className="absolute left-5 bottom-10 opacity-30">
          <Image src="/assets/icons/question-sign-hand-drawn-outline-svgrepo-com.svg" alt="Question mark decorative graphic" width={80} height={80} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="relative inline-block text-4xl font-bold text-black mb-12 text-center w-full">
              Why Esvin Creative Exists
              <Image src="/assets/icons/underline-drawn.svg" alt="Underline emphasis graphic" width={200} height={20} className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-5 opacity-50" />
            </h2>
            <div className="bg-white sketch-border sketch-shadow p-10 space-y-6 text-xl font-ultra text-black/80 leading-relaxed relative group">
              <Image src="/assets/icons/star-drawn.svg" alt="Star decorative graphic" width={40} height={40} className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p>
                Modern organizations frequently struggle with fragmented technology. When systems are built in silos and maintained by multiple specialized vendors, managing that complexity becomes a full-time job. 
              </p>
              <p>
                Esvin Creative provides end-to-end ownership of your technical infrastructure. We design the architecture, engineer the solution, handle the cloud deployment, and provide long-term operational support.
              </p>
              <p>
                Our focus is on practical solutions and long-term partnerships. We prioritize operational reliability over hype, ensuring the software we build consistently drives real business value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-24 bg-white border-t-2 border-dashed border-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black mb-12 text-center"
          >
            <SketchHighlight color="yellow">Leadership</SketchHighlight>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10 items-start"
          >
            <div className="md:col-span-1">
              <div className="w-full aspect-square bg-gray-100 sketch-border sketch-shadow flex flex-col items-center justify-center text-center p-6">
                <span className="text-gray-400 font-ultra">Esvin joshua</span>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-black">Esvin Joshua</h3>
                <p className="text-xl font-bold text-black/50 uppercase tracking-wide mt-1">Founder Title</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-black">Background</h4>
                <p className="text-lg font-ultra text-black/80 leading-relaxed">Esvin Joshua is a software developer and technology enthusiast currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning. His work spans full-stack development, cloud infrastructure, mobile applications, and digital transformation initiatives. Through Esvin Creative, he helps organizations design, build, deploy, and maintain modern digital systems, combining technical expertise with a focus on long-term reliability and business value.</p>
                
                <h4 className="text-2xl font-bold text-black">Technical Expertise</h4>
                <p className="text-lg font-ultra text-black/80 leading-relaxed">Full-Stack Development, Cloud Infrastructure, Mobile Applications, Digital Transformation</p>
                
                <h4 className="text-2xl font-bold text-black">Professional Philosophy</h4>
                <p className="text-lg font-ultra text-black/80 leading-relaxed">Modern organizations frequently struggle with fragmented technology. When systems are built in silos and maintained by multiple specialized vendors, managing that complexity becomes a full-time job.  Esvin Creative provides end-to-end ownership of your technical infrastructure. We design the architecture, engineer the solution, handle the cloud deployment, and provide long-term operational support. Our focus is on practical solutions and long-term partnerships. We prioritize operational reliability over hype, ensuring the software we build consistently drives real business value.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="relative py-24 bg-subtle-grid border-t-2 border-dashed border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="relative inline-block text-4xl font-bold text-black mb-12">
            Our Capabilities
            <Image src="/assets/icons/underline-drawn.svg" alt="Underline emphasis graphic" width={200} height={20} className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-5 opacity-50" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Software Development", desc: "Custom engineering for scalable web applications and enterprise systems using React, Next.js, and Node.js." },
              { title: "Mobile Applications", desc: "Cross-platform mobile development for iOS and Android delivering native-like experiences with Flutter." },
              { title: "Cloud Infrastructure", desc: "Architecture, deployment, and management of secure cloud environments on GCP and AWS." },
              { title: "Technology Consulting", desc: "Strategic guidance on technology selection, architecture design, and overcoming complex technical debt." },
              { title: "Digital Transformation", desc: "Modernizing legacy systems and migrating traditional business operations into robust digital platforms." },
              { title: "Creative Services", desc: "UI/UX design, brand identity, and user-centric interfaces that elevate the software experience." }
            ].map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white sketch-border sketch-shadow p-8 text-left hover:-translate-y-1 transition-transform group relative"
              >
                <h3 className="text-2xl font-bold text-black mb-4">{cap.title}</h3>
                <p className="text-lg font-ultra text-black/70">{cap.desc}</p>
                <Image src="/assets/icons/star-drawn.svg" alt="Star hover graphic" width={30} height={30} className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="relative py-24 bg-subtle-grid border-t-2 border-dashed border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              <SketchHighlight color="pink">Pricing & Packages</SketchHighlight>
            </h2>
            <p className="text-xl md:text-2xl font-ultra text-black/80 max-w-3xl mx-auto leading-relaxed">
              We believe clients should know exactly what they're paying for. Every package includes planning, consultation, deployment support, and post-launch assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white sketch-border sketch-shadow p-8 md:p-10 flex flex-col group relative"
            >
              <h3 className="text-3xl font-bold text-black mb-2">Launch</h3>
              <div className="text-2xl font-bold text-black/60 mb-4">₹15,000 - ₹25,000</div>
              <p className="font-ultra text-lg italic text-black/70 mb-8">Best for: Startups, small businesses, local organizations.</p>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-black mb-4 flex items-center gap-2">
                    <Image src="/assets/icons/star-drawn.svg" alt="Included" width={20} height={20} className="opacity-70" />
                    Included
                  </h4>
                  <ul className="space-y-2 font-ultra text-black/80">
                    {["Custom responsive website", "Up to 5 pages", "Contact forms", "Mobile optimization", "Basic SEO setup", "Google Analytics integration", "Search Console setup", "SSL configuration", "Domain & hosting guidance", "Deployment assistance"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 sketch-border border-dashed">
                  <h4 className="font-bold text-lg text-black mb-2">Complimentary</h4>
                  <ul className="space-y-1 font-ultra text-sm text-black/70">
                    <li className="flex items-start gap-2"><span>+</span><span>30 days post-launch support</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Business email setup assistance</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Basic performance optimization</span></li>
                  </ul>
                </div>
              </div>
              
              <button onClick={() => { setSelectedPlan({ name: "Launch", budgetId: "₹15k - ₹60k" }); setSubmitStatus("idle"); }} className="mt-8 w-full py-4 bg-black text-white font-bold text-lg sketch-border hover:bg-pink-500 transition-colors">
                Start Small →
              </button>
            </motion.div>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-yellow-50 sketch-border sketch-shadow p-8 md:p-10 flex flex-col group relative"
            >
              <div className="absolute -top-4 right-4 bg-yellow-300 sketch-border px-4 py-1 font-bold text-sm transform rotate-3 z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">Growth</h3>
              <div className="text-2xl font-bold text-black/60 mb-4">₹35,000 - ₹75,000</div>
              <p className="font-ultra text-lg italic text-black/70 mb-8">Best for: Growing businesses requiring lead generation and stronger online presence.</p>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-black mb-4 flex items-center gap-2">
                    <Image src="/assets/icons/star-drawn.svg" alt="Included" width={20} height={20} className="opacity-70" />
                    Included
                  </h4>
                  <ul className="space-y-2 font-ultra text-black/80">
                    {["Everything in Launch", "Up to 15 pages", "Blog integration", "Advanced SEO setup", "Lead capture systems", "CRM integration", "Content management system", "Speed optimization", "Technical SEO audit", "Conversion-focused UX improvements"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold mt-1">✓</span>
                        <span className={i === 0 ? "font-bold underline decoration-wavy decoration-pink-300" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-4 sketch-border border-dashed">
                  <h4 className="font-bold text-lg text-black mb-2">Complimentary</h4>
                  <ul className="space-y-1 font-ultra text-sm text-black/70">
                    <li className="flex items-start gap-2"><span>+</span><span>60 days support</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Monthly performance review</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Staff training session</span></li>
                  </ul>
                </div>
              </div>
              
              <button onClick={() => { setSelectedPlan({ name: "Growth", budgetId: "₹15k - ₹60k" }); setSubmitStatus("idle"); }} className="mt-8 w-full py-4 bg-black text-white font-bold text-lg sketch-border hover:bg-yellow-400 hover:text-black transition-colors">
                Scale Your Presence →
              </button>
            </motion.div>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white sketch-border sketch-shadow p-8 md:p-10 flex flex-col group relative"
            >
              <h3 className="text-3xl font-bold text-black mb-2">Digital Infrastructure</h3>
              <div className="text-2xl font-bold text-black/60 mb-4">₹75,000 - ₹2,50,000+</div>
              <p className="font-ultra text-lg italic text-black/70 mb-8">Best for: Educational institutions, enterprises, and organizations undergoing digital transformation.</p>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-black mb-4 flex items-center gap-2">
                    <Image src="/assets/icons/star-drawn.svg" alt="Included" width={20} height={20} className="opacity-70" />
                    Included
                  </h4>
                  <ul className="space-y-2 font-ultra text-black/80">
                    {["Infrastructure assessment", "Cloud migration planning", "Website modernization", "Internal workflow analysis", "Digital systems architecture", "Security review", "Documentation", "Maintenance planning", "Technology roadmap", "Multi-system integrations"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 sketch-border border-dashed">
                  <h4 className="font-bold text-lg text-black mb-2">Complimentary</h4>
                  <ul className="space-y-1 font-ultra text-sm text-black/70">
                    <li className="flex items-start gap-2"><span>+</span><span>Team workshops</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Technical consultation sessions</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Deployment supervision</span></li>
                  </ul>
                </div>
              </div>
              
              <button onClick={() => { setSelectedPlan({ name: "Digital Infrastructure", budgetId: "₹120k+" }); setSubmitStatus("idle"); }} className="mt-8 w-full py-4 bg-black text-white font-bold text-lg sketch-border hover:bg-blue-500 transition-colors">
                Transform Operations →
              </button>
            </motion.div>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white sketch-border sketch-shadow p-8 md:p-10 flex flex-col group relative"
            >
              <h3 className="text-3xl font-bold text-black mb-2">Mobile & Custom Software</h3>
              <div className="text-2xl font-bold text-black/60 mb-4">Starting at ₹1,50,000</div>
              <p className="font-ultra text-lg italic text-black/70 mb-8">Best for: Organizations requiring custom applications and platforms.</p>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h4 className="font-bold text-xl text-black mb-4 flex items-center gap-2">
                    <Image src="/assets/icons/star-drawn.svg" alt="Included" width={20} height={20} className="opacity-70" />
                    Included
                  </h4>
                  <ul className="space-y-2 font-ultra text-black/80">
                    {["Android development", "iOS development", "Backend APIs", "Database architecture", "Admin dashboards", "Authentication systems", "Cloud deployment", "App Store publishing support", "Google Play publishing support", "Testing & QA"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 sketch-border border-dashed">
                  <h4 className="font-bold text-lg text-black mb-2">Complimentary</h4>
                  <ul className="space-y-1 font-ultra text-sm text-black/70">
                    <li className="flex items-start gap-2"><span>+</span><span>90 days support</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Analytics setup</span></li>
                    <li className="flex items-start gap-2"><span>+</span><span>Release management assistance</span></li>
                  </ul>
                </div>
              </div>
              
              <button onClick={() => { setSelectedPlan({ name: "Mobile & Custom Software", budgetId: "₹120k+" }); setSubmitStatus("idle"); }} className="mt-8 w-full py-4 bg-black text-white font-bold text-lg sketch-border hover:bg-green-500 transition-colors">
                Build Something Bigger →
              </button>
            </motion.div>
          </div>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 relative inline-block">
              Additional Services
              <Image src="/assets/icons/underline-drawn.svg" alt="Underline emphasis graphic" width={150} height={15} className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-4 opacity-30" />
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["SEO & Search Visibility", "Cloud Infrastructure Management", "Digital Marketing", "Social Media Creative Design", "Website Maintenance", "Performance Optimization", "Security Audits", "Technical Consulting", "AI Integrations", "App Store Management"].map((service, i) => (
                <div key={i} className="bg-white sketch-border px-5 py-3 font-ultra text-black/80 hover:-translate-y-1 transition-transform cursor-default">
                  {service}
                </div>
              ))}
            </div>
            <div className="inline-block bg-black text-white font-bold text-xl sketch-border px-8 py-4 shadow-[4px_4px_0_0_rgba(236,72,153,1)]">
              Custom Quote Based On Requirements
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black text-white sketch-border p-10 md:p-14 text-center relative overflow-hidden"
          >
            <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles" width={100} height={100} className="absolute -top-10 -right-10 opacity-20 filter invert" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">No Hidden Costs. No Surprise Invoices.</h3>
            <p className="text-xl md:text-2xl font-ultra text-white/80 leading-relaxed max-w-3xl mx-auto">
              Every engagement begins with a consultation and proposal. Clients receive a clear scope of work, expected timelines, deliverables, and pricing before development begins. If requirements change, costs are discussed and approved before implementation.
            </p>
          </motion.div>

        </div>
      </section>

      
      <section className="py-24 bg-white border-t-2 border-dashed border-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            <SketchHighlight color="blue">Our Process</SketchHighlight>
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-black/10 before:border-l-2 before:border-dashed before:border-black/30">
            
            {[
              { num: "1", title: "Discover", desc: "Understanding requirements and business goals." },
              { num: "2", title: "Design", desc: "Architecture planning and UI/UX interface design." },
              { num: "3", title: "Build", desc: "Iterative development with modern tech stacks." },
              { num: "4", title: "Deploy", desc: "Rigorous testing and seamless cloud deployment." },
              { num: "5", title: "Support", desc: "Ongoing maintenance and system monitoring." },
              { num: "6", title: "Scale", desc: "Feature enhancements and infrastructure scaling." }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative z-10">
                  <Image src="/assets/icons/circle-drawn.svg" alt="Circle emphasis graphic" width={48} height={48} className="absolute inset-0 opacity-60" />
                  <span className="font-bold text-black relative z-10">{step.num}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white sketch-border sketch-shadow p-6">
                  <h3 className="font-bold text-2xl text-black mb-2">{step.title}</h3>
                  <p className="font-ultra text-lg text-black/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AISearchBlocks />
      <Footer />

      
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white sketch-border sketch-shadow p-8 md:p-12 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => {
                setSelectedPlan(null);
                setSubmitStatus("idle");
              }}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center font-bold text-xl sketch-border hover:bg-pink-100 transition-colors"
            >
              ✕
            </button>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold text-black mb-4">Request Sent!</h3>
                <p className="font-ultra text-lg text-black/80">We've received your inquiry for the {selectedPlan.name} package. We will be in touch shortly.</p>
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="mt-8 w-full py-3 bg-black text-white font-bold sketch-border hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-black mb-2">Interested in {selectedPlan.name}?</h3>
                <p className="font-ultra text-lg text-black/70 mb-8">Enter your details below and we'll reach out with next steps.</p>
                
                <form onSubmit={handleModalSubmit} className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="font-bold text-black text-sm uppercase tracking-wide">Name *</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:bg-white focus:border-solid font-ultra text-lg" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-black text-sm uppercase tracking-wide">Email *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:bg-white focus:border-solid font-ultra text-lg" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-black text-sm uppercase tracking-wide">Company/Organization *</label>
                    <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full p-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:bg-white focus:border-solid font-ultra text-lg" placeholder="Company Name" />
                  </div>
                  
                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-100 text-red-700 font-ultra font-bold sketch-border">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black text-white font-bold text-lg sketch-border hover:bg-highlight-blue hover:text-black transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}
