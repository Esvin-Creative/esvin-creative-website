import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.esvincreative.in'),
  title: "Esvin Creative | Software & Cloud Engineering",
  description: "End-to-end technology partner for custom software, mobile apps, and cloud infrastructure. We engineer digital scale.",
  keywords: ["software development company hyderabad", "mobile app development company hyderabad", "cloud infrastructure services", "technology consulting", "digital transformation", "custom software development", "web development company india"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Esvin Creative | Software & Cloud Engineering",
    description: "End-to-end technology partner for custom software, mobile apps, and cloud infrastructure. We engineer digital scale.",
    url: "https://www.esvincreative.in",
    siteName: "Esvin Creative",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Esvin Creative - Technology Consulting and Software Engineering",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esvin Creative | Software & Cloud Engineering",
    description: "End-to-end technology partner for custom software, mobile apps, and cloud infrastructure. We engineer digital scale.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  manifest: '/site.webmanifest'
};






const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": "https://www.esvincreative.in/#organization",
  "name": "Esvin Creative",
  "url": "https://www.esvincreative.in",
  "logo": "https://www.esvincreative.in/logos/icon.png",
  "image": "https://www.esvincreative.in/logos/icon.png",
  "description": "Technology consulting, software development, mobile app development, and cloud infrastructure services.",
  "email": "hello@esvincreative.in",
  "priceRange": "₹₹",
  "foundingLocation": {
    "@type": "Place",
    "name": "Hyderabad, Telangana, India"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.3850,
    "longitude": 78.4867
  },
  "areaServed": [
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Secunderabad" },
    { "@type": "City", "name": "Khammam" },
    { "@type": "City", "name": "Warangal" },
    { "@type": "State", "name": "Telangana" }
  ],
  "sameAs": [
    "https://github.com/Esvin-Creative",
    "https://www.linkedin.com/company/esvin-creative",
    "https://instagram.com/esvincreative.in",
    "https://www.goodfirms.co/company/esvin-creative",
    "https://www.sortlist.com/agency/esvin-creative",
    "https://www.f6s.com/esvin-creative",
    "https://www.crunchbase.com/organization/esvin-creative-eaf3"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Esvin Creative",
  "url": "https://www.esvincreative.in"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bricolage.variable} antialiased bg-white text-black overflow-x-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />


        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-C7JGX7G0D2" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C7JGX7G0D2');
          `}
        </Script>


        <JsonLd id="org-schema" data={organizationSchema} />
        <JsonLd id="website-schema" data={webSiteSchema} />
      </body>
    </html>
  );
}
