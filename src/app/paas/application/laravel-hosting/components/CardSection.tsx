"use client";
import React from "react";
import { Shield, Lock,  Zap,  Radar, Boxes,  BadgeCheck} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
  children: React.ReactNode;
}

const FeatureCard = ({
  title,
  icon,
  delay = 0,
  children,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="rotating-border bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
        {icon}
      </div>

      <h3 className="font-sora text-white text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
};


export default function SecurityFeatures() {
  return (
    <section className="px-[16px] py-[40px] mx-auto xl:px-[80px] xl:py-[80px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="cc-h2">Secure Your Laravel Application Hosting</h2>
          <p className="subtitle">Your data stays safe with our multi-layer protection system. We block threats before they reach your code.</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            delay={0}
            title="Web Application Firewall"
            icon={<Shield />}>
            Our WAF stops SQL injection attacks instantly. It monitors every request for suspicious patterns.
          </FeatureCard>

          <FeatureCard
            delay={0.1}
            title="BitNinja Malware Protection"
            icon={<Lock />}>
            BitNinja uses AI to detect malicious files. It cleans your server without any manual work.
          </FeatureCard>

          <FeatureCard
            delay={0.2}
            title="Advanced DDoS Mitigation"
            icon={<Zap />}>
            Our system filters out bad traffic spikes. Your website stays online during heavy bot attacks.
          </FeatureCard>

          <FeatureCard
            delay={0.3}
            title="Active Fail2Ban Guard"
            icon={<Radar />}>
            Fail2Ban locks out hackers after failed logins. It secures your SSH and admin panels effectively.
          </FeatureCard>

          <FeatureCard
            delay={0.4}
            title="Isolated Container Security"
            icon={<Boxes />}>
           Every app runs in a private container. This isolation prevents cross-site infections between different projects.
          </FeatureCard>

          <FeatureCard
            delay={0.5}
            title="Automatic SSL Management"
            icon={<BadgeCheck />}>
            We provide free Let’s Encrypt certificates. The system renews them before they expire automatically.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
