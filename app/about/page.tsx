"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AISearchBlocks from "@/components/AISearchBlocks";
import SketchHighlight from "@/components/SketchHighlight";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
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
                <span className="text-gray-400 font-ultra">[Founder Photo Placeholder]</span>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-black">Esvin Joshua</h3>
                <p className="text-xl font-bold text-black/50 uppercase tracking-wide mt-1">[Founder Title]</p>
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
    </main>
  );
}
