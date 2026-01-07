import type { Metadata } from "next";
import PaasNavbar from "../components/PaasNavbar";
import HeroStorage from "./components/HeroStorage";
import FeatureSection from "./components/FeaturesSection";
import Storagetypes from "./components/Storagetypes";
import DifferentiationSection from "./components/DifferentiationSection";
import Faq from "./components/Faq";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Secure Cloud Storage Solutions & Services | Cantech Cloud",
  description: "Cantech Cloud delivers secure and scalable cloud storage solutions with reliable cloud storage services designed for application data, backups and enterprise workloads.",
  keywords: [
    "Cloud Storage Services",
    "Storage Solutions",
    "Cloud Storage Solutions",
  ],
   
  openGraph: {
    title: "Secure Cloud Storage Solutions & Services | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/storage",
    description: "Cantech Cloud delivers secure and scalable cloud storage solutions with reliable cloud storage services designed for application data, backups and enterprise workloads.",
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
    canonical: "https://www.cantech.cloud/paas/storage",
  },
};

export default function paas() {
  return (
  <>
    <PaasNavbar />
    <HeroStorage />
    <FeatureSection />
    <Storagetypes />
    <DifferentiationSection />
    <Faq/>
    <FooterCTA
    titleLine1="Cantech Cloud’s Dedicated"
    titleLine2="Support for Your Data"
    description="You can plan your storage strategy 24/7 with the assistance of our cloud professionals. You receive professional guidance on how to optimize your Backup Storage costs."
        // buttonText="Let's Talk"
        // buttonLink="/contact"
    />
    <Footer />
  </>
  );
}
