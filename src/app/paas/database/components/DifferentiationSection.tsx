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
    <section className="w-full bg-black text-white py-24 relative">
      
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
            Why Cantech Cloud Provides Superior Database Hosting Solutions
           </h2>
          <p className="leading-relaxed max-w-xl mx-0 subtitle">We guarantee data integrity and its high availability to users.</p>
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
              100%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Secure encryption</span>
            </h3>
            <p className="cc-p">
              We provide end-to-end SSL protection for every database connection.
            </p>
          </div>
          {/* Card 2 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              24/7<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Live expert help</span>
            </h3>
            <p className="cc-p">
              You always have live help from experts for complex database queries.
            </p>
          </div>
          {/* Card 3 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
             99.97%<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Uptime for businesses</span>
            </h3>
            <p className="cc-p">
              Our infrastructure keeps your data online at all times.
            </p>
          </div>
          {/* Card 4 */}
          <div className="animated-card">
            <h3  className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text grid gap-2" > 
              60s<span  className="text-[18px] font-semibold font-sora text-gray-200 leading-normal">Fast deployment time</span>
            </h3>
            <p className="cc-p">
             You can deploy any database engine within a minute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

