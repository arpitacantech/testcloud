"use client";

import { motion } from "framer-motion";

export default function DifferentiationSection() {
  // Motion variants
  const badgeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const blurFade = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

  const cards = [
    {
      value: "100%",
      title: "Secure Environment",
      desc: "We protect your data with advanced multi-layer security.",
    },
    {
      value: "99.97%",
      title: "Uptime",
      desc: "Your website stays online during heavy traffic, too.",
    },
    {
      value: "100%",
      title: "Automated Vertical Scaling",
      desc: "The server scales up or down based on your live traffic.",
    },
    {
      value: "0%",
      title: "Complex Manual Configurations",
      desc: "We handle all the difficult server settings for your team.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 md:py-20 lg:py-25 relative">
      {/* Centered Small Badge at the Top */}
      <motion.div
        className="w-full flex justify-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={badgeVariants}
      ></motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blurFade}
        >
          <h2 className="text-left mx-0 cc-h2">
            Why Choose Cantech Platform
            <br /> As a Service
          </h2>
          <p className="leading-relaxed max-w-xl mx-0 subtitle">
            We offer better value than big cloud providers today. Our PaaS setup
            runs on your existing hardware easily. You get more power for less
            total cost. You stop paying for idle server resources today.
          </p>
        </motion.div>

        {/* RIGHT GRID OF CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="animated-card"
            >
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2">
                {card.value}
                <span className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">
                  {card.title}
                </span>
              </h3>
              <p className="cc-p">{card.desc}</p>
            </motion.div>
          ))} 
        </motion.div>
      </div>
    </section>
  );
}
