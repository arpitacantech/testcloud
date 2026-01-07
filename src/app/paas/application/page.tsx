import PaasNavbar from "../components/PaasNavbar";
import HeroSection from "./components/HeroSection";
import ApplicationSection from "./components/ApplicationSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ComparisonSection from "../../components/ComparisonSection";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";
import FAQ1 from "./components/FAQ1";

export default function paas() {
  return (
  <>
  <PaasNavbar />
  <HeroSection />
  <ApplicationSection />
  <DifferentiationSection />
  <ComparisonSection
    CompHeading="How We Compare in the PaaS Market"
    CompDescription="Most providers hide their extra costs and offer very slow support. Cantech Cloud simplifies your Application Hosting experience right from the start."
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
