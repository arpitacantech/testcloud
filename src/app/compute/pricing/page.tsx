import type { Metadata } from "next";

import ComputeNavbar from "../components/ComputeNavbar";
import { HeroSection } from "./components/HeroSection";
import { OSAccordion } from "./components/OSAccordion";
import { osCategories } from "@/data/serverPlans";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";
import FAQ1 from "./components/FAQ1";

export const metadata: Metadata = {
  title: "Cloud Compute Pricing: Transparent & Flexible | Cantech Cloud",
  description: "Explore Cantech Cloud compute pricing for virtual machines, Kubernetes and scalable cloud resources with transparent, usage-based billing and no hidden costs.",
  keywords: [
    "Cloud Compute Pricing",
    "Cloud Compute Price",
    "Cloud Compute Cost",
  ],
   
  openGraph: {
    title: "Cloud Compute Pricing: Transparent & Flexible | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/compute/pricing",
    description: "Explore Cantech Cloud compute pricing for virtual machines, Kubernetes and scalable cloud resources with transparent, usage-based billing and no hidden costs.",
    type: "website",
    images: [
      {
        url: "/assets/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Cantech Cloud",
      },
    ],
  },

  alternates: {
    canonical: "https://www.cantech.cloud/compute/pricing",
  },
};

export default function ComputePricing() {
  return (
  <>
    <ComputeNavbar />
    <div className="min-h-screen bg-background">
      <HeroSection />
      <section className="animate-fade-in pb-6" style={{ animationDelay: "200ms" }}>
        <div className="text-center mb-10 max-w-7xl mx-auto">
          <h2 className="cc-h2">Choose the Right Cloud Compute Plan that Fits You</h2>
          <p className="subtitle">Scale confidently by choosing our flexible priced cloud compute plans. Enjoy DDoS protection, automated backups and 24/7 expert support included.</p>
        </div>
        <OSAccordion osCategories={osCategories} defaultOpen="linux"/>
      </section>
    </div>
    <FAQ1 />
    <FooterCTA
      titleLine1="Let’s Build Your Cloud"
      titleLine2="the Right Way"
      description="Our team is here to help you choose, deploy, and manage the right cloud solution with complete peace of mind."
      // buttonText="Let's Talk"
      // buttonLink="/contact"
    />
    <Footer />
  </>
  );
}