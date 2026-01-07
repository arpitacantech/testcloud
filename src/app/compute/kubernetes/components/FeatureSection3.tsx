"use client";
import React from "react";

// import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection3() {
  return (
    <section className="py-8 md:py-10 lg:py-12">

      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="md:px-8 text-center"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="cc-h2"
        >
          Cantech Cloud Compute Advantage for Accelerated Growth
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="subtitle"
        >
         Discover why leading companies across various industries trust Cantech Cloud to solve their modern challenges.
        </motion.p>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {/* LEFT FEATURES */}
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            {[
              "Seamless Management",
              "Cost Efficiency",
              "Auto Upgrades",
              "Comprehensive Management",
            ].map((title, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded lg:p-5 flex flex-col gap-4 lg:transition lg:duration-300 lg:hover:bg-[#101010]"
              >
                <p className="mt-2 text-white text-lg md:text-xl font-semibold">
                  {title}
                </p>
                <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                  Kubernetes clusters can automatically scale the nodes and workloads to manage surge in traffic while seamlessly maintaining performance.
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative md:col-span-2 lg:col-span-2"
          >
            <img
              className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src="/assets/images/compute/kubernetes/flexible-compute-powerful-add-ons-for-kubernetes.webp"
              alt="Flexible Compute & Powerful Add-Ons for Kubernetes | Cantech Cloud"
            />
          </motion.div>

        </div>
      </motion.div>
    </section> 
  )
}