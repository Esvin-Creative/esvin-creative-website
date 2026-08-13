import SketchHighlight from "./SketchHighlight";
import Image from "next/image";

export default function IndustriesWeSupport() {
  const industries = [
    { name: "Educational Institutions", color: "bg-highlight-pink" },
    { name: "Startups & Scale-ups", color: "bg-highlight-blue" },
    { name: "SMEs & Enterprise", color: "bg-highlight-yellow" },
    { name: "Non-Profits", color: "bg-highlight-pink" },
    { name: "Professional Services", color: "bg-highlight-blue" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black relative overflow-hidden">
      <div className="absolute right-10 top-10 opacity-30">
        <Image src="/assets/icons/star-drawn.svg" alt="Star decorative graphic" width={60} height={60} className="w-16 h-16 animate-wobble" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Industries We <SketchHighlight color="blue">Support</SketchHighlight>
          </h2>
          <p className="text-xl font-ultra text-black/70 max-w-2xl mx-auto">
            We partner with diverse organizations to solve complex operational challenges through tailored technology solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-white px-8 py-6 sketch-border sketch-shadow hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="text-xl font-bold font-ultra text-black">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
