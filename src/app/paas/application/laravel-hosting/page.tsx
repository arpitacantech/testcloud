import type { Metadata } from "next";
import PaasNavbar from "../../components/PaasNavbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "../../../components/ComparisonSection";
import FooterCTA from "../../../components/FooterCTA";
import Faq from "./components/Faq";
import Footer from "@/src/app/components/Footer";

export const metadata: Metadata = {
  title: "Laravel Hosting on Cloud PaaS | Cantech Cloud",
  description: "Host Laravel applications on Cantech Cloud with managed PaaS, auto-scaling, high performance, built-in security and optimized infrastructure for production workloads.",
  keywords: [
    "Laravel Hosting",
    "Laravel PaaS Hosting",
    "Laravel Application Hosting",
  ],
   
  openGraph: {
    title: "Laravel Hosting on Cloud PaaS | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/application/laravel-hosting",
    description: "Host Laravel applications on Cantech Cloud with managed PaaS, auto-scaling, high performance, built-in security and optimized infrastructure for production workloads.",
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
    canonical: "https://www.cantech.cloud/paas/application/laravel-hosting",
  },
};

export default function LaravelHosting() {
  return (
  <>
  <PaasNavbar />
  <HeroSection />
  <Features/>
  <CardSection />
  <ComparisonSection
    CompHeading="Cantech’s Smart Choice for Laravel PaaS Hosting"
    CompDescription="Cantech Cloud offers a fair billing model. You do not pay for idle server space and get dedicated resources so that the other users will not slow down your site. Our Laravel PaaS Hosting eliminates the need for costly DevOps engineers."
  />
  <KeyFeatures />
  <FooterCTA
    titleLine1="Expert Support for Your"
    titleLine2="Laravel Infrastructure"
    description="Our technical team is available 24/7 to assist you with the setup of your server and technical problems through live chat, support tickets, and phone calls. You may also discuss with us the integration with GitHub, Redis caching, or such tools as Git, Composer, and Artisan commands."
    // buttonText="Let's Talk"
    // buttonLink="/contact"
  />
  <Faq />
  <Footer />
  </>
  );
}
