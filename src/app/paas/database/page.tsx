import type { Metadata } from "next";
import Image from "next/image";
import PaasNavbar from "../components/PaasNavbar";
import Hero from "./components/Hero";
import DifferentiationSection from "./components/DifferentiationSection";
import DBTabs from './components/DBTabs';
import FeatureSection from "./components/FeatureSection";
import ComparisonSection from "../../components/ComparisonSection";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";
import Faq from "./components/Faq";

export const metadata: Metadata = {
  title: "Enterprise Database Hosting Services | Cantech Cloud",
  description: "Cantech Cloud provides enterprise database hosting services with secure, scalable database services and reliable hosting solutions built for modern cloud applications.",
  keywords: [
    "Database Hosting",
    "Database Services",
    "database hosting solutions",
    "Enterprise Database Hosting",
  ],
   
  openGraph: {
    title: "Enterprise Database Hosting Services | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/database",
    description: "Cantech Cloud provides enterprise database hosting services with secure, scalable database services and reliable hosting solutions built for modern cloud applications.",
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
    canonical: "https://www.cantech.cloud/paas/database",
  },
};

export default function Database() {
    return(
      <>
          <PaasNavbar />  
          <Hero />
          <DifferentiationSection />
          <DBTabs />
          <FeatureSection />
          <ComparisonSection
              CompHeading="Why Cantech Cloud Is Better"
              CompDescription="With Cantech Cloud database hosting, you do not share resources. We provide isolated containers to keep your data confidential. Our Enterprise Database Hosting includes automated scaling that adds RAM and does not require any manual work. Pay only for the exact cloud resources your database consumes every hour."
          />
          <Faq />
          <FooterCTA
            titleLine1="Get Expert Assistance for"
            titleLine2="Your Database Services"
            description="We help you with setup and optimization using tools like phpMyAdmin and MongoDB Compass. We use tools like BitNinja and advanced firewalls to prevent external threats. Our 24/7 staff is available through live chat, call, or the support ticket system."
            // buttonText="Let's Talk"
            // buttonLink="/contact"
          />
          <Footer />
      </>
    );
}
