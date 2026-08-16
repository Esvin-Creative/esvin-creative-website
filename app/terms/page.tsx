import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service | Esvin Creative",
  description: "The terms that govern use of esvincreative.in and inquiries submitted through it.",
  alternates: {
    canonical: "https://www.esvincreative.in/terms",
  },
};

export default function TermsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.esvincreative.in" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />

      <section className="pt-40 pb-16 px-6 md:px-12 border-b-2 border-dashed border-black">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-ultra text-black mb-6">Terms of Service</h1>
          <p className="text-lg font-ultra text-black/60">Last updated: August 16, 2026</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-ultra prose-headings:font-bold prose-headings:text-black font-ultra text-black/80">
          <p>
            These terms govern your use of esvincreative.in (the "Site"), operated by Esvin Creative. By using the Site or submitting an inquiry through it, you agree to these terms.
          </p>

          <h2>Use of This Site</h2>
          <p>
            The Site and its content — text, graphics, pricing information, and the project cost calculator — are provided for informational purposes to help you evaluate Esvin Creative as a technology partner. Package prices and calculator estimates are indicative starting points, not binding quotes; a binding scope and price are only established through a written proposal following a consultation.
          </p>

          <h2>Inquiries and Consultations</h2>
          <p>
            Submitting the contact form, a package inquiry, or the cost calculator does not create a contract, retainer, or obligation on either side. It's a request to start a conversation. Any actual engagement is governed by a separate, signed agreement between Esvin Creative and the client, which takes precedence over anything described on this Site.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Site's design, copy, and branding belong to Esvin Creative. Case studies and portfolio entries describe real projects delivered for named clients; project names, logos, and screenshots referenced there remain the property of their respective owners and are shown with permission or as a factual description of completed work.
          </p>

          <h2>No Warranty</h2>
          <p>
            The Site is provided "as is." While we make reasonable efforts to keep pricing and content accurate and current, we don't guarantee the Site will be error-free or uninterrupted.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Esvin Creative is not liable for any indirect or consequential loss arising from your use of the Site itself. This does not limit liability arising from a separate signed client agreement, which is governed by its own terms.
          </p>

          <h2>External Links</h2>
          <p>
            The Site links to third-party profiles (for example, GitHub, LinkedIn, and business directories) and client project URLs. We aren't responsible for the content or practices of those external sites.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of India, and any dispute arising from use of this Site falls under the jurisdiction of the courts in Hyderabad, Telangana.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            If these terms change, we'll update the date at the top of this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:hello@esvincreative.in">hello@esvincreative.in</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
