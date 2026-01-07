"use client";

import { motion } from "framer-motion";

export default function(){
    return(
        <>
         <section className="py-14">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center relative">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto p-[60px_30px] text-center relative z-10"
        >

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="relative z-20"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block text-[32px] text-white font-extrabold mx-auto mb-4"
            >
              Get Started with CloudPe Virtual Machines
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto mt-3 text-white"
            >
              Experience the simplicity, flexibility, and power of CloudPe Virtual
              Machines. Build, deploy, and scale your applications with confidence,
              knowing you have the tools and resources to succeed.
            </motion.p>
          </motion.div>

          {/* BACKGROUND (NO ANIMATION – SAFE) */}
          <div className="absolute inset-0 overflow-hidden z-0 rounded-[20px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(40,40,40,0.8)_0%,rgba(20,20,20,0.6)_30%,rgba(0,0,0,0.4)_70%)]">
              <div
                className="absolute inset-0 opacity-20 
                bg-[linear-gradient(#ffffff4d_1px,transparent_1px),linear-gradient(90deg,#ffffff4d_1px,transparent_1px)]
                bg-[size:30px_30px]"
              />
            </div>
          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative z-20 scale-[0.9] pt-6"
          >
            <a
              className="px-4 py-2 cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center 
              border border-white/20 rounded-full h-10 md:h-12 lg:h-16 w-32 md:w-40 lg:w-48 text-xs sm:text-sm md:text-base font-medium
              bg-[linear-gradient(0deg,#151515,#151515)]
              shadow-[inset_0_6px_8px_#fafafa40,inset_0_-6px_8px_#fafafa40]
              text-white"
            >
              Get Started Now
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
        </>
    )
}