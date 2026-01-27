"use client";
import React from "react";
import { Cloud, Shield, RouterIcon, ShieldCheck, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const SECURITY_DATA = [
  {
    title: "Virtual Private Cloud (VPC)",
    icon: <Cloud />,
    description: "Create secure, isolated cloud networks where there is complete control over the IPs, subnets, routing and firewall rules. The VPCs of Cantech Cloud enable the support of SaaS, enterprise, and compliance workloads with VPN and hybrid cloud connectivity.",
  },
  {
    title: "Load Balancing",
    icon: <RefreshCcw />,
    description: "Redundancy Traffic is spread to a minimum of two instances to provide high availability and constant performance. We have load balancing that is compatible with Layer 4 and Layer 7 routing and health checks to maintain responsiveness of the applications during peak loads.",
  },
  {
    title: "Virtual Firewall",
    icon: <Shield />,
    description: "Secure your cloud resources using configurable network and instance-level firewall rules and security policies. Fine-grained access control prevents unwarranted traffic and seamlessly combines with compute services.",
  },
  {
    title: "Virtual Router",
    icon: <RouterIcon />,
    description: "Enable secure and intelligent traffic routing across your cloud networks with Cantech Cloud’s Virtual Router service. Manage routing policies, connect multiple VPCs, and support hybrid or multi-region architectures with full control and high availability.",
  },
  {
    title: "DDoS Protection & CDN Caching",
    icon: <ShieldCheck />,
    description: "Provides inbuilt DDoS protection against traffic floods and malicious attacks on your applications. CDN caching enhances the speed of content delivery and minimizes latency, which guarantees the user reliability throughout the regions.",
  },
];

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, icon, delay = 0, children, className = "" }: FeatureCardProps) => {
  return (
    <motion.div
      // Kept your exact border and background styling
      className={`rotating-border bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll h-full ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
        {icon}
      </div>
      <h3 className="font-sora text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
};

export default function SecurityFeatures() {
  return (
    <section className="px-[16px] py-[40px] mx-auto xl:px-[80px] xl:py-[80px]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cc-h2">Inside Cantech Cloud Networking Services</h2>
          <p className="subtitle">Our cloud networking services are built as a flexible cloud network as a service, giving businesses full control, scalability, and security through software-defined networking.</p>
        </motion.div>

        {/* 12-column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Top Row: 3 items. On tablet/laptop they take 4 columns each (12/3 = 4) */}
          {SECURITY_DATA.slice(0, 3).map((item, index) => (
            <div key={index} className="md:col-span-6 lg:col-span-4">
              <FeatureCard 
                title={item.title} 
                icon={item.icon} 
                delay={index * 0.1}
              >
                {item.description}
              </FeatureCard>
            </div>
          ))}

          {/* Bottom Row: 2 items. On tablet/laptop they take 6 columns each (12/2 = 6) */}
          {/* We add an offset for the first item on LG screens to center the pair */}
          {SECURITY_DATA.slice(3, 5).map((item, index) => (
            <div 
              key={index + 3} 
              className={`md:col-span-6 lg:col-span-4 ${index === 0 ? 'lg:col-start-3' : ''}`}
            >
              <FeatureCard 
                title={item.title} 
                icon={item.icon} 
                delay={(index + 3) * 0.1}
              >
                {item.description}
              </FeatureCard>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}