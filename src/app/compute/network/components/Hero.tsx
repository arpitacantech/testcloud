"use client";
import HomePage from "./hero-bg";
import { Network } from 'lucide-react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 md:pt-40 pb-0 min-h-[100vh] "
    style={{ animation: "fadeIn 0.6s ease-out" }}
    >
     
     <div className="absolute inset-0 z-10 h-full">
        <HomePage />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pb-0 md:px-8">

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
            <Network /><span>Network</span>
          </motion.div>

          {/* Heading */}
          <h1 className="cc-h1 text-center">
            <span>Cloud Networking Services for</span><span className='block mt-2'>Secure and Scalable Applications</span>
          </h1>

          {/* Description */}
          <p className="subtitle mb-10">Build secure, high-performance cloud networks that connect your infrastructure, protect data, and scale easily with enterprise-ready architecture and flexible pricing</p>

          {/* CTA */}
        <div className="items-center gap-4 relative z-10 mb-16">
        <a href="#" className="button"><span>Get Started</span></a>
      </div>

        </motion.div>
    
      </div>
    </section>
  );
}