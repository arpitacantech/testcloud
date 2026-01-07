"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import AnimatedLogo from "../../../components/AnimatedLogo";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const bars = [
  {
    title: "AWS Cloud",
    price: "$294.44",
    specs: "16 vCPU / 32GB RAM / 50GB SSD",
  },
  {
    title: "DigitalOcean",
    price: "$295.00",
    specs: "16 vCPU / 32GB RAM / 50GB SSD",
  },
  {
    title: "Cantech Cloud",
    price: "$169.00",
    specs: "16 vCPU / 32GB RAM / 50GB SSD",
    highlighted: true,
  },
  {
    title: "Google Cloud",
    price: "$391.39",
    specs: "16 vCPU / 32GB RAM / 50GB SSD",
  },
  {
    title: "Microsoft Azure",
    price: "$391.95",
    specs: "16 vCPU / 32GB RAM / 50GB SSD",
  },
];

const ComparisonSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const highlightedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current || !highlightedRef.current) return;

    const container = scrollRef.current;
    const card = highlightedRef.current;

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    container.scrollTo({
      left: cardCenter - containerCenter,
      behavior: "instant", // change to "smooth" if you want animation
    });
  }, []);

  return (
    <section className="py-20 bg-black">
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="inline-block border border-gray-300 text-gray-300 uppercase text-sm px-3 py-1 rounded-full mb-3 tracking-wide"
          variants={fadeUp}
        >
          comparison
        </motion.p>

        <motion.h2
          className="text-[32px] font-extrabold mx-auto mb-3"
          variants={fadeUp}
        >
          Compare Us
        </motion.h2>

        <motion.p
          className="max-w-4xl mx-auto text-[#ffffffb3] font-lexend"
          variants={fadeUp}
        >
          Choose the plan that fits your business. See what’s included and pick the right features for your team
        </motion.p>
      </motion.div>

      {/* Comparison Cards */}
      <motion.div
        ref={scrollRef}
        className="flex flex-nowrap items-center gap-10 max-w-7xl mx-auto overflow-x-auto py-16 scroll-smooth"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {bars.map((item, index) => (
          <motion.div
            key={index}
            ref={item.highlighted ? highlightedRef : null}
            variants={fadeUp}
            className={`
              relative rounded-3xl 
              ${item.highlighted ? "w-[300px] h-[400px]" : "w-[240px] h-[340px]"}
              border transition-all duration-500
              bg-[linear-gradient(135deg,#0d0d0d,#050505)]
              shadow-[0_0_20px_rgba(0,0,0,0.6)]
              flex flex-col items-center justify-center text-center px-6
              ${
                item.highlighted
                  ? "border-white/70 shadow-[0_0_50px_rgba(255,255,255,0.45)]"
                  : "border-white/10"
              }
            `}
          >
            <div className="flex flex-col items-center justify-center mb-4">
              {item.highlighted && (
                <div className="w-16 h-16 mb-2">
                  <AnimatedLogo className="w-full h-full" />
                </div>
              )}

              <h3
                className={`text-lg font-semibold font-sora ${
                  item.highlighted ? "text-white" : "text-gray-200"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <p className="text-sm text-gray-400 mb-6">{item.specs}</p>

            <div className="text-4xl font-extrabold mb-2 text-white">
              {item.price}
            </div>

            <span className="text-gray-400 text-sm">/ Month</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
