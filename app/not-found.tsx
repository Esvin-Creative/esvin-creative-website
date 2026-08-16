import type { Metadata } from "next";
import NotFoundClient from "./NotFoundClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Esvin Creative",
  description: "The page you are looking for does not exist or has been relocated. Explore Esvin Creative's software engineering, mobile apps, and cloud infrastructure services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
