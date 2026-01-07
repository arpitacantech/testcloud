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
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-0 filter grayscale opacity-40"
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
          Powerful Features of Cantech Cloud Storage Services
        </h2>
        <p className="subtitle">
          Modern businesses need reliable data management to expand quickly. Our Cloud Storage Solutions provide the speed and security for your applications. Access remote data storage & get absolute control.
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
    title="Pay-as-you-go Scaling"
    description="You scale your capacity up or down instantly without any fixed fees. This system will make sure that you do not spend money on empty drive space."
    imageSrc="/assets/images/home/feature-img.webp"
    className="
      min-h-[260px]
      md:col-span-2
      lg:col-span-1 lg:row-span-2
    "
  />
  <FeatureCard
    icon={<Sparkles size={24} />}
    title="100% S3 Compatibility"
    description="You can use your existing AWS tools without changing code. Our Object Storage is an ideal drop-in replacement for your existing apps."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Target size={24} />}
    title="Automated Lifecycle Rules"
    description="The system automatically transfers old data to cheaper levels. This feature will save you money in the long-term remote data storage costs."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Layers size={24} />}
    title="High Availability Clusters"
    description="We back up your data across multiple redundant hardware nodes. This setup ensures your files remain online in case a server malfunctions."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Gauge size={24} />}
    title="Real-time Collaboration"
    description="Your team is able to make changes to shared documents simultaneously. File Storage enables secure sharing with third-party partners via password-protected links."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Version Control Protection"
    description="Our system saves previous versions of every file. You can restore old data instantly in case a user deletes a file accidentally."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Advanced API Access"
    description="Developers can integrate storage directly into their software applications. We support RESTful APIs and full SDKs for all major languages."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Real-Time Syncing"
    description="Your teammates can view file changes immediately they occur. The system manages version control to prevent any data overwrites."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Advanced Encryption"
    description="We encrypt your data during transfer and while it sits on our disks. Only authorized users can access your sensitive business files."
    className="min-h-[200px]"
  />
  <FeatureCard
    icon={<Shield size={24} />}
    title="Global Edge Access"
    description="Our network delivers your files from the location nearest to your user. This reduces wait times for large downloads or media streaming."
    className="md:col-span-2 lg:col-span-2 min-h-[250px]"
  />
</div>

    </section>
  );
}

