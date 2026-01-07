import type { Metadata } from "next";
import PaasNavbar from "../components/PaasNavbar";
import { PricingFilter } from "./components/PricingFilter";
import ComparisonSection from "../../components/ComparisonSection";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";
import FAQ1 from "../../components/FAQ1";

export const metadata: Metadata = {
  title: "Cost-Effective Cloud Pricing | Cantech Cloud",
  description: "",
  keywords: [
    "Cloud Pricing",
    "Cloud service costs",
    "Cost-effectiveness cloud solutions",
  ],
   
  openGraph: {
    title: "PHP Hosting – Fast, Secure & Scalable | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/pricing",
    description: "",
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
    canonical: "https://www.cantech.cloud/paas/pricing",
  },
};

export default function PassPricing() {
  return (
  <>
    <PaasNavbar />
    <PricingFilter />
    <ComparisonSection
      CompHeading="Better Savings with Our Cloud Service Costs"
      CompDescription="Our Cloud Pricing stays much lower than others. We bill for exact usage. This ensures the cost-effectiveness of cloud solutions. You save more with our fast servers."
    />
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