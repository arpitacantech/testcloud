
import type { Metadata } from "next";
import Image from "next/image";
// import { motion } from "framer-motion";
import ComputeNavbar from "../components/ComputeNavbar";
import HeroSection from "./components/HeroSection";
import FeatureSection2 from "./components/FeatureSection2";
import FeatureSection3 from "./components/FeatureSection3";
import {ServicesSection} from "./components/ServicesSection"; 
import FAQ1 from "../../components/FAQ1";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Kubernetes Hosting as a Service | Cantech Cloud",
  description: "Run containerized applications with Kubernetes Hosting and Kubernetes as a Service. Fully managed Kubernetes-as-a-Service for secure, scalable deployments.",
  keywords: [
    "Kubernetes",
    "Kubernetes Hosting",
    "Kubernetes as a Service",
  ],
   
  openGraph: {
    title: "Kubernetes Hosting as a Service | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/compute/kubernetes",
    description: "Run containerized applications with Kubernetes Hosting and Kubernetes as a Service. Fully managed Kubernetes-as-a-Service for secure, scalable deployments.",
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
    canonical: "https://www.cantech.cloud/compute/kubernetes",
  },
};

export default function KubernetesPage()
{
    return(
    <>
      <ComputeNavbar />
      <HeroSection />
      <FeatureSection2 />
      <FeatureSection3 /> 
      <ServicesSection />
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
    )
}

const Index = () => {
  return (
     <ServicesSection />
  );
};