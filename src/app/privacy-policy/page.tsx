import Navbar from "../components/Navbar";
import PrivacyHero from "./components/PrivacyHero";
import PrivacyContent from "./components/PrivacyContent";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
   <main className="min-h-screen bg-background">
    <Navbar />    
    <PrivacyHero />
    <PrivacyContent />
    <Footer />
   </main>
  );
}