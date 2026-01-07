import type { Metadata } from "next";
import PaasNavbar from "../../components/PaasNavbar";
import HeroInside from "./components/HeroInside";
import DifferentiationSection from "./components/DifferentiationSection";
import ScrollCards from "./components/ScrollCards";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "../../../components/ComparisonSection";
import FooterCTA from "../../../components/FooterCTA";
import Faq from "./components/Faq";
import Footer from "@/src/app/components/Footer";

export const metadata: Metadata = {
  title: "PHP Hosting – Fast, Secure & Scalable | Cantech Cloud",
  description: "Cantech Cloud offers PHP hosting with scalable infrastructure, fast performance, built-in security and managed services for modern web and business applications.",
  keywords: [
    "PHP Hosting",
    "Managed PHP Hosting",
    "Cloud PHP Hosting",
  ],
   
  openGraph: {
    title: "PHP Hosting – Fast, Secure & Scalable | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/application/php-hosting",
    description: "Cantech Cloud offers PHP hosting with scalable infrastructure, fast performance, built-in security and managed services for modern web and business applications.",
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
    canonical: "https://www.cantech.cloud/paas/application/php-hosting",
  },
};

export default function paas() {
  return (
    <>
      <PaasNavbar  />
      <HeroInside />
      <DifferentiationSection />
      <ScrollCards />
      <ComparisonSection
        CompHeading="Why Cantech Cloud is Better than Other PHP Hosting Companies"
        CompDescription="Most providers hide their extra costs and offer very slow support. Cantech Cloud simplifies your Application Hosting experience right from the start."
      />
      <KeyFeatures />
      <Faq />
      <FooterCTA
        titleLine1="Dedicated Support for"
        titleLine2="Managed PHP Hosting"
        description="We have a 24-hour online technical team. We assist you in migrations and server settings via Live Chat, Calls and Emails. You communicate with professionals who know how to optimize the PHP code and database."
        // buttonText="Let's Talk"
        // buttonLink="/contact"
      /> 
      <Footer />
    </>
  );
}
