import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import JsonLd from "@/components/JsonLd";

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

 
 
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Esvin Joshua",
    "jobTitle": "Founder",
    "worksFor": {
      "@id": "https://www.esvincreative.in/#organization"
    },
    "description": "Esvin Joshua is a software developer and technology enthusiast currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning. His work spans full-stack development, cloud infrastructure, mobile applications, and digital transformation initiatives.",
    "knowsAbout": ["Full-Stack Development", "Cloud Infrastructure", "Mobile Applications", "Digital Transformation"]
  };

 
 
  const teamSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Srinivas Yejarla",
      "jobTitle": "Lead Designer",
      "email": "srinivasy@esvincreative.in",
      "url": "https://www.linkedin.com/in/yejarla-srinivas/",
      "sameAs": ["https://www.linkedin.com/in/yejarla-srinivas/"],
      "worksFor": { "@id": "https://www.esvincreative.in/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Venkata Vardhan",
      "jobTitle": "Core Developer",
      "email": "venkatavardhan@esvincreative.in",
      "url": "https://www.linkedin.com/in/venkata-vardhan-675b66290/",
      "sameAs": ["https://www.linkedin.com/in/venkata-vardhan-675b66290/"],
      "worksFor": { "@id": "https://www.esvincreative.in/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Isaac Xavier",
      "jobTitle": "Core Developer",
      "email": "isaacx@esvincreative.in",
      "url": "https://www.linkedin.com/in/isaac-xavier-9331b12ba/",
      "sameAs": ["https://www.linkedin.com/in/isaac-xavier-9331b12ba/"],
      "worksFor": { "@id": "https://www.esvincreative.in/#organization" }
    }
  ];

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="person-schema" data={personSchema} />
      {teamSchemas.map((schema) => (
        <JsonLd key={schema.name} id={`person-schema-${schema.name.toLowerCase().replace(/\s+/g, "-")}`} data={schema} />
      ))}
      <AboutPageClient />
    </>
  );
}
