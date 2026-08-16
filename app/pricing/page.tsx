import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";
import JsonLd from "@/components/JsonLd";

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

 
 
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Esvin Creative Project Packages",
    "provider": { "@id": "https://www.esvincreative.in/#organization" },
    "areaServed": { "@type": "Country", "name": "India" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Project Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Launch",
          "description": "Best for: Startups, small businesses, local organizations.",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": 15000,
            "maxPrice": 25000,
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "name": "Growth",
          "description": "Best for: Growing businesses requiring lead generation and stronger online presence.",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": 35000,
            "maxPrice": 75000,
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "name": "Digital Infrastructure",
          "description": "Best for: Educational institutions, enterprises, and organizations undergoing digital transformation.",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": 75000,
            "maxPrice": 250000,
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "name": "Mobile & Custom Software",
          "description": "Best for: Organizations requiring custom applications and platforms.",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": 150000,
            "priceCurrency": "INR"
          }
        }
      ]
    }
  };

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="pricing-schema" data={pricingSchema} />
      <PricingPageClient />
    </>
  );
}
