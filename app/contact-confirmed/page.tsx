import type { Metadata } from "next";
import ContactConfirmedPageClient from "./ContactConfirmedPageClient";

export const metadata: Metadata = {
  title: "Thank You | Esvin Creative",
  description: "Thank you for contacting Esvin Creative's engineering team. We will get back to you soon.",
  alternates: {
    canonical: "https://www.esvincreative.in/contact-confirmed",
  },
};

export default function ContactConfirmedPage() {
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
      <ContactConfirmedPageClient />
    </>
  );
}
