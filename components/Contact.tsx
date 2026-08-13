"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import SketchHighlight from "./SketchHighlight";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Strip spaces, dashes, parentheses to validate the raw numbers
    const cleaned = phone.replace(/[\s\-()]/g, "");
    return /^\+?[0-9]{10,15}$/.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (!isEmailValid || !isPhoneValid) {
      setErrors({
        email: isEmailValid ? "" : "Please enter a valid email address.",
        phone: isPhoneValid ? "" : "Please enter a valid phone number (10-15 digits).",
      });
      setIsSubmitting(false);
      return;
    }

    setErrors({ email: "", phone: "" });

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSedhfM4b6UIRR5xZ7cQVsmpVMLNBuMdM2z6yRgURY7C4YFqOQ/formResponse";
    const body = new URLSearchParams();
    body.append("entry.1709925532", formData.name);
    body.append("entry.736719861", formData.company);
    body.append("entry.1321263650", formData.email);
    
    // Append the phone number to the project description so it gets collected in the sheet
    const descriptionWithPhone = `Phone Number: ${formData.phone}\n\nDescription:\n${formData.project}`;
    body.append("entry.290646291", descriptionWithPhone);
    
    // Budget range mapped to Google Form field (requires sentinel to register)
    body.append("entry.1801704685_sentinel", "");
    if (formData.budget) {
      body.append("entry.1801704685", formData.budget);
    }

    // Google Forms hidden metadata fields required to bypass strict validation
    body.append("fvv", "1");
    body.append("pageHistory", "0");

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });
     
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", project: "", budget: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      
      <div className="absolute left-10 bottom-20 opacity-30">
        <Image src="/assets/icons/candle-with-burning-flame-hand-drawn-outline-svgrepo-com.svg" alt="Candle flame decorative graphic" width={96} height={96} className="w-24 h-24" />
      </div>
      <div className="absolute right-10 top-40 opacity-20 hidden md:block">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative graphic" width={112} height={112} className="w-28 h-28 animate-wobble" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative inline-block w-full"
        >
          <Image src="/assets/icons/speech-bubble-drawn.svg" alt="Speech bubble decorative graphic" width={80} height={80} className="absolute -top-16 right-0 md:right-32 opacity-60" />
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 z-10">
            Let&apos;s Build Something Great.
            <Image src="/assets/icons/underline-drawn.svg" alt="Drawn underline decorative element" width={200} height={24} className="absolute -bottom-4 -left-[5%] w-[110%] h-6 opacity-50" />
          </h2>
          <p className="text-2xl text-black/80 font-ultra">
            Reach out to discuss your next project, or just to say hello.
          </p>
        </motion.div>

        <div className="bg-white sketch-border sketch-shadow p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold font-ultra text-black mb-4">Message Sent!</h3>
              <p className="text-xl font-ultra text-black/80">
                Thanks for reaching out. We&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-2 bg-transparent sketch-border sketch-shadow text-black font-bold text-xl hover:bg-highlight-yellow transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 sketch-border shadow-sm hidden md:block">
                <EnvelopeClosedIcon className="w-6 h-6 text-black" />
              </div>
              <form className="w-full space-y-6" onSubmit={handleSubmit}>
                
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xl font-ultra font-bold text-black">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-dashed border-black focus:outline-none focus:border-solid transition-all text-lg font-ultra"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xl font-ultra font-bold text-black">Company *</label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-dashed border-black focus:outline-none focus:border-solid transition-all text-lg font-ultra"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xl font-ultra font-bold text-black">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-transparent border-b-2 border-dashed ${errors.email ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-solid transition-all text-lg font-ultra`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm font-ultra">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xl font-ultra font-bold text-black">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 bg-transparent border-b-2 border-dashed ${errors.phone ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-solid transition-all text-lg font-ultra`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-sm font-ultra">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 3: Budget Range */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xl font-ultra font-bold text-black">Budget Range</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-solid border-black focus:outline-none transition-all text-lg font-ultra"
                  >
                    <option value="">Select a budget range...</option>
                    <option value="< ₹15k">&lt; ₹15k</option>
                    <option value="₹15k - ₹60k">₹15k - ₹60k</option>
                    <option value="₹60k - ₹120k">₹60k - ₹120k</option>
                    <option value="₹120k+">₹120k+</option>
                  </select>
                </div>

                {/* Row 4: Project Description */}
                <div className="space-y-2">
                  <label htmlFor="project" className="text-xl font-ultra font-bold text-black">Project Description *</label>
                  <textarea
                    id="project"
                    rows={4}
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-2 border-dashed border-black rounded-xl focus:outline-none focus:border-solid transition-all resize-none text-lg font-ultra"
                    placeholder="Tell us about what you want to build..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 font-ultra text-lg">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-5 bg-black text-white font-bold text-2xl hover:bg-highlight-yellow hover:text-black transition-colors sketch-border sketch-shadow disabled:opacity-50 disabled:cursor-not-allowed group mt-8"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                  {!isSubmitting && <PaperPlaneIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          )}

          <div className="mt-12 pt-8 border-t-2 border-dashed border-black flex flex-col items-center">
            <p className="text-xl font-ultra text-black/70 mb-2">Or email us directly at</p>
            <a
              href="mailto:hello@esvincreative.in"
              className="flex items-center gap-2 text-black font-bold text-2xl hover:bg-highlight-blue transition-colors px-4 py-2 rounded-lg"
            >
              <EnvelopeClosedIcon className="w-6 h-6" />
              hello@esvincreative.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
