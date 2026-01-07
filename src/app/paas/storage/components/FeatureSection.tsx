"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Sparkles, Target, Layers, Gauge, Shield } from "lucide-react"; // example icons

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
          Cloud Platform For Developers
        </h2>
        <p className="subtitle">
          Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service.
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
    description="Deploy your apps instantly with zero downtime."
    imageSrc="/assets/images/home/feature-img.webp"
    className="
      min-h-[260px]
      md:col-span-2          /* full width on tablet */
      lg:col-span-1 lg:row-span-3  /* original desktop behavior */
    "
  />
  <FeatureCard
    icon={<Sparkles size={24} />}
    title="High Performance"
    description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Target size={24} />}
    title="Scalable"
    description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Layers size={24} />}
    title="Multi-Layer Security"
    description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Gauge size={24} />}
    title="Monitoring"
    description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Reliability"
    description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
    className="md:col-span-2 lg:col-span-2 min-h-[250px]"
  />
</div>

    </section>
  );
}
