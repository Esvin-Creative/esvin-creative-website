import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t-2 border-dashed border-black relative overflow-hidden">
      <div className="absolute top-10 right-20 opacity-10 hidden md:block z-0 pointer-events-none">
        <Image src="/assets/icons/sparkles-drawn.svg" alt="Sparkles decorative background" width={160} height={160} className="w-40 h-40 animate-wobble" style={{ animationDelay: '2s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="md:w-1/2 lg:w-2/5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/icon.png"
                alt="Esvin Creative"
                width={160}
                height={160}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <h3 className="text-black text-3xl font-bold mb-4 font-ultra">
              Building systems that last.
            </h3>
            <p className="text-black/80 text-xl font-ultra leading-relaxed">
              Esvin Creative partners with organizations to design,
              deploy, and maintain the technology that powers
              their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full md:w-auto">
            <div>
              <h4 className="font-bold text-black mb-6 text-2xl font-ultra">Links</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">Contact</Link></li>
                <li><Link href="/services" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">All Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-6 text-2xl font-ultra">Services</h4>
              <ul className="space-y-4">
                <li><Link href="/software-development" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">Software Development</Link></li>
                <li><Link href="/mobile-app-development" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">Mobile App Development</Link></li>
                <li><Link href="/cloud-infrastructure" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">Cloud Infrastructure</Link></li>
                <li><Link href="/technology-consulting" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">Technology Consulting</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-6 text-2xl font-ultra">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@esvincreative.in" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">
                    hello@esvincreative.in
                  </a>
                </li>
                <li>
                  <a href="https://esvincreative.in" target="_blank" rel="noopener noreferrer" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">
                    esvincreative.in
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/esvin-creative" target="_blank" rel="noopener noreferrer" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/esvincreative.in" target="_blank" rel="noopener noreferrer" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Esvin-Creative" target="_blank" rel="noopener noreferrer" className="inline-block -my-2.5 py-2.5 text-lg font-ultra text-black/70 hover:text-black transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-dashed border-black flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-ultra text-black/60">
            © 2026 Esvin Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
