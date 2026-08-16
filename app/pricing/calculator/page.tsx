import type { Metadata } from "next";
import CalculatorPageClient from "./CalculatorPageClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Project Cost Calculator | Esvin Creative",
  description: "Get an instant project cost estimate for your website, e-commerce store, web app, or mobile app. Select your platform and features to see a transparent, itemized price.",
  alternates: {
    canonical: "https://www.esvincreative.in/pricing/calculator",
  },
};

export default function CalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.esvincreative.in/pricing" },
      { "@type": "ListItem", "position": 3, "name": "Calculator" }
    ]
  };

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <CalculatorPageClient />
    </>
  );
}
