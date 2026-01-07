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
    <section className="w-full bg-black text-white relative py-12 md:py-14 lg:py-16">
      {/* Centered Small Badge at the Top */}
  
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
            Why Cantech Cloud Leads <br /> in Cloud Storage
          </h2>
          <p className="leading-relaxed max-w-xl mx-0 subtitle">
            We build our infrastructure on high-speed fiber connections in the best data centers. Our Cloud Storage integrates directly with your remote database for faster backups.
          </p>
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
              99.97%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Uptime for data</span>
            </h3>
            <p className="cc-p">
              Our distributed network keeps your files available at all times.
            </p>
          </div>
          {/* Card 2 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              40%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Lower Total Cost</span>
            </h3>
            <p className="cc-p">
              You save on your hardware costs by moving to our managed cloud.
            </p>
          </div>
          {/* Card 3 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
             21%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Higher Profit Margin</span>
            </h3>
            <p className="cc-p">
              Businesses that are on cloud solutions expand more rapidly than physical servers.
            </p>
          </div>
          {/* Card 4 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
             0%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Manual Maintenance Effort</span>
            </h3>
            <p className="cc-p">
              Our team handles all the hardware updates and security patches for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
