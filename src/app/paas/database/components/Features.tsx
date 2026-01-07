// import { Zap, Shield, BarChart3, Headphones } from "lucide-react";
"use client";

import { motion } from "framer-motion";
const features = [
  {
    // icon: Zap,
    title: "Lightning Fast",
    description: "Deploy databases in under 60 seconds with optimized SSD storage",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    // icon: Shield,
    title: "Enterprise Security",
    description: "Daily automated backups, DDoS protection, SSL certificates, and SOC 2 Type II compliance",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    // icon: BarChart3,
    title: "Auto-Scaling",
    description: "Seamlessly handle traffic spikes with intelligent resource scaling",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    // icon: Headphones,
    title: "24/7 Support",
    description: "Database experts available via chat, email & phone support",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  return (
    <section className="py-14 md:py-16 lg:py-20">
  <div className="container px-4 mx-auto max-w-6xl">
    
    {/* Section Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="cc-h2">Why Choose Cantech Cloud?</h2>
      <p className="subtitle font-lexend">Everything you need for production-ready database hosting</p>
    </motion.div>

    {/* Features Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="feature-box1 mb-5 transition-transform duration-300 group-hover:scale-110">
            <div className="viewBox2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.0001" cy="17.3333" r="2.33333" stroke="currentColor" />
                <path d="M24.3333 26.6667V18" stroke="currentColor" />
                <path d="M20 22.3334H28.6667" stroke="currentColor" />
                <path d="M25.6667 15.3333V11H5V23.6667H17.3333" stroke="currentColor" />
                <path d="M8 7H24" stroke="currentColor" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="cc-h3">{feature.title}</h3>

          {/* Description */}
          <p className="cc-p">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>
  );
};

export default Features;
