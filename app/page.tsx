import Home from "@/views/home";
import { Metadata } from "next";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privileged World Travel Club",
  description:
    "Privileged World Travel Club Privileged World Travel Club is a leading travel and visa services company based in Dhaka, Bangladesh. With over 16 years of experience in the travel industry, we have established ourselves as a trusted partner for thousands of travelers seeking premium travel experiences and reliable visa processing services.",
  openGraph: {
    type: "website",
    url: "https://privilegedworld.com",
    title: "Privileged World Travel Club",
    description:
      "Privileged World Travel Club Privileged World Travel Club is a leading travel and visa services company based in Dhaka, Bangladesh. With over 16 years of experience in the travel industry, we have established ourselves as a trusted partner for thousands of travelers seeking premium travel experiences and reliable visa processing services.",
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
    title: "Privileged World Travel Club",
    description:
      "Privileged World Travel Club Privileged World Travel Club is a leading travel and visa services company based in Dhaka, Bangladesh. With over 16 years of experience in the travel industry, we have established ourselves as a trusted partner for thousands of travelers seeking premium travel experiences and reliable visa processing services.",
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
