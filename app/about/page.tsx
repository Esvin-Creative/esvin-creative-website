import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Esvin Creative | Software & Cloud Engineering Partner",
  description: "Esvin Creative provides technology consulting, software development, cloud infrastructure, and digital transformation services for modern organizations.",
  alternates: {
    canonical: "https://www.esvincreative.in/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "About" }
    ]
  };

  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutPageClient />
    </>
  );
}
