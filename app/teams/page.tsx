import Teams from "@/views/teams";
import { Metadata } from "next";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: `Our Team - ${company.name} | Expert Travel & Visa Professionals`,
  description: `Meet the expert team at ${company.name}. Our dedicated travel and visa professionals are committed to providing exceptional service and personalized attention for your journey.`,
  keywords: [
    "Travel team",
    "Visa experts",
    "Travel consultants",
    "Professional team",
    company.name,
    "Travel professionals Bangladesh",
  ],
};

const TeamsPage = () => {
  return (
    <>
      <Teams />
    </>
  );
};

export default TeamsPage;
