import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, ArrowRight, Shield } from "lucide-react";

// List of valid countries (should match CountriesSection)
const validCountries = [
  "singapore",
  "malaysia",
  "thailand",
  "united-arab-emirates",
  "saudi-arabia",
  "qatar",
  "kuwait",
  "oman",
  "bahrain",
  "united-kingdom",
  "united-states",
  "canada",
  "australia",
  "new-zealand",
  "japan",
  "south-korea",
  "china",
  "hong-kong",
  "turkey",
  "egypt",
  "jordan",
  "lebanon",
  "india",
  "sri-lanka",
  "nepal",
  "maldives",
  "indonesia",
  "philippines",
  "vietnam",
  "cambodia",
  "myanmar",
  "bangladesh",
];

// Country name mapping (slug to display name)
const countryNames: Record<string, string> = {
  "singapore": "Singapore",
  "malaysia": "Malaysia",
  "thailand": "Thailand",
  "united-arab-emirates": "United Arab Emirates",
  "saudi-arabia": "Saudi Arabia",
  "qatar": "Qatar",
  "kuwait": "Kuwait",
  "oman": "Oman",
  "bahrain": "Bahrain",
  "united-kingdom": "United Kingdom",
  "united-states": "United States",
  "canada": "Canada",
  "australia": "Australia",
  "new-zealand": "New Zealand",
  "japan": "Japan",
  "south-korea": "South Korea",
  "china": "China",
  "hong-kong": "Hong Kong",
  "turkey": "Turkey",
  "egypt": "Egypt",
  "jordan": "Jordan",
  "lebanon": "Lebanon",
  "india": "India",
  "sri-lanka": "Sri Lanka",
  "nepal": "Nepal",
  "maldives": "Maldives",
  "indonesia": "Indonesia",
  "philippines": "Philippines",
  "vietnam": "Vietnam",
  "cambodia": "Cambodia",
  "myanmar": "Myanmar",
  "bangladesh": "Bangladesh",
};

// Flag codes mapping
const flagCodes: Record<string, string> = {
  "singapore": "sg",
  "malaysia": "my",
  "thailand": "th",
  "united-arab-emirates": "ae",
  "saudi-arabia": "sa",
  "qatar": "qa",
  "kuwait": "kw",
  "oman": "om",
  "bahrain": "bh",
  "united-kingdom": "gb",
  "united-states": "us",
  "canada": "ca",
  "australia": "au",
  "new-zealand": "nz",
  "japan": "jp",
  "south-korea": "kr",
  "china": "cn",
  "hong-kong": "hk",
  "turkey": "tr",
  "egypt": "eg",
  "jordan": "jo",
  "lebanon": "lb",
  "india": "in",
  "sri-lanka": "lk",
  "nepal": "np",
  "maldives": "mv",
  "indonesia": "id",
  "philippines": "ph",
  "vietnam": "vn",
  "cambodia": "kh",
  "myanmar": "mm",
  "bangladesh": "bd",
};

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;
  const countrySlug = country.replace("-visa-processing", "");
  const countryName = countryNames[countrySlug] || "Country";

  return {
    title: `${countryName} Visa Processing - Privileged World Travel Club`,
    description: `Expert visa processing services for ${countryName}. Fast, reliable, and professional visa assistance.`,
  };
}

const CountryVisaPage = async ({ params }: CountryPageProps) => {
  const { country } = await params;
  // Extract country slug from route (remove -visa-processing suffix)
  const countrySlug = country.replace("-visa-processing", "");

  // Check if country is valid
  if (!validCountries.includes(countrySlug)) {
    notFound();
  }

  const countryName = countryNames[countrySlug];
  const flagCode = flagCodes[countrySlug];

  const features = [
    {
      icon: CheckCircle,
      text: "Expert visa consultation",
    },
    {
      icon: CheckCircle,
      text: "Document preparation assistance",
    },
    {
      icon: CheckCircle,
      text: "Application submission",
    },
    {
      icon: CheckCircle,
      text: "Status tracking",
    },
    {
      icon: CheckCircle,
      text: "98% success rate",
    },
    {
      icon: CheckCircle,
      text: "Fast processing time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-linear-to-br from-primary/10 via-transparent to-accent/10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 border border-accent/20 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 text-secondary/70 hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Countries</span>
            </Link>

            <div className="text-center">
              {/* Country Flag */}
              {flagCode && (
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-18 rounded-lg overflow-hidden bg-surface border border-light/20 shadow-lg">
                    <Image
                      src={`https://flagcdn.com/w80/${flagCode}.png`}
                      alt={`${countryName} flag`}
                      width={80}
                      height={60}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                </div>
              )}

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
                <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                  Visa Processing Services
                </span>
                <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {countryName}
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Visa Processing</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-secondary/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Trust our expert team to handle your {countryName} visa application
                with precision and care. We ensure a smooth, stress-free visa
                processing experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="tel:+8801819591111"
                  className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full py-16 md:py-20 bg-linear-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us for {countryName} Visa?
              </h2>
              <p className="text-base md:text-lg text-secondary/70">
                Experience the difference with our professional visa services
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-surface border border-light/20 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center text-success shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your {countryName} Visa Application?
            </h2>
            <p className="text-base md:text-lg text-secondary/70 mb-8">
              Contact our expert team today for personalized visa assistance and
              guidance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+8801819591111"
                className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryVisaPage;

