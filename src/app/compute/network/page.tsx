
import Navbar from "../components/ComputeNavbar";
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1";
import BentoGrid from "./components/BentoGrid";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import FAQ from "./components/FAQ";
import FooterCTA from "../../components/FooterCTA";
import Footer from "../../components/Footer";

export default function paas() {
  return (
  <main >
    <Navbar />
    <Hero />
    <Feature1 />
    <BentoGrid />
    <Feature2 />
    <Feature3 />
    <FAQ />
    <FooterCTA
        titleLine1="Design Networks That Scale "
        titleLine2="as You Grow"
        description="From startups to enterprises, Cantech delivers reliable cloud network services.
 Launch your secure cloud network in minutes."
        // buttonText="Let's Talk"
        // buttonLink="/contact"
      />
      <Footer />


</main>


  );
}