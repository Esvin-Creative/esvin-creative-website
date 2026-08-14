import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export interface PortfolioItem {
  name: string;
  client: string;
  category: string;
  technologies: string[];
  summary: string;
  outcomes: string[];
  projectUrl?: string;
  slug?: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": item.name,
    "creator": {
      "@type": "Organization",
      "name": "Esvin Creative"
    },
    "genre": item.category,
    "abstract": item.summary,
    "about": {
      "@type": "Organization",
      "name": item.client
    }
  };

  const colors = ["bg-highlight-pink", "bg-highlight-blue", "bg-highlight-yellow"];
  const color = colors[index % colors.length];

  return (
    <div className="bg-white p-8 md:p-12 sketch-border sketch-shadow relative group">
      <script id={`portfolio-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} sketch-border-b sketch-border-l z-0 opacity-50 group-hover:opacity-100 transition-opacity`} />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white text-sm font-ultra uppercase tracking-wider sketch-border mb-4">
              {item.category}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-ultra text-black mb-2">{item.name}</h2>
            <p className="text-xl font-ultra text-black/60">Client: {item.client}</p>
          </div>
          
          {item.projectUrl && (
            <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-ultra sketch-border hover:bg-gray-100 transition-colors shrink-0">
              View Project <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-ultra text-black mb-4">Summary</h3>
              <p className="text-lg font-ultra text-black/80 leading-relaxed">
                {item.summary}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-ultra text-black mb-4">Key Outcomes</h3>
              <ul className="space-y-3">
                {item.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-ultra text-black/80">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 sketch-border border-dashed">
              <h3 className="text-xl font-bold font-ultra text-black mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white border border-black text-sm font-ultra">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {item.slug && (
                <Link href={`/case-studies/${item.slug}`} className="inline-flex items-center gap-2 text-lg font-bold font-ultra text-black hover:underline group/link">
                  Read Case Study <ArrowRightIcon className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
              <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-bold font-ultra text-black/70 hover:text-black hover:underline">
                Start a similar project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
