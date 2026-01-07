"use client";

import { motion } from "framer-motion";

export default function DifferentiationSection() {
  // Motion variants
  const badgeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="w-full bg-black text-white py-32 relative">
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
          variants={leftVariants}
        >
          <h2 className="text-left mx-0 cc-h2">
            The Cantech Cloud Advantage<br /> for PHP Hosting
           </h2>
          <p className="leading-relaxed max-w-xl mx-0 subtitle">Traditional servers often struggle to perform well under heavy traffic loads. The solution to this issue is our Cloud PHP Hosting that provides smart resource management.</p>
        </motion.div>

        {/* RIGHT GRID OF CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariants}
        >
          {/* Card 1 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              99.97%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Uptime Guarantee</span>
            </h3>
            <p className="cc-p">
              Your website/app remains online.
            </p>
          </div>
          {/* Card 2 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              40%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Faster Page Loads</span>
            </h3>
            <p className="cc-p">
              SSD/NVMe storage increases your speed.
            </p>
          </div>
          {/* Card 3 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              50%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Bill Reduction</span>
            </h3>
            <p className="cc-p">
              Auto-scaling saves you half of your monthly cloud billing.
            </p>
          </div>
          {/* Card 4 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              0%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Resource Sharing Policy</span>
            </h3>
            <p className="cc-p">
             You receive dedicated physical hardware.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

