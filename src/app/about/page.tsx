import Navbar from "../components/Navbar";
import { HeroAbout } from "./components/HeroAbout";
import AnimatedCard from "./components/AnimatedCard";
import TabSection from "./components/TabSection";
import Feature from "./components/Feature";
import FAQ1 from "./components/FAQ1";
import CTASection from "./components/CTASection";
import Footer from "../components/Footer";

export default function about() {
  return (
  <>
    <Navbar />
    <HeroAbout />
     <AnimatedCard
          title="The Cantech Cloud Story – Since 2009"
          description1="In 2009, Cantech Cloud introduced low-cost and high-quality cloud hosting. At the time, we entered a busy market against very large companies. Our team did not quit. We were different based on the high-quality service instead of size. We focused on making every customer happy with great service."
          description2="In 2013 and 2016, our team received the recognition of ‘Reader’s Choice Best Hosting Company’."
          description3="Today, we serve businesses in the global market as a trusted cloud infrastructure provider with 16 years of experience. We provide quality tools to scale your business. Reduce your cloud infrastructure costs with us."
          imageSrc="/call-to-action.webp"
          imageAlt="Virtual Machine Management"
        />
    <TabSection />
    <Feature />
    <FAQ1 />
    <CTASection />
    <Footer />
    
  </>
  );
}