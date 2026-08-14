"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AISearchBlocks from "@/components/AISearchBlocks";
import SketchHighlight from "@/components/SketchHighlight";

export default function PricingPageClient() {
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
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles" width={80} height={80} className="absolute top-20 left-10 md:left-20 opacity-40 animate-wobble" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
            <SketchHighlight color="pink">Pricing & Packages</SketchHighlight>
          </h1>
          <p className="text-2xl md:text-3xl font-ultra text-black/80 leading-relaxed max-w-4xl mx-auto">
            We believe clients should know exactly what they're paying for. Choose a package below or calculate your custom project.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/pricing/calculator" className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold text-xl sketch-border sketch-shadow hover:-translate-y-1 hover:bg-highlight-yellow hover:text-black transition-all flex items-center justify-center gap-2">
              <Image src="/assets/icons/asterisk-drawn.svg" alt="" width={24} height={24} className="filter invert group-hover:invert-0" />
              Build Custom Package
            </Link>
          </div>
        </motion.div>
      </section>


      <section className="relative py-24 bg-subtle-grid border-t-2 border-dashed border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

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
