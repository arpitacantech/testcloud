"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
import FeaturesSection from "./components/FeaturesSection";
import ComparisonSection from "./components/ComparisonSection";
import Testimonial from "./components/testimonial";
import FooterCTA from "./components/FooterCTA";
import FAQ1 from "./components/FAQ1";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <TwoCardSection />
      <FeaturesSection />
      <ComparisonSection
        CompHeading="Compare The Cantech Cloud Advantage"
        CompDescription="We offer better prices than global brands. Our storage is reliable and fast. You get more value for your money. Check our facts before you decide on a provider."
      />
      <Testimonial />
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