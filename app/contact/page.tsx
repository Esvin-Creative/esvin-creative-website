import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Esvin Creative",
  description: "Schedule a consultation with Esvin Creative's engineering team in Hyderabad to discuss your software, mobile app, or cloud infrastructure requirements.",
  alternates: {
    canonical: "https://www.esvincreative.in/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Contact" }
    ]
  };

  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactPageClient />
    </>
  );
}
