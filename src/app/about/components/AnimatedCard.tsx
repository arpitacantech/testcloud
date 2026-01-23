"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  description1: string;
  description2?: string;
  description3?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function AnimatedCard({
  title,
  description1,
  description2,
  description3,
  imageSrc,
  imageAlt = "",
  reverse = false,

}: AnimatedCardProps) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto bg-[#030303] rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`overflow-hidden rounded-2xl border border-[#e7eaed2e] p-7 !pb-0 md:p-10 lg:pt-16 z-10 w-full
            ${reverse ? "lg:pr-16 lg:pl-0" : "lg:pl-16 lg:pr-0"}`}
        >
          <div
            className={`items-center gap-x-12 sm:px-4 md:px-0 lg:flex
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
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-lg xl:max-w-2xl"
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

              {description3 && ( // ✅ NEW
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="subtitle"
                >
                  {description3}
                </motion.p>
              )}
            </motion.div>

            {imageSrc && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 w-full mt-6 md:mt-0"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`w-full h-auto sm:max-h-[280px] md:max-h-[550px] lg:max-h-[450px]
        object-cover object-left-top
        border border-border bg-body
        ${
          reverse
            ? "md:mr-[22px] md:rounded-3xl md:rounded-b-none"
            : "md:ml-[22px] md:rounded-3xl md:rounded-b-none"
        }`}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
