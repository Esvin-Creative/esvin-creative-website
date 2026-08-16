import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Esvin Creative",
  description: "How Esvin Creative collects, uses, and protects information submitted through this website.",
  alternates: {
    canonical: "https://www.esvincreative.in/privacy",
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-40 pb-16 px-6 md:px-12 border-b-2 border-dashed border-black">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-ultra text-black mb-6">Privacy Policy</h1>
          <p className="text-lg font-ultra text-black/60">Last updated: August 16, 2026</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-ultra prose-headings:font-bold prose-headings:text-black font-ultra text-black/80">
          <p>
            This policy explains what information Esvin Creative ("we," "us") collects through esvincreative.in, why we collect it, and how it's handled. It applies to this website only.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit the contact form, project inquiry form, or a pricing package inquiry, we collect the information you provide: your name, company or organization name, email address, project requirements, and — optionally — a budget range. This information is submitted directly to a Google Forms endpoint that we own and review; we do not sell or rent it to third parties.
          </p>
          <p>
            We do not require an account, password, or payment information to use this site, and we do not collect any of that data.
          </p>

          <h2>Analytics and Cookies</h2>
          <p>
            This site uses Google Analytics (via Google Tag Manager) and Vercel Analytics / Speed Insights to understand aggregate traffic patterns — for example, which pages are visited and how the site performs for visitors. These tools may set cookies or use similar identifiers in your browser. We do not use this data to identify individual visitors personally, and we do not combine it with the information you submit through our forms.
          </p>
          <p>
            You can disable analytics cookies through your browser settings or a browser extension; doing so does not affect your ability to use the site or contact us.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to your project inquiry or consultation request</li>
            <li>To understand how visitors use this site, so we can improve it</li>
            <li>To meet legal or accounting obligations where applicable</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            Inquiry submissions are retained for as long as needed to respond to your request and maintain a record of business communications. You can ask us to delete information you've submitted at any time by emailing us (see below).
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Form submissions are processed by Google Forms, subject to Google's own privacy policy. Analytics data is processed by Google Analytics and Vercel, subject to their respective privacy policies. We don't control how these providers handle data beyond what we configure directly.
          </p>

          <h2>Your Rights</h2>
          <p>
            You can ask what information we hold about you, request a correction, or request deletion, by emailing us at the address below. We will respond within a reasonable time.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If this policy changes, we'll update the date at the top of this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:hello@esvincreative.in">hello@esvincreative.in</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
