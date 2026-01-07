"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl="/assets/images/compute/compute-card.jpg"
        subheading="Startups"
        heading="Scale without limits"
      >
        <ExampleContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/images/compute/compute-card.jpg"
        subheading="Enterprises"
        heading="Manage large, complex applications"
      >
        <ExampleContent />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/assets/images/compute/compute-card.jpg"
        subheading="Developers"
        heading="Build and deploy faster"
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

/* ---------------------------------------------
  TYPES
--------------------------------------------- */

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

/* ---------------------------------------------
  COMPONENTS
--------------------------------------------- */

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl filter grayscale"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="title-badges mb-5">{subheading}</p>
      <p className="cc-h2 text-[58px]">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto flex md:max-w-7xl justify-between gap-5 pb-24 pt-12">
    <h3 className="cc-h3 md:max-w-2xl ">
      Additional content 
    </h3>
    <div className="md:max-w-5xl">
      <p className="cc-p">
        Lorem ipsum dolor sit amet consect adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit.
      </p>
      <p className="cc-p pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit.
      </p>
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);

export default TextParallaxContentExample;
