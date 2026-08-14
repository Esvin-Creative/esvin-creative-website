import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing & Packages | Esvin Creative",
  description: "Transparent pricing for custom software, websites, mobile apps, and digital infrastructure projects. Choose a package or build a custom quote with our project estimator.",
  alternates: {
    canonical: "https://www.esvincreative.in/pricing",
  },
};

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Pricing" }
    ]
  };

  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PricingPageClient />
    </>
  );
}
