"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Activity, Cpu, ShieldCheck, Layers, Server } from "lucide-react";

const cardStyle = `
  relative
  rounded-xl
  bg-[linear-gradient(135deg,#0d0d0d,#050505)]
  border border-white/10
  shadow-[0_0_10px_rgba(0,0,0,0.5)]
  backdrop-blur-xs
  overflow-hidden
  transition-all duration-300
  hover:scale-[1.02]
  hover:border-white/20
  hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
  p-6
  flex flex-col
  gap-4
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
}

function FeatureCard({ icon, title, description, imageSrc, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(cardStyle, className, "relative")}
    >
      {/* Background image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-0 filter grayscale"
        />
      )}
      
      {/* Overlay for readability */}
      {imageSrc && <div className="absolute inset-0 bg-black/50 rounded-xl z-10"></div>}

      {/* Content on top of image */}
      <div className="relative z-20 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="text-white">{icon}</div>
          <h3 className="cc-h3">{title}</h3>
        </div>
        <p className="cc-p">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FeatureSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 md:px-8", className)}>
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="title-badges">
          Features
        </p>
        <h2 className="cc-h2">
          Why Choose Cantech Cloud Technology
        </h2>
        <p className="subtitle">
          Our platform offers many benefits for your business. We offer better technology for less money. You get full control over your server setup.
        </p>
      </div>

      {/* Bento Grid */}
      
<div
  className="
    grid w-full gap-6
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3 lg:grid-rows-3
    auto-rows-[minmax(180px,auto)]
  "
>
  <FeatureCard
    icon={<Zap size={24} />}
    title="Fast Deployment"
    description="Cantech enables fast deployment through intelligent automation and resilient infrastructure designed to minimize downtime. Get your applications live faster without compromising performance or operational stability."
    imageSrc="/assets/images/home/feature-img.webp"
    className="
      min-h-[260px]
      md:col-span-2          /* full width on tablet */
      lg:col-span-1 lg:row-span-3  /* original desktop behavior */
    "
  />
  <FeatureCard
    icon={<Activity size={24} />}
    title="High Uptime"
    description="We guarantee 99.97% uptime for your site. This reliability builds trust with your visitors. Your digital platform stays online always, backed by our continuous monitoring."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Cpu size={24} />}
    title="Premium Hardware Setup"
    description="We use Premium AMD and Intel chips with high-speed NVMe storage. Your apps load much faster. This setup improves the experience for your customers."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<ShieldCheck size={24} />}
    title="Advanced Security"
    description="We provide virtual firewalls for safety and VPN for private access. Your data remains very secure on our platform. You control every access point easily. We block bad traffic from your servers."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Layers size={24} />}
    title="Fully Managed Ecosystem"
    description="We offer managed databases and Kubernetes clusters. Our system handles backups and scaling automatically. You use load balancers to distribute traffic. These tools provide native scalability for your apps."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Server size={24} />}
    title="High Performance GPU"
    description="We offer NVIDIA GPU power. You can run heavy graphics or machine learning models here, and parallel computing very well. This setup increases your productivity. You get results faster with our hardware."
    className="md:col-span-2 lg:col-span-2 min-h-[250px]"
  />
</div>

    </section>
  );
}

