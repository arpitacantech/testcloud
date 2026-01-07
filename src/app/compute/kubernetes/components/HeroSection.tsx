"use client";

import { Cloud } from 'lucide-react';
import { motion } from "framer-motion";
// import HeroBackground from "@/src/app/compute/kubernetes/components/HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 md:pt-40 pb-0">
    {/* <HeroBackground /> */}
      <div className="max-w-screen-xl mx-auto px-4 pb-0 md:px-8">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-center"
        >

          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Cloud /><span>Kubernetes</span>
          </motion.div>

          {/* Heading */}
          <h1 className="cc-h1 text-center">
            <span>Build and Scale on Enterprise-Grade</span><span className='block mt-[7px]'>Managed Kubernetes</span>
          </h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10"
          >
            Scale modern applications seamlessly by using a secure, highly available managed kubernetes by Cantech cloud without operational costs.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="items-center justify-center gap-x-3 sm:flex"
          >
            <div className="gap-4 relative z-10 mb-16">
                <a href="#" className="button"><span>Get Started</span></a>
            </div>
          </motion.div>

        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="pt-[60px]"
        >
          <img
            src="/assets/images/compute/kubernetes/managed-kubernetes.webp"
            className="w-full [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            alt="Build and Scale on Enterprise-Grade Managed Kubernetes | Cantech Cloud"
          />
        </motion.div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"></div>      
      </div>
    </section>
  );
}
