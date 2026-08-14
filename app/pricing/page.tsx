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
  return <PricingPageClient />;
}
