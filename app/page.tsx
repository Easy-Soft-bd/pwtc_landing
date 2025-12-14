import Home from "@/views/home";
import { Metadata } from "next";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: `${company.name} | Singapore Authorized Visa Agent (AVA)`,
  description: company.tagline,
  openGraph: {
    type: "website",
    title: `${company.name} | Singapore Authorized Visa Agent (AVA)`,
    description: company.tagline,
    images: [
      {
        url: "/web-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Privileged World Travel Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Singapore Authorized Visa Agent (AVA)`,
    description: company.tagline,
    images: ["/web-meta.jpg"],
  },
};

export default function index() {
  return (
    <>
      <Home />
    </>
  );
}
