"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchHighlight from "@/components/SketchHighlight";

const BASE_PACKAGES = [
  { id: "landing", name: "Landing Page (1 page)", price: 10000, category: "Website" },
  { id: "business", name: "Business Website (5 pages)", price: 25000, category: "Website" },
  { id: "corp", name: "Corporate Website (10+ pages)", price: 45000, category: "Website" },
  { id: "ecom", name: "E-Commerce Store", price: 55000, category: "E-Commerce" },
  { id: "webapp", name: "Custom Web App", price: 75000, category: "Web App" },
  { id: "android", name: "Android App", price: 50000, category: "Mobile App" },
  { id: "crossplatform", name: "Android + iOS App", price: 95000, category: "Mobile App" },
];

const FEATURES: Record<string, {id: string, name: string, price: number}[]> = {
  "Authentication": [
    { id: "f-login", name: "Login & Signup", price: 5000 },
    { id: "f-glogin", name: "Google Login", price: 1000 },
    { id: "f-roles", name: "Multi-user Roles", price: 6000 },
  ],
  "Payments": [
    { id: "f-razorpay", name: "Razorpay Integration", price: 5000 },
    { id: "f-subs", name: "Subscription Billing", price: 10000 },
  ],
  "Communication & Booking": [
    { id: "f-contact", name: "Contact Forms", price: 0 },
    { id: "f-email", name: "Email Notifications", price: 3000 },
    { id: "f-sms", name: "SMS Notifications", price: 5000 },
    { id: "f-booking", name: "Appointment Booking", price: 8000 },
    { id: "f-cal", name: "Calendar Integration", price: 5000 },
  ],
  "Dashboard & AI": [
    { id: "f-admin", name: "Admin Dashboard", price: 12000 },
    { id: "f-analytics", name: "Analytics Dashboard", price: 12000 },
    { id: "f-chatbot", name: "AI Chatbot", price: 10000 },
    { id: "f-aigen", name: "AI Content Generation", price: 15000 },
    { id: "f-aidoc", name: "AI Document Processing", price: 25000 },
  ],
  "Storage & Misc": [
    { id: "f-upload", name: "File Uploads", price: 3000 },
    { id: "f-cloud", name: "Cloud Storage Setup", price: 3500 },
    { id: "f-maps", name: "Google Maps", price: 2000 },
    { id: "f-search", name: "Advanced Search", price: 5000 },
  ]
};

const DESIGN_AND_CONTENT = [
  { id: "d-premium", name: "Premium UI Design", price: 10000 },
  { id: "d-anim", name: "Custom Animations", price: 5000 },
  { id: "d-logo", name: "Logo Design", price: 3500 },
  { id: "d-brand", name: "Brand Guidelines", price: 6000 },
  { id: "c-write", name: "Content Writing (5 pgs)", price: 6000 },
  { id: "c-seo", name: "SEO Optimization", price: 3000 },
];

