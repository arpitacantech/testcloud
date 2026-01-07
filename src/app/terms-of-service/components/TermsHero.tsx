"use client";
import StarField from "../../components/StarField";
import HorizonGlow from "../../components/HorizonGlow";

const TermsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <StarField />
      <HorizonGlow />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up glow-text" style={{ ["--delay" as string]: "0.2s" }}>Terms of Services</h1>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default TermsHero;
