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
  return <ContactPageClient />;
}