export default function CalculatorPage() {
  const [selectedBaseId, setSelectedBaseId] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const selectedBase = BASE_PACKAGES.find(p => p.id === selectedBaseId);
  
  const toggleFeature = (id: string) => {
    const next = new Set(selectedFeatures);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedFeatures(next);
  };

  const getFeatureObj = (id: string) => {
    for (const cat of Object.values(FEATURES)) {
      const f = cat.find(x => x.id === id);
      if (f) return f;
    }
    return DESIGN_AND_CONTENT.find(x => x.id === id);
  };

  const basePrice = selectedBase?.price || 0;
  
  let featuresPrice = 0;
  let designPrice = 0;

  selectedFeatures.forEach(id => {
    const f = getFeatureObj(id);
    if (f) {
      if (id.startsWith('d-') || id.startsWith('c-')) {
        designPrice += f.price;
      } else {
        featuresPrice += f.price;
      }
    }
  });

  const total = basePrice + featuresPrice + designPrice;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getBudgetCategory = (totalAmount: number) => {
    if (totalAmount < 15000) return "< ₹15k";
    if (totalAmount <= 60000) return "₹15k - ₹60k";
    if (totalAmount <= 120000) return "₹60k - ₹120k";
    return "₹120k+";
  };

  const buildDescription = () => {
    const featureNames = Array.from(selectedFeatures).map(id => getFeatureObj(id)?.name).filter(Boolean);
    const featuresStr = featureNames.length > 0 ? ` with ${featureNames.join(', ')}` : '';
    return `I am looking to know more about the ${selectedBase?.name} package${featuresStr}. Total Estimated Budget: ${formatPrice(total)}`;
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBase) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSedhfM4b6UIRR5xZ7cQVsmpVMLNBuMdM2z6yRgURY7C4YFqOQ/formResponse";
    const body = new URLSearchParams();
    body.append("entry.1709925532", formData.name);
    body.append("entry.736719861", formData.company);
    body.append("entry.1321263650", formData.email);
    body.append("entry.290646291", buildDescription());
    body.append("entry.1801704685", getBudgetCategory(total));
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
    <main className="min-h-screen bg-gray-50 relative pb-32">
      <Navbar />
      
      <div className="pt-32 pb-12 px-6 max-w-6xl mx-auto">
        <Link href="/pricing" className="inline-flex items-center gap-2 font-bold text-black/60 hover:text-black mb-8 transition-colors">
          <span>←</span> Back to Pricing
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          <SketchHighlight color="blue">Project Estimator</SketchHighlight>
        </h1>
        <p className="text-xl font-ultra text-black/70">Map out your project requirements to get an instant estimate.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
        
        
        <div className="lg:col-span-8 relative">
          
          
          <div className="absolute left-[23px] md:left-[39px] top-10 bottom-0 w-1 bg-black/10 border-l-2 border-dashed border-black/30 z-0 hidden sm:block"></div>

          
          <div className="relative z-10 mb-20 flex flex-col sm:flex-row gap-6">
            <div className="hidden sm:flex flex-shrink-0 w-20 h-20 bg-white sketch-border rounded-full items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-2xl font-bold">
              1
            </div>
            <div className="flex-grow">
              <div className="bg-white sketch-border sketch-shadow p-6 md:p-8">
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Image src="/assets/icons/star-drawn.svg" alt="*" width={24} height={24} />
                  Choose Your Base Platform
                </h2>
                
                {['Website', 'E-Commerce', 'Web App', 'Mobile App'].map(category => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black/50 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {BASE_PACKAGES.filter(p => p.category === category).map(pkg => (
                        <button
                          key={pkg.id}
                          onClick={() => setSelectedBaseId(pkg.id)}
                          className={`text-left p-4 sketch-border transition-all duration-200 ${
                            selectedBaseId === pkg.id 
                            ? 'bg-black text-white shadow-[4px_4px_0_0_rgba(236,72,153,1)] scale-[1.02]' 
                            : 'bg-white text-black hover:bg-gray-50 hover:-translate-y-1'
                          }`}
                        >
                          <div className="font-bold text-lg">{pkg.name}</div>
                          <div className={`font-ultra mt-1 ${selectedBaseId === pkg.id ? 'text-white/80' : 'text-black/60'}`}>
                            {formatPrice(pkg.price)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className={`relative z-10 mb-20 flex flex-col sm:flex-row gap-6 transition-opacity duration-500 ${selectedBaseId ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <div className="hidden sm:flex flex-shrink-0 w-20 h-20 bg-white sketch-border rounded-full items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-2xl font-bold">
              2
            </div>
            <div className="flex-grow">
              <div className="bg-white sketch-border sketch-shadow p-6 md:p-8">
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Image src="/assets/icons/sparkles-drawn.svg" alt="*" width={24} height={24} />
                  Add Features & Functionality
                </h2>
                
                {Object.entries(FEATURES).map(([category, items]) => (
                  <div key={category} className="mb-8 last:mb-0">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black/50 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map(feature => {
                        const isSelected = selectedFeatures.has(feature.id);
                        return (
                          <button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`flex items-center gap-2 px-4 py-2 sketch-border transition-all duration-200 ${
                              isSelected 
                              ? 'bg-yellow-300 text-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]' 
                              : 'bg-white text-black hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-4 h-4 sketch-border flex items-center justify-center ${isSelected ? 'bg-black' : 'bg-white'}`}>
                              {isSelected && <span className="text-white text-[10px]">✓</span>}
                            </div>
                            <span className={isSelected ? 'font-bold' : 'font-ultra'}>{feature.name}</span>
                            <span className={`text-xs ${isSelected ? 'text-black/70' : 'text-black/50'}`}>+{formatPrice(feature.price)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className={`relative z-10 flex flex-col sm:flex-row gap-6 transition-opacity duration-500 ${selectedBaseId ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <div className="hidden sm:flex flex-shrink-0 w-20 h-20 bg-white sketch-border rounded-full items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-2xl font-bold">
              3
            </div>
            <div className="flex-grow">
              <div className="bg-white sketch-border sketch-shadow p-6 md:p-8">
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Image src="/assets/icons/loop-arrows-svgrepo-com.svg" alt="*" width={24} height={24} />
                  Design & Content Add-ons
                </h2>
                
                <div className="flex flex-wrap gap-3">
                  {DESIGN_AND_CONTENT.map(item => {
                    const isSelected = selectedFeatures.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleFeature(item.id)}
                        className={`flex items-center gap-2 px-4 py-2 sketch-border transition-all duration-200 ${
                          isSelected 
                          ? 'bg-pink-300 text-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]' 
                          : 'bg-white text-black hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 sketch-border flex items-center justify-center ${isSelected ? 'bg-black' : 'bg-white'}`}>
                          {isSelected && <span className="text-white text-[10px]">✓</span>}
                        </div>
                        <span className={isSelected ? 'font-bold' : 'font-ultra'}>{item.name}</span>
                        <span className={`text-xs ${isSelected ? 'text-black/70' : 'text-black/50'}`}>+{formatPrice(item.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        
        <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-20">
          <motion.div 
            className="bg-black text-white sketch-border sketch-shadow p-6 md:p-8 flex flex-col"
            animate={{ scale: total > 0 ? 1 : 0.95, opacity: total > 0 ? 1 : 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white/20 pb-4">Estimated Cost</h3>
            
            <div className="space-y-4 font-ultra mb-8 flex-grow">
              <div className="flex justify-between items-start gap-4">
                <span className="text-white/80">Base Package: {selectedBase?.name || "None"}</span>
                <span className="font-bold text-white shrink-0">{formatPrice(basePrice)}</span>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <span className="text-white/80">Selected Features ({Array.from(selectedFeatures).filter(id => !id.startsWith('d-') && !id.startsWith('c-')).length})</span>
                <span className="font-bold text-white shrink-0">{formatPrice(featuresPrice)}</span>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <span className="text-white/80">Design & Content ({Array.from(selectedFeatures).filter(id => id.startsWith('d-') || id.startsWith('c-')).length})</span>
                <span className="font-bold text-white shrink-0">{formatPrice(designPrice)}</span>
              </div>
            </div>

            <div className="border-t-2 border-white/20 pt-6 mb-6">
              <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-1">Estimated Total</div>
              <div className="text-4xl md:text-5xl font-bold text-highlight-yellow">{formatPrice(total)}</div>
            </div>

            <p className="text-sm font-ultra text-white/60 bg-white/5 p-4 sketch-border border-dashed mb-6">
              * Most projects range between ₹60,000 and ₹1,50,000 depending on complexity. This is an estimate, not a final quote.
            </p>

            <button 
              disabled={total === 0}
              onClick={() => { setSubmitStatus("idle"); setIsModalOpen(true); }}
              className={`block w-full py-4 text-center font-bold text-lg sketch-border transition-colors ${
              total > 0 
              ? 'bg-white text-black hover:bg-highlight-pink hover:text-black shadow-[4px_4px_0_0_rgba(236,72,153,1)]' 
              : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}>
              Discuss This Project →
            </button>
          </motion.div>
        </div>

      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white sketch-border sketch-shadow p-8 md:p-12 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setSubmitStatus("idle");
              }}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center font-bold text-xl sketch-border hover:bg-pink-100 transition-colors"
            >
              ✕
            </button>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold text-black mb-4">Request Sent!</h3>
                <p className="font-ultra text-lg text-black/80">We've received your project requirements. We will be in touch shortly.</p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 w-full py-3 bg-black text-white font-bold sketch-border hover:bg-highlight-yellow hover:text-black transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-black mb-2">Request Consultation</h3>
                <p className="font-ultra text-lg text-black/70 mb-8">Enter your details below to discuss this estimate.</p>
                
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
