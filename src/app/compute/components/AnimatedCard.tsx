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
      <div className="max-w-7xl mx-auto bg-[#111112] rounded-2xl">
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
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
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
                className="flex-1 sm:hidden lg:block"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`-mb-px h-[450px] w-full object-cover object-left-top
                    border border-border bg-body
                    ${reverse
                      ? "lg:mr-[22px] lg:rounded-3xl lg:rounded-b-none"
                      : "lg:ml-[22px] lg:rounded-3xl lg:rounded-b-none"}`}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
