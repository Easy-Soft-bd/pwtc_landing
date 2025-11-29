import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Visa Page Not Found - Privileged World Travel Club",
  description: "The visa page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
            Page Not Found
          </span>
          <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Visa Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-secondary/70 mb-8 max-w-xl mx-auto leading-relaxed">
          The visa processing page you are looking for does not exist or has
          been moved. Please check the URL or browse our available visa
          services.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/visa"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Visa Services</span>
          </Link>
          <Link
            href="/"
            className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            <span>Go to Home</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-light/20">
          <p className="text-sm text-secondary/60 mb-4">
            Looking for a specific country&apos;s visa information?
          </p>
          <Link
            href="/visa"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse All Countries</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
