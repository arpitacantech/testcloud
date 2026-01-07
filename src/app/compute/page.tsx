import type { Metadata } from "next";
import ComputeNavbar from "./components/ComputeNavbar";
import HeroCompute from "./components/HeroCompute";
// import DifferentiationSection from "./components/DifferentiationSection";
// import TextParallaxContentExample from "./components/text-parallax-content-scroll";
import AnimatedCard from "./components/AnimatedCard";
import Feature1 from "./components/Feature1";
import { Feature2 } from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Featured_05 from "./components/globe";
import Feature4 from "./components/Feature4";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import FAQ1 from "./components/FAQ1";

export const metadata: Metadata = {
  title: "Cloud Compute Solutions & Services | Cantech Cloud",
  description: "Power your workloads with reliable cloud compute services. Get scalable compute solutions, optimized cloud costs, and flexible compute products for every business need.",
  keywords: [
    "Compute",
    "Cloud Compute",
    "Compute Solutions",
  ],
   
  openGraph: {
    title: "Cloud Compute Solutions & Services | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/compute",
    description: "Power your workloads with reliable cloud compute services. Get scalable compute solutions, optimized cloud costs, and flexible compute products for every business need.",
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
    canonical: "https://www.cantech.cloud/compute",
  },
};

export default function Home() {
  return (
   <>
    <ComputeNavbar />
    <HeroCompute />
    <AnimatedCard
      title="What Sets Cantech Cloud Compute Apart"
      description1="Cantech cloud offers cloud compute solutions that focus on performance, flexibility and security that ensures reliable operations while enabling scalable and efficient growth."
      // description2="Explore topics such as resource allocation, scaling, monitoring, and best practices."
      imageSrc="/assets/images/compute/what-sets-cantech-cloud-compute-apart.webp"
      imageAlt="What Sets Cantech Cloud Compute Apart | Cantech Cloud"
    />
    <AnimatedCard
      title="Scalable and On-Demand Cloud Compute Solutions"
      description1="Deploy high performance cloud compute worldwide with flexible pricing, enterprise stability and effortless scalability across workloads."
      // description2="Explore topics such as resource allocation, scaling, monitoring, and best practices."
      imageSrc="/assets/images/compute/scalable-and-on-demand-cloud-compute solutions.webp"
      imageAlt="Scalable and On-Demand Cloud Compute Solutions | Cantech Cloud"
      reverse
    />
    <Feature1 />
    <Feature2 />
    <Feature3 />
    <Featured_05 />
    <Feature4 />
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
