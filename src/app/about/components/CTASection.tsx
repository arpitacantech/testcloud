"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  // Parent container (controls children animation)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Box animation
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  // Zoom-in animation for text & button
  const zoomInVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <motion.section
      className="relative max-w-7xl mx-auto py-20 w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Box */}
      <motion.div
        className="relative rounded-[32px] pb-20 pt-16 px-6 text-center overflow-hidden"
        variants={boxVariants}
      >
        {/* Background Image */}
        <Image
          src="/assets/images/cta/cta-img.jpg"
          alt="CTA Background"
          fill
          priority
          className="object-cover z-[1]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[2]" />

        {/* Content */}
        <div className="relative z-[3]">
          {/* Title */}
          <motion.h2
            variants={zoomInVariants}
            className="text-[2.2rem] md:text-[3.5rem] lg:text-[3.5rem] font-bold leading-[3rem] md:leading-[4rem]"
          >
            <span className="block bg-gradient-to-b from-white via-gray-300 to-black/50 bg-clip-text text-transparent">
              Expert 24/7 Human Assistance
            </span>
            {/* <span className="block mt-5 bg-gradient-to-b from-white via-gray-300 to-black/50 bg-clip-text text-transparent">
              Professional Help?
            </span> */}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={zoomInVariants}
            className="text-neutral-300 mt-6 text-lg max-w-4xl mx-auto"
          >
           Quick answers are guaranteed by live chat, phone, and email support from real experts.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#"
            variants={zoomInVariants}
            className="
              mt-8 md:mt-10 inline-block
              px-7 py-3
              bg-black/70 text-white
              font-medium text-lg
              rounded-full
              shadow-[0_0_12px_rgba(192,192,192,0.6)]
              hover:shadow-[0_0_24px_rgba(192,192,192,1)]
              transition-all
            "
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}