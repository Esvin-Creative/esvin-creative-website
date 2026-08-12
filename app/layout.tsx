import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-kalam" });

export const metadata: Metadata = {
  title: "Esvin Creative | Build. Design. Innovate.",
  description:
    "Esvin Creative is a software studio focused on creating practical, scalable, and modern digital products. We build websites, mobile apps, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <body className={`${inter.variable} ${kalam.variable} antialiased bg-white text-black`}>{children}</body>
    </html>
  );
}
