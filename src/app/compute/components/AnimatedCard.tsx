"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  description1: string;
  description2?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}


export default function AnimatedCard({
  title,
  description1,
  description2,
  imageSrc,
  imageAlt = "",
  reverse = false,
}: AnimatedCardProps) {
  return (
    <section className="py-14">
  <div className="max-w-7xl mx-auto bg-[#111112] rounded-2xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`overflow-hidden rounded-2xl border border-[#e7eaed2e] p-7 !pb-0 md:p-10 lg:pt-16 z-10 w-full`}
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-x-12 gap-y-8
          ${reverse ? "lg:flex-row-reverse" : ""}`}
      >
        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="w-full lg:w-1/2 space-y-3"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="cc-h2"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="subtitle"
          >
            {description1}
          </motion.p>

          {description2 && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="subtitle"
            >
              {description2}
            </motion.p>
          )}
        </motion.div>

        {/* IMAGE */}
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto max-h-[450px] object-cover rounded-3xl border border-border bg-body"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  </div>
</section>

  );
}
