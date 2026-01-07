"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Check, Database, Folder, ShieldCheck } from "lucide-react";

// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Object_Storage = [
  "100% S3 Compatibility",
  "Unlimited Scaling",
  "Data Immutability",
  "Erasure coding reliability",
  "Global edge delivery",
  "Metadata tagging support",
  "Lifecycle Management",
  "High Throughput",
  "API Access",
  "AI/ML Optimization",
];
 
  const File_Storage = [
    "SMB and NFS protocols",
    "Integrated ONLYOFFICE editor",
    "Granular user permissions",
    "External drive sync",
    "End-to-end encryption",
    "Mobile app access",
    "Real-time Editing",
    "Password Protection",
    "Expiry Links",
    "External Drive Sync",
    "Admin Controls",
  ];

  const Backup_Storage = [
  "GlusterFS cluster support",
  "Automated daily snapshots",
  "Instant data recovery",
  "Point-in-time restoration",
  "Redundant storage nodes",
  "Centralized backup console",
  "Automated Scheduling",
  "Database Snapshots",
  "Encryption at Rest",
];

export default function TwoCardSection() {
  return (
    <section className="relative w-full py-12 md:py-14 lg:py-16">
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="title-badges">
          Types
        </p>

        <h2 className="cc-h2">
          Types of Cloud Storage and Pricing
        </h2>
        <p className="subtitle">
          We offer three main storage solutions to meet various business needs. Both plans have enterprise hardware and 24/7 technical support.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"

        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Object Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"

        >
          {/* <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p> */}

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Database className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Object Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6 h-16">
            This is best for unstructured data like images, videos, and logs with S3 compatibility.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            {Object_Storage.map((item) => (
              <li key={item} className="flex gap-2">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div> */}
        </motion.div>

        {/* File Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"

        >
          {/* <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p> */}

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Folder className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            File Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6 h-16">
            This works like a traditional shared network drive. Best for team collaboration and shared document management.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            {File_Storage.map((item) => (
              <li key={item} className="flex gap-2">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div> */}
        </motion.div>

        {/* Backup Storage */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col "

        >
          {/* <p className="text-center text-xl font-semibold text-white">$0.10</p>
          <p className="text-center text-sm text-gray-400 mb-6">
            per GB/month
          </p> */}

          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Backup Storage
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6 h-16">
            Secure Remote data storage for databases and systems.
          </p>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            {Backup_Storage.map((item) => (
              <li key={item} className="flex gap-2">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* <div className="text-center  mt-auto">
            <button className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
