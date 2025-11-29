"use client";

import { useState, useMemo } from "react";
import { Search, X, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const countries = [
  { name: "Singapore", region: "asia", flagCode: "sg", verified: true },
  { name: "Malaysia", region: "asia", flagCode: "my", verified: true },
  { name: "Thailand", region: "asia", flagCode: "th", verified: false },
  {
    name: "United Arab Emirates",
    region: "middle-east",
    flagCode: "ae",
    verified: true,
  },
  {
    name: "Saudi Arabia",
    region: "middle-east",
    flagCode: "sa",
    verified: true,
  },
  { name: "Qatar", region: "middle-east", flagCode: "qa", verified: true },
  { name: "Kuwait", region: "middle-east", flagCode: "kw", verified: false },
  { name: "Oman", region: "middle-east", flagCode: "om", verified: false },
  { name: "Bahrain", region: "middle-east", flagCode: "bh", verified: false },
  { name: "United Kingdom", region: "europe", flagCode: "gb", verified: true },
  { name: "United States", region: "americas", flagCode: "us", verified: true },
  { name: "Canada", region: "americas", flagCode: "ca", verified: true },
  { name: "Australia", region: "oceania", flagCode: "au", verified: true },
  { name: "New Zealand", region: "oceania", flagCode: "nz", verified: true },
  { name: "Japan", region: "asia", flagCode: "jp", verified: true },
  { name: "South Korea", region: "asia", flagCode: "kr", verified: true },
  { name: "China", region: "asia", flagCode: "cn", verified: false },
  { name: "Hong Kong", region: "asia", flagCode: "hk", verified: true },
  { name: "Turkey", region: "middle-east", flagCode: "tr", verified: false },
  { name: "Egypt", region: "middle-east", flagCode: "eg", verified: false },
  { name: "Jordan", region: "middle-east", flagCode: "jo", verified: false },
  { name: "Lebanon", region: "middle-east", flagCode: "lb", verified: false },
  { name: "India", region: "asia", flagCode: "in", verified: true },
  { name: "Sri Lanka", region: "asia", flagCode: "lk", verified: false },
  { name: "Nepal", region: "asia", flagCode: "np", verified: false },
  { name: "Maldives", region: "asia", flagCode: "mv", verified: false },
  { name: "Indonesia", region: "asia", flagCode: "id", verified: false },
  { name: "Philippines", region: "asia", flagCode: "ph", verified: false },
  { name: "Vietnam", region: "asia", flagCode: "vn", verified: false },
  { name: "Cambodia", region: "asia", flagCode: "kh", verified: false },
  { name: "Myanmar", region: "asia", flagCode: "mm", verified: false },
  { name: "Bangladesh", region: "asia", flagCode: "bd", verified: false },
];

const regions = [
  { id: "all", label: "All Countries" },
  { id: "asia", label: "Asia" },
  { id: "middle-east", label: "Middle East" },
  { id: "europe", label: "Europe" },
  { id: "americas", label: "Americas" },
  { id: "oceania", label: "Oceania" },
];

const CountriesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredCountries = useMemo(() => {
    let filtered = countries;

    // Filter by region
    if (selectedRegion !== "all") {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedRegion]);

  return (
    <section className="relative w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
              Visa Services
            </span>
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Countries We Serve
          </h2>
          <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto mb-8">
            We provide visa processing services for destinations across the
            globe
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Search Bar - First */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-light/20 rounded-xl pl-12 pr-12 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/50 hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedRegion === region.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-surface border border-light/20 text-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {filteredCountries.map((country, index) => {
              // Generate route path from country name
              const routePath = `/visa/${country.name
                .toLowerCase()
                .replace(/\s+/g, "-")}-visa-processing`;

              return (
                <Link key={index} href={routePath} className="relative block">
                  {/* Verification Badge - Outside overflow container */}
                  {country.verified && (
                    <div className="absolute -top-2 -right-2 z-20 bg-success text-white rounded-full p-1.5 shadow-lg border-2 border-surface">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}

                  {/* Card with overflow-hidden */}
                  <div className="group relative bg-surface border border-light/20 rounded-xl p-4 md:p-5 shadow-sm hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden cursor-pointer">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 overflow-hidden bg-surface border border-light/10 relative">
                        {country.flagCode ? (
                          <Image
                            src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                            alt={`${country.name} flag`}
                            width={40}
                            height={30}
                            className="object-cover rounded"
                            unoptimized
                          />
                        ) : (
                          <span className="text-2xl">🌍</span>
                        )}
                      </div>
                      <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {country.name}
                      </span>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-secondary/70 mb-4">
              No countries found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("all");
              }}
              className="text-primary font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary/60">
            Don&apos;t see your destination?{" "}
            <Link
              href="#contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </Link>{" "}
            to inquire about visa services for other countries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
