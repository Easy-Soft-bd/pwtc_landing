import React from "react";
import {
  Plane,
  FileCheck,
  MapPin,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Clock,
  Briefcase,
} from "lucide-react";

interface JobCardProps {
  title: string;
  icon: React.ElementType;
  color: "blue" | "emerald";
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  email: string;
  phone: string;
  website: string;
  subject: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  icon: Icon,
  color,
  location,
  description,
  responsibilities,
  requirements,
  email,
  phone,
  website,
  subject,
}) => {
  const accentColor = color === "blue" ? "text-blue-600" : "text-emerald-600";
  const bgColor = color === "blue" ? "bg-blue-50" : "bg-emerald-50";
  const borderColor =
    color === "blue"
      ? "group-hover:border-blue-400"
      : "group-hover:border-emerald-400";
  const btnColor =
    color === "blue"
      ? "bg-blue-900 hover:bg-blue-800"
      : "bg-emerald-900 hover:bg-emerald-800";

  return (
    <div
      className={`group transition-all duration-300 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl ${borderColor} flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl ${bgColor} ${accentColor}`}>
          <Icon size={28} />
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Full-Time
        </span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>

      <div className="flex items-center text-gray-500 text-sm mb-4">
        <MapPin size={16} className="mr-1" />
        <span>Mirpur-1, Dhaka</span>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed italic border-l-4 border-gray-200 pl-4">
        "{description}"
      </p>

      <div className="space-y-6 flex-grow">
        <div>
          <h3 className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
            <Briefcase size={16} className="mr-2" /> Key Responsibilities
          </h3>
          <ul className="space-y-2">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-600 text-sm">
                <CheckCircle2
                  size={16}
                  className={`${accentColor} mr-2 mt-0.5 shrink-0`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
            <Clock size={16} className="mr-2" /> Requirements
          </h3>
          <ul className="space-y-2">
            {requirements.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Mail size={16} className="mr-3 text-gray-400" />
          <a
            href={`mailto:${email}`}
            className="hover:text-blue-600 transition-colors"
          >
            {email}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone size={16} className="mr-3 text-gray-400" />
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="hover:text-blue-600 transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
        className={`mt-6 w-full py-4 rounded-xl text-white font-bold text-center transition-all ${btnColor} shadow-lg shadow-gray-200 active:scale-95`}
      >
        Apply Now
      </a>
    </div>
  );
};

export default function HirePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-900 skew-y-[-2deg] origin-top-left -z-10 shadow-inner" />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Build the future of travel <span className="">together.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary leading-relaxed">
            Join <strong>Privilege World Travel Club</strong>. We’re a team of
            innovators and dreamers shaping the travel experience for thousands
            of clients.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <JobCard
            title="Ticketing Executive"
            icon={Plane}
            color="blue"
            description="Seeking a detail-oriented professional to manage complex airline reservations and global itineraries."
            responsibilities={[
              "Issue, reissue, refund, and cancel airline tickets",
              "Handle domestic and international flight bookings",
              "Manage PNRs, fare calculations, and itinerary changes",
              "Coordinate with airlines and travel partners",
              "Provide customer support and travel-related assistance",
              "Maintain accurate booking and payment records",
            ]}
            requirements={[
              "Experience as a Ticketing Executive or similar role preferred",
              "Knowledge of Amadeus / Galileo / Sabre (preferred)",
              "Good communication and customer service skills",
              "Ability to work under pressure and meet deadlines",
              "Computer and email proficiency",
            ]}
            email="privilegedworldceo@gmail.com"
            phone="+880 1819-591111"
            subject="Application: Ticketing Executive"
            location={""}
            website={""}
          />

          <JobCard
            title="Visa Executive"
            icon={FileCheck}
            color="emerald"
            description="Looking for an organized expert to navigate international visa protocols and provide client clarity."
            responsibilities={[
              "Handle visa applications and related documentation",
              "Guide clients on visa requirements and procedures",
              "Coordinate with embassies, consulates, and travel partners",
              "Track application status and ensure timely follow-ups",
              "Maintain proper records and client communication",
            ]}
            requirements={[
              "Experience as a Visa Executive or similar role preferred",
              "Good knowledge of visa procedures and documentation",
              "Strong communication and organizational skills",
              "Ability to work under deadlines",
              "Computer literacy (Email, Microsoft Office, PDF)",
            ]}
            email="privilegedworldceo@gmail.com"
            phone="+880 1819-591111"
            subject="Application: Visa Executive"
            location={""}
            website={""}
          />
        </div>

        {/* How to Apply Section */}
        <div className="bg-white border border-blue-300 rounded-3xl p-8 mb-6 text-left shadow-sm flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span role="img" aria-label="mail">
              📩
            </span>{" "}
            How to Apply:
          </h3>
          <p className="text-gray-700 text-lg">
            Send your updated CV to{" "}
            <a
              href="mailto:privilegedworldceo@gmail.com"
              className="text-blue-600 font-bold hover:underline"
            >
              privilegedworldceo@gmail.com
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            Phone / WhatsApp:{" "}
            <a
              href="tel:+8801819591111"
              className="text-blue-600 font-bold hover:underline"
            >
              +880 1819-591111
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            <span role="img" aria-label="memo">
              📝
            </span>{" "}
            Mention “Visa Executive” in the email subject line
          </p>
        </div>

        {/* Walk-In Applications Section */}
        <div className="bg-white border-l-4 border-blue-400 rounded-2xl p-6 mb-12 shadow flex flex-col gap-3">
          <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <span role="img" aria-label="pushpin">
              📌
            </span>{" "}
            Walk-In Applications Welcome:
          </h3>
          <p className="text-gray-700 text-base">
            Candidates can also apply directly at our office with their updated
            CV:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
            <span className="block text-md font-semibold text-blue-900">
              Office Address:
            </span>
            <span className="block text-blue-800 text-base mt-1">
              Room 33–34 (5th Floor), Mukto Bangla Shopping Complex, Mirpur-1,
              Dhaka-1216
            </span>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <Globe className="text-blue-600 animate-pulse" size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Not seeing the right role?
          </h3>
          <p className="text-gray-500 mb-6">
            We are always looking for talent. Visit our website to learn more
            about our culture.
          </p>
          <a
            href="https://www.privilegedworld.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-bold hover:underline"
          >
            Visit privilegedworld.com <Globe size={16} className="ml-2" />
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Privilege World. All rights reserved.
          </p>
          <p className="mt-2">
            Mukto Bangla Shopping Complex, Mirpur-1, Dhaka-1216
          </p>
        </div>
      </div>
    </div>
  );
}
