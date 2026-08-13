"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import SketchHighlight from "./SketchHighlight";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
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

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });
     
      setStatus("success");
      setFormData({ name: "", company: "", email: "", project: "" });
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
        <img src="/assets/icons/candle-with-burning-flame-hand-drawn-outline-svgrepo-com.svg" className="w-24 h-24" alt="" />
      </div>
      <div className="absolute right-10 top-40 opacity-20 hidden md:block">
        <img src="/assets/icons/sparkles-drawn.svg" className="w-28 h-28 animate-wobble" style={{ animationDelay: '1.5s' }} alt="" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative inline-block w-full"
        >
          <img src="/assets/icons/speech-bubble-drawn.svg" className="absolute -top-16 right-0 md:right-32 w-20 h-20 opacity-60" alt="" />
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 z-10">
            Let&apos;s Build Something Great.
            <img src="/assets/icons/underline-drawn.svg" className="absolute -bottom-4 -left-[5%] w-[110%] h-6 opacity-50" alt="" />
          </h2>
          <p className="text-2xl text-black/80 font-sketch">
            Reach out to discuss your next project, or just to say hello.
          </p>
        </motion.div>

        <div className="bg-white sketch-border sketch-shadow p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold font-sketch text-black mb-4">Message Sent!</h3>
              <p className="text-xl font-sketch text-black/80">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xl font-sketch font-bold text-black">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-dashed border-black focus:outline-none focus:border-solid transition-all text-lg font-sketch"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xl font-sketch font-bold text-black">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-dashed border-black focus:outline-none focus:border-solid transition-all text-lg font-sketch"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xl font-sketch font-bold text-black">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-dashed border-black focus:outline-none focus:border-solid transition-all text-lg font-sketch"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-xl font-sketch font-bold text-black">Project Description</label>
                <textarea
                  id="project"
                  rows={4}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-2 border-dashed border-black rounded-xl focus:outline-none focus:border-solid transition-all resize-none text-lg font-sketch"
                  placeholder="Tell us about what you want to build..."
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 font-sketch text-lg">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-transparent sketch-border sketch-shadow text-black font-bold text-xl hover:bg-highlight-yellow transition-colors group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Start Your Project"}
                {!isSubmitting && <Send size={24} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t-2 border-dashed border-black flex flex-col items-center">
            <p className="text-xl font-sketch text-black/70 mb-2">Or email us directly at</p>
            <a
              href="mailto:hello@esvincreative.in"
              className="flex items-center gap-2 text-black font-bold text-2xl hover:bg-highlight-blue transition-colors px-4 py-2 rounded-lg"
            >
              <Mail size={24} />
              hello@esvincreative.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
