"use client";

import { motion } from "framer-motion";

export default function HeroVMSection() {
  return (
    <section className="overflow-hidden border-y border-base-900 mb-14 md:mb-16 lg:mb-20">
      <div className="max-w-screen-xl mx-auto px-4 pt-[180px] pb-0 md:px-8 ">

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-5 max-w-6xl mx-auto text-center"
        >

          {/* Badge */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm text-white font-medium inline-block p-[7px_15px] bg-[#121212] rounded-[26px] border border-[#383838]"
          >
            Cantech Cloud Virtual Machines
          </motion.h1>

          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[46px] text-white font-extrabold mx-auto"
          >
            Cantech Cloud Virtual Machines – Powerful, Scalable & Secure Cloud Computing
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl mx-auto pb-4 text-[#ffffffb3]">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="items-center justify-center gap-x-3 sm:flex"
          >
            <a
              href="#"
              className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>

        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-[60px] relative w-full"
        >
          <img
            src="https://upstart-astro.netlify.app/_astro/product-demo.Dz7pFNHq_Z21TbDb.webp"
            className="w-full [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            alt="Cantech Cloud Virtual Machines"
          />
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </motion.div>

      </div>
    </section>
  );
}
