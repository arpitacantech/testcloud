"use client";
import { useEffect, useRef, useState } from "react";
import { GitBranch, CheckCircle, Wrench,  LucideIcon, DatabaseZap,  FileCode,  Braces, ShieldCheck, FolderUp, Layers3, Activity, Network} from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";

interface CardData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}

const badgeVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const cardsData: CardData[] = [
  { id: 1, icon: GitBranch, title: "Version Control", description: "It is easy to connect your GitHub or GitLab account. The system automatically pulls your latest code updates.", stats: "Smooth Git integration" },
  { id: 2, icon: CheckCircle, title: "Full Access", description: "Developers have full access to the server via the command line. You can run Composer or Artisan commands without any restrictions.", stats: "Root SSH capability" },
  { id: 3, icon: Wrench, title: "Easy Debugging", description: "We have live performance indicators of your app on our dashboard. Inbuilt Xdebug tools help you to find errors fast.", stats: "Real-time monitoring" },
  { id: 4, icon: DatabaseZap, title: "Database Control", description: "You manage MySQL and MongoDB from a single screen. Our interface makes it easier to perform complex database queries.", stats: "Unified management tool" },
  { id: 5, icon: FileCode, title: "Script Automation", description: "The platform automates the entire deployment process. You do not need to write complex deployment scripts manually", stats: "Simple CI/CD pipelines" },
  { id: 6, icon: Braces, title: "PHP Flexibility", description: "You may upgrade PHP 8.1 to 8.4 immediately. The system is compatible with all your existing extensions.", stats: "Instant version switching" },
  { id: 7, icon: ShieldCheck, title: "High Security", description: "Each application runs inside its own secure container. This setup prevents security leaks between different user accounts.", stats: "Isolated container tech" },
  { id: 8, icon: Network, title: "Global Content", description: "We provide free SSL for every hosted domain. Your user data stays encrypted remains encrypted in each session.", stats: "Free SSL certificates" },
  { id: 9, icon: FolderUp, title: "File Transfer", description: "You can upload files through encrypted FTP clients. Our web manager also allows drag-and-drop file uploads.", stats: "Secure FTPS access" },
  { id: 10, icon: Layers3, title: "Cache Support", description: "We provide built-in support for OPcache and Redis. These tools will accelerate your database queries.", stats: "Speed boost" },
  { id: 11, icon: Activity, title: "High Availability", description: "We have multiple nodes on our infrastructure for your site. The system automatically switches to a healthy node.", stats: "No downtime" },
];

export default function ScrollCards() {
  const [isSticky, setIsSticky] = useState(true);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsSticky(false); // Stop sticky
        } else {
          setIsSticky(true); // Resume sticky when scrolling back up
        }
      },
      { threshold: 0.5 }
    );

    if (endRef.current) observer.observe(endRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="scroll-cards" className="relative bg-black py-20">
      <div className="max-w-7xl mx-auto relative">

        {/* Sticky / Not Sticky header */}
        <div
          className={`z-10 bg-black pt-4 pb-2 ${
            isSticky ? "sticky top-0" : "static"
          }`}
        >
          <motion.div
            className="w-full flex justify-center mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={badgeVariants}
          >
            <p className="title-badges">
              Feature
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cc-h2">Powerful PHP Hosting Tools for Modern Web Developers</h2>
              <p className="subtitle">We provide the best tools so you can write great code. Our system handles the hard server work for you. You get complete control of your development environment.</p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cards */}
        <div className="max-w-5xl mx-auto relative -mt-36">
          {cardsData.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Sentinel to detect the end */}
        {/* <div ref={endRef} className="h-10"></div> */}

      </div>
    </section>
  );
}