import { MetadataRoute } from 'next';
import { execSync } from 'child_process';
import { caseStudies } from '@/lib/case-studies';





const FALLBACK_DATE = new Date('2026-08-17T00:00:00.000Z');

function lastModifiedFor(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    return iso ? new Date(iso) : FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { url: string; file: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { url: 'https://www.esvincreative.in', file: 'components/Hero.tsx', changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.esvincreative.in/about', file: 'app/about/AboutPageClient.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.esvincreative.in/company', file: 'app/company/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.esvincreative.in/contact', file: 'app/contact/ContactPageClient.tsx', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/services', file: 'app/services/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/software-development', file: 'app/software-development/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/mobile-app-development', file: 'app/mobile-app-development/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/cloud-infrastructure', file: 'app/cloud-infrastructure/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/aws-cloud-architecture', file: 'app/aws-cloud-architecture/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.esvincreative.in/technology-consulting', file: 'app/technology-consulting/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.esvincreative.in/portfolio', file: 'app/portfolio/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.esvincreative.in/case-studies', file: 'app/case-studies/page.tsx', changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://www.esvincreative.in/process', file: 'app/process/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.esvincreative.in/pricing', file: 'app/pricing/PricingPageClient.tsx', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.esvincreative.in/pricing/calculator', file: 'app/pricing/calculator/CalculatorPageClient.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.esvincreative.in/privacy', file: 'app/privacy/page.tsx', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.esvincreative.in/terms', file: 'app/terms/page.tsx', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `https://www.esvincreative.in/case-studies/${study.slug}`,
    file: 'lib/case-studies.ts',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...caseStudyRoutes].map(({ url, file, changeFrequency, priority }) => ({
    url,
    lastModified: lastModifiedFor(file),
    changeFrequency,
    priority,
  }));
}
