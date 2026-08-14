import type { Metadata } from "next";
import CalculatorPageClient from "./CalculatorPageClient";

export const metadata: Metadata = {
  title: "Project Cost Calculator | Esvin Creative",
  description: "Get an instant project cost estimate for your website, e-commerce store, web app, or mobile app. Select your platform and features to see a transparent, itemized price.",
  alternates: {
    canonical: "https://www.esvincreative.in/pricing/calculator",
  },
};

export default function CalculatorPage() {
  return <CalculatorPageClient />;
}
