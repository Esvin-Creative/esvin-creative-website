






export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  technologies: string[];
  summary: string;
  outcomes: string[];
  projectUrl?: string;
  datePublished: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sreyas-institute-of-engineering-and-technology",
    title: "Sreyas Institute of Engineering and Technology",
    client: "Sreyas Institute of Engineering and Technology",
    category: "Educational Institution Website",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    summary:
      "Complete digital presence overhaul for a leading engineering college. We architected and developed a fast, accessible, and scalable web platform to serve prospective students, current faculty, and administrative staff.",
    outcomes: [
      "Improved page load speeds",
      "Increased mobile engagement",
      "Streamlined admissions inquiry pipeline",
    ],
    projectUrl: "https://sreyas.ac.in",
    datePublished: "2025-06-01T09:00:00+05:30",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
