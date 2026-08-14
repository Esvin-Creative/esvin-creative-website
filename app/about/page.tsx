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
  return <AboutPageClient />;
}
