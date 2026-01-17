"use client";

import { motion } from "framer-motion";
// components/FeatureSection.tsx
import React from "react";

export default function FeatureSection() {
  return (
    <section className="text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Card */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              <div className="rounded-3xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm border">
                <img
                  src="/assets/images/paas/advanced-recovery-and-health-monitoring.webp"
                  alt="Advanced Recovery and Health Monitoring | Cantech Cloud"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>

              <span
                aria-hidden
                className="absolute -inset-1 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.01)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="px-2 lg:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="title-badges">
                Creative Freedom
              </span>
            </motion.div> */}

            <motion.h2
              className="cc-h2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300">
                Advanced Recovery and Health Monitoring
              </span>
            </motion.h2>

            <motion.p
              className="text-slate-400 max-w-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We offer high-end tools to resolve your data issues. Reliable
              database hosting requires constant health checks and deep scans of
              your storage files.
            </motion.p>

            <motion.div
              className="space-y-3 max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-slate-300">Cluster Recovery</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-slate-300">Automatic restoration</p>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-slate-300">Integrity Checks</p>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-slate-300">Diagnostic reports</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
