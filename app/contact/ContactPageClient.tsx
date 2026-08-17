"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneIcon, EnvelopeClosedIcon, GlobeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TrustSignals from "@/components/TrustSignals";
import SketchHighlight from "@/components/SketchHighlight";
import { redirect } from "next/navigation";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSedhfM4b6UIRR5xZ7cQVsmpVMLNBuMdM2z6yRgURY7C4YFqOQ/formResponse";
    const body = new URLSearchParams();
    body.append("entry.1709925532", formData.name);
    body.append("entry.736719861", formData.company);
    body.append("entry.1321263650", formData.email);
    body.append("entry.290646291", formData.project);


    body.append("entry.1801704685_sentinel", "");
    if (formData.budget) {
      body.append("entry.1801704685", formData.budget);
    }


    body.append("fvv", "1");
    body.append("pageHistory", "0");
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });
      
      setStatus("success");

      setTimeout(() => {
        redirect("/contact-confirmed");
      }, 500);

    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center overflow-hidden">
        <Image src="/assets/icons/speech-bubble-drawn.svg" alt="" width={100} height={100} className="absolute top-20 right-10 md:right-32 opacity-60 animate-wobble hidden sm:block" />

        {/* Not animation-gated: this heading is the LCP element on /contact and
            was measuring 4.16s (Needs Improvement) behind the fade-in delay. */}
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black tracking-tight mb-4 sm:mb-8">
            <SketchHighlight color="yellow">Let's Build</SketchHighlight> Something That Lasts
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-ultra text-black/80 leading-relaxed max-w-3xl mx-auto">
            Schedule a consultation with our engineering team to discuss your technical requirements and business goals.
          </p>
        </div>
      </section>

      <section className="relative py-12 md:py-16 bg-white border-t-2 border-dashed border-black/10">
        <div className="absolute left-5 top-20 opacity-30 hidden sm:block">
          <Image src="/assets/icons/candle-with-burning-flame-hand-drawn-outline-svgrepo-com.svg" alt="" width={100} height={100} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8 md:space-y-12"
          >
            <div className="bg-subtle-grid sketch-border sketch-shadow p-5 sm:p-8 space-y-6 sm:space-y-8">
              <h2 className="relative inline-block text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 w-full">
                Contact Information
                <Image src="/assets/icons/underline-drawn.svg" alt="" width={180} height={20} className="absolute -bottom-3 sm:-bottom-4 left-0 w-[60%] h-4 sm:h-5 opacity-50" />
              </h2>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 sketch-border shadow-sm rounded-full flex items-center justify-center w-12 h-12">
                  <EnvelopeClosedIcon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:hello@esvincreative.in" className="text-xl font-ultra text-black/80 hover:text-black hover:underline transition-colors">
                    hello@esvincreative.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 sketch-border shadow-sm rounded-full flex items-center justify-center w-12 h-12">
                  <GlobeIcon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black uppercase tracking-wider mb-1">Location</h3>
                  <p className="text-xl font-ultra text-black/80">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-2xl text-black">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/esvin-creative" target="_blank" rel="noopener noreferrer" className="p-4 bg-white sketch-border sketch-shadow hover:-translate-y-1 hover:bg-highlight-blue transition-all group flex items-center justify-center w-14 h-14">
                  <LinkedInLogoIcon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Esvin-Creative" target="_blank" rel="noopener noreferrer" className="p-4 bg-white sketch-border sketch-shadow hover:-translate-y-1 hover:bg-highlight-yellow transition-all group flex items-center justify-center w-14 h-14">
                  <GitHubLogoIcon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://instagram.com/esvincreative.in" className="p-4 bg-white sketch-border sketch-shadow hover:-translate-y-1 hover:bg-highlight-pink transition-all group flex items-center justify-center w-14 h-14">
                  <InstagramLogoIcon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 relative"
          >
            <Image src="/assets/icons/sparkles-drawn.svg" alt="" width={60} height={60} className="absolute -top-8 -right-8 opacity-40 animate-wobble z-20" />
            <div className="bg-white sketch-border sketch-shadow p-8 md:p-12 h-full relative z-10">
              
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-xl font-ultra font-bold text-black">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:border-solid focus:bg-white transition-all text-lg font-ultra rounded-md"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-xl font-ultra font-bold text-black">Company *</label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:border-solid focus:bg-white transition-all text-lg font-ultra rounded-md"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xl font-ultra font-bold text-black">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:border-solid focus:bg-white transition-all text-lg font-ultra rounded-md"
                        placeholder="work@company.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="budget" className="text-xl font-ultra font-bold text-black">Budget Range (Optional)</label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-black focus:outline-none focus:border-solid focus:bg-white transition-all text-lg font-ultra rounded-md appearance-none cursor-pointer"
                      >
                        <option value="">Select a range</option>
                        <option value="< ₹15k">Less than ₹15,000</option>
                        <option value="₹15k - ₹60k">₹15,000 - ₹60,000</option>
                        <option value="₹60k - ₹120k">₹60,000 - ₹120,000</option>
                        <option value="₹120k+">₹120,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="project" className="text-xl font-ultra font-bold text-black">Project Requirements *</label>
                    <textarea
                      id="project"
                      required
                      rows={6}
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-black rounded-md focus:outline-none focus:border-solid focus:bg-white transition-all resize-y text-lg font-ultra"
                      placeholder="Please describe your technical needs, target audience, and timeline..."
                    />
                  </div>

                  {status === "error" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-ultra">
                      <p>There was an error submitting your request. Please email us directly at hello@esvincreative.in.</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || status === "success"}
                    className="w-full flex items-center justify-center gap-2 py-5 bg-black text-white font-bold text-2xl hover:bg-highlight-yellow hover:text-black transition-colors sketch-border sketch-shadow disabled:opacity-50 disabled:cursor-not-allowed group mt-8"
                  >
                    {isSubmitting ? "Submitting..." : status === "success" ? "Request Received. Redirecting..." : "Schedule a Consultation"}
                    {status === "success" && <PaperPlaneIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustSignals />
      <FAQ />
      <Footer />
    </main>
  );
}
