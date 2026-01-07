"use client";

import { motion } from "framer-motion";
import { Database, Folder, ShieldCheck, Check } from 'lucide-react';
import GlowingGridBackground from "../../database/components/GlowingGridBackground";

export default function Hero(){
    return(
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[80px]">
        {/* Glowing Grid Background */}
        <GlowingGridBackground
          gridSize={64}
          glowRadius={200}
          glowLineColor="rgba(255, 255, 255, 1)"
          followSpeed={0.06}
        />
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          className="flex flex-col items-center text-center w-full mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-0"
          >
            <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Database /> Cloud Storage
              </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="cc-h1 text-center"
          >
            <span>Cloud Storage Services - Limitless</span>
            <span className="block mt-2">Scale & Speed</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10">Store, protect, and access your data with high-performance object, file, and backup storage built for speed, enterprise security, and effortless scaling.
          </motion.p>

          {/* Feature bullets */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-sm text-white">
          <ul className="mb-12 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-9">
            {[
              "Reliable Performance",
              "Enterprise Security",
              "Instant Scalability",
              "Proactive Support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="bg-secondary rounded-full p-1">
                  <Check size={16} />
                </span>
                <span className="text-tagline-2">{item}</span>
              </li>
            ))}
          </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 mt-5"
          >
            <a href="#" className="button"><span>Get Started</span></a>
          </motion.div>
        </motion.div>
         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Card */}
          <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur-md transition hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] text-left">
            {/* Icon */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-white">
              <Database className="h-7 w-7 text-white" />
            </div>

            {/* Heading + Price */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">
                Object Storage
              </h3>

              {/* <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80">
                $29
              </span> */}
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Scalable S3-compatible storage for photos and large videos.
            </p>

            {/* Learn more */}
            {/* <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
              Learn more →
            </span> */}
          </div>

          {/* Card */}
          <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur-md transition hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] text-left">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-white">
             <Folder className="h-7 w-7 text-white" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">File Storage</h3>
              {/* <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80">
                $49
              </span> */}
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Shared storage with real-time editing and password protection.
            </p>

            {/* <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
              Learn more →
            </span> */}
          </div>

          {/* Card */}
          <div className="group relative rounded-2xl border border-white/10bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur-md transition hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] text-left">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-white">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">
                Backup Storage
              </h3>
              {/* <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80">
                $19
              </span> */}
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Redundant clusters for protecting critical business server data.
            </p>

            {/* <span className="inline-flex items-center gap-2 text-white/80 cursor-pointer hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] transition">
              Learn more →
            </span> */}
          </div>
        </div>
      </div>
    </section>
    )
}
