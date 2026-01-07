"use client";
import { useEffect, useRef, useState } from "react";
import { Layers, Code,  Globe, Box, LucideDownload, Database,  DatabaseZap, Receipt, Cloudy, ArrowUp, MousePointerClick, LucideIcon} from "lucide-react";
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
  { id: 1, icon: Layers, title: "Automatic Software Stacks", description: "We support Java, PHP, Python, Ruby, and more.", stats: "Smart Stacks & Tools" },
  { id: 2, icon: Code, title: "PHP Optimization", description: "Laravel applications run faster on our tuned stacks.", stats: "Faster Apps" },
  { id: 3, icon: Globe, title: "Global Infrastructure", description: "Your users get fast speeds from any location.", stats: "Global Reach" },
  { id: 4, icon: Box, title: "Docker Support", description: "You deploy containerized apps without any manual configuration.", stats: "Easy Container Ready" },
  { id: 5, icon: LucideDownload, title: "Smart Backups", description: "Our system saves your data daily without fail.", stats: "Data Safety" },
  { id: 6, icon: Database, title: "Elastic Kubernetes Hosting", description: "You manage your containers through one simple dashboard.", stats: "Simple Kubernetes" },
  { id: 7, icon: DatabaseZap, title: "Clustered Database Support", description: "Our system keeps your SQL and NoSQL data synced.", stats: "Database Sync" },
  { id: 8, icon: Receipt, title: "Smart Consumption Billing", description: "You pay only for the exact resources you use.", stats: "Fair Pricing" },
  { id: 9, icon: Cloudy, title: "Multi Cloud Management", description: "You control different clouds from a single admin panel.", stats: "Unified Control" },
  { id: 10, icon: ArrowUp, title: "One Click Scalability", description: "Your application handles huge traffic spikes without any crashes.", stats: "Easy Scaling" },
  { id: 11, icon: MousePointerClick, title: "One-Click Clusters", description: "You set up complex database clusters in seconds.", stats: "Instant Clusters" },
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
      <div className="max-w-5xl mx-auto relative">

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

          <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cc-h2">Essential Features of Our Modern PaaS</h2>
              <p className="subtitle">Our PaaS Cloud Platform includes everything for modern app development. You get full control over your hosting environment and everything a developer needs.</p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cards */}
        <div className="relative -mt-36">
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