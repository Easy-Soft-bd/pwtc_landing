import Visa from "@/views/visa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Services - Privileged World Travel Club",
  description:
    "Expert visa processing services for international travel. Fast, reliable, and professional visa assistance.",
};

const VisaPage = () => {
  return (
    <>
      <Visa />
    </>
  );
};

export default VisaPage;
