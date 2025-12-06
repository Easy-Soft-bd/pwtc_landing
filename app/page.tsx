import Home from "@/views/home";
import { Metadata } from "next";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: `Home - ${company.name} | Premium Travel & Visa Services`,
  description: company.tagline,
};

export default function index() {
  return (
    <>
      <Home />
    </>
  );
}
