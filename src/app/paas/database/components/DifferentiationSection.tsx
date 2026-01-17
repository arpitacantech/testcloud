"use client";

import { motion } from "framer-motion";

export default function DifferentiationSection() {
  /* ------------------------------
     CARD DATA (CONTENT UNCHANGED)
  ------------------------------ */
  const cards = [
    {
      value: "100%",
      title: "Secure encryption",
      desc: "We provide end-to-end SSL protection for every database connection.",
    },
    {
      value: "24/7",
      title: "Live expert help",
      desc: "You always have live help from experts for complex database queries.",
    },
    {
      value: "99.97%",
      title: "Uptime for businesses",
      desc: "Our infrastructure keeps your data online at all times.",
    },
    {
      value: "60s",
      title: "Fast deployment time",
      desc: "You can deploy any database engine within a minute.",
    },
  ];

  /* ------------------------------
     ANIMATIONS
  ------------------------------ */
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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
  return (
    <section className="w-full bg-black text-white py-24 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center"
          variants={blurFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <h2 className="text-left mx-0 cc-h2">
            Why Cantech Cloud Provides Superior Database Hosting Solutions
          </h2>
          <p className="leading-relaxed max-w-xl mx-0 subtitle">
            We guarantee data integrity and its high availability to users.
          </p>
        </motion.div>

        {/* RIGHT GRID OF CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
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
