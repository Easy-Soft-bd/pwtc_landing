"use client";

import Image from "next/image";
import {
  Users,
  Award,
  Heart,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { routes, company } from "@/lib/config";

// Import team photos from Teams folder (PNG)
import ceoPic from "@/components/assets/Teams/ceo.png";
import HemaPic from "@/components/assets/Teams/hema.png";
import KeyaPic from "@/components/assets/Teams/keya.png";
import TakaddoomPic from "@/components/assets/Teams/taka.png";
import TahsinPic from "@/components/assets/Teams/ahmed.png";
import MouPic from "@/components/assets/Teams/mou.png";
import RabbiPic from "@/components/assets/Teams/rabbi.png";
import EmonPic from "@/components/assets/Teams/emon.png";

const Teams = () => {
  // Team members data - Using two PNG images as placeholders
  const teamMembers = [
    {
      id: 1,
      name: "MD Masud Parvez",
      role: "CEO & Founder",
      image: ceoPic,
      description: "CEO & Founder of Privilege World Travel Club",
    },
    {
      id: 2,
      name: "MST. Rabeya Akter",
      role: "Proprietor & Founder",
      image: HemaPic,
      description: "Proprietor & Founder of Privilege World Travel Club",
    },
    {
      id: 3,
      name: "Keya Mir",
      role: "Manager and Admin",
      image: KeyaPic,
      description:
        "Manager of Privilege World Travel Club. She is the backbone of the company.",
    },
    {
      id: 4,
      name: "Mir Takaddoom Ali",
      role: "Senior Visa Executive",
      image: TakaddoomPic,
      description:
        "Senior Visa Executive of Privilege World Travel Club. He is the expert in visa processing and travel planning.",
    },
    {
      id: 5,
      name: "Md Tahsin Ahmed",
      role: "Visa Executive",
      image: TahsinPic,
      description:
        "Visa Executive of Privilege World Travel Club. He is the expert in visa processing and travel planning.",
    },
    {
      id: 6,
      name: "Tabassum Akter Mou",
      role: "Visa Executive",
      image: MouPic,
      description:
        "Visa Executive of Privilege World Travel Club. He is the expert in visa processing and travel planning.",
    },
    {
      id: 7,
      name: "Rabbi Hossain",
      role: "Visa Executive",
      image: RabbiPic,
      description:
        "Visa Executive of Privilege World Travel Club. He is the expert in visa processing and travel planning.",
    },
    {
      id: 8,
      name: "Abu Rayhan Emon",
      role: "Visa Executive",
      image: EmonPic,
      description:
        "Visa Executive of Privilege World Travel Club. He is the expert in visa processing and travel planning.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for travel and helping others explore",
    },
    {
      icon: Target,
      title: "Dedication",
      description: "Focused on achieving your travel goals",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly improving our services and processes",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide">
                Our Premium Team
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-lg">
              Meet Our Expert Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Our dedicated team of travel and visa experts is committed to
              providing you with exceptional service and personalized attention
              for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                Our Values
              </span>
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              What Drives Us
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              Our team is united by shared values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="mb-6 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members Grid Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                Our Team
              </span>
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              The People Behind{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">
                  {company.shortName}
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate professionals dedicated to making your travel
              dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-surface border border-light/20 rounded-2xl overflow-hidden shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ripple animation background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="ripple-1 absolute top-0 right-0 w-0 h-0 rounded-full bg-primary/30 blur-xl"></div>
                    <div className="ripple-2 absolute top-0 right-0 w-0 h-0 rounded-full bg-accent/20 blur-xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs md:text-sm text-secondary/70 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Our team is here to help you with all your travel and visa needs.
              Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={routes.visa}
                className="group bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>Explore Visa Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href={routes.aboutUs}
                className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300 inline-block text-center shadow-xl"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
