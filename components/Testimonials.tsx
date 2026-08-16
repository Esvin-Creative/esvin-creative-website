import SketchHighlight from "./SketchHighlight";
import Script from "next/script";

export interface Testimonial {
  authorName: string;
  authorTitle: string;
  company: string;
  quote: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
 
 
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 border-y-2 border-dashed border-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-ultra text-black mb-6">
            Client <SketchHighlight color="pink">Testimonials</SketchHighlight>
          </h2>
          <p className="text-xl font-ultra text-black/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with Esvin Creative.
          </p>
        </div>

        {!hasTestimonials ? (
          <div className="bg-white p-12 text-center sketch-border sketch-shadow max-w-3xl mx-auto">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-3xl font-bold font-ultra text-black mb-4">Testimonials coming soon.</h3>
            <p className="text-lg font-ultra text-black/60 mb-8">
              We are currently compiling success stories and feedback from our recent client engagements. In the meantime, you can find us listed on:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "GoodFirms", href: "https://www.goodfirms.co/company/esvin-creative" },
                { name: "Sortlist", href: "https://www.sortlist.com/agency/esvin-creative" },
                { name: "Crunchbase", href: "https://www.crunchbase.com/organization/esvin-creative-eaf3" },
                { name: "F6S", href: "https://www.f6s.com/esvin-creative" },
              ].map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white text-black font-ultra font-bold sketch-border hover:-translate-y-1 hover:bg-highlight-yellow/30 transition-all"
                >
                  {profile.name}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 sketch-border sketch-shadow relative" itemScope itemType="https://schema.org/Review">
                <div className="text-4xl text-highlight-yellow absolute -top-4 -left-4">"</div>
                <div itemProp="reviewBody" className="text-lg font-ultra text-black/80 mb-8 italic">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold font-ultra text-xl">
                    {testimonial.authorName.charAt(0)}
                  </div>
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div itemProp="name" className="text-lg font-bold font-ultra text-black">
                      {testimonial.authorName}
                    </div>
                    <div className="text-sm font-ultra text-black/60">
                      {testimonial.authorTitle}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
