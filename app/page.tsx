import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import IndustriesWeSupport from "@/components/IndustriesWeSupport";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <IndustriesWeSupport />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <About />
      <TechStack />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
