import { Metadata } from "next";
import Link from "next/link";
import { Home, Plane, MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Privileged World Travel Club",
  description: "The page you are looking for does not exist. Discover our premium visa services and travel experiences.",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Travel Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
          <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
            Oops! Wrong Destination
          </span>
          <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          This Page Doesn&apos;t Exist
        </h2>

        {/* Friendly Description */}
        <div className="space-y-4 mb-10">
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto leading-relaxed">
            Looks like you&apos;ve taken a wrong turn on your travel journey! 
            The page you&apos;re looking for isn&apos;t here, but don&apos;t worry - 
            your next adventure is just a click away.
          </p>
          
          <p className="text-base md:text-lg text-secondary/70 max-w-xl mx-auto leading-relaxed">
            At <span className="font-semibold text-primary">Privileged World Travel Club</span>, 
            we&apos;re here to make your travel dreams come true with expert visa processing 
            services and exclusive travel experiences. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Home className="w-6 h-6" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Service Highlights */}
        <div className="mt-12 pt-8 border-t border-light/20">
          <p className="text-base text-secondary/70 mb-6 font-medium">
            While you&apos;re here, explore what we offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/visa"
              className="bg-surface border-2 border-primary/20 hover:border-primary text-primary px-6 py-4 rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-3 justify-center group"
            >
              <Plane className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Visa Services</span>
            </Link>
            <Link
              href="/singapore-ava"
              className="bg-surface border-2 border-primary/20 hover:border-primary text-primary px-6 py-4 rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-3 justify-center group"
            >
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Singapore AVA</span>
            </Link>
          </div>
        </div>

        {/* Encouraging Message */}
        <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-light/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-sm md:text-base text-secondary/80 font-medium">
              Your next adventure awaits!
            </p>
          </div>
          <p className="text-xs md:text-sm text-secondary/60">
            Let us help you navigate your travel journey with confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

