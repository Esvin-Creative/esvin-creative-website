import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  metadataBase: new URL('https://esvincreative.in'),
  title: "Esvin Creative | Software & Cloud Engineering",
  description: "End-to-end technology partner for custom software, mobile apps, and cloud infrastructure. We engineer digital scale.",
  keywords: ["software development company hyderabad", "mobile app development company hyderabad", "cloud infrastructure services", "technology consulting", "digital transformation", "custom software development", "web development company india"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Esvin Creative | Software & Cloud Engineering",
    description: "End-to-end technology partner for custom software, mobile apps, and cloud infrastructure. We engineer digital scale.",
    url: "https://esvincreative.in",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Esvin Creative",
    "url": "https://esvincreative.in",
    "logo": "https://esvincreative.in/logo.png",
    "description": "Technology consulting, software development, mobile app development, and cloud infrastructure services.",
    "foundingLocation": {
      "@type": "Place",
      "name": "Hyderabad, Telangana, India"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Esvin Creative",
    "url": "https://esvincreative.in"
  };

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

        
        <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </body>
    </html>
  );
}
