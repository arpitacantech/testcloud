"use client";
import Cards from './Cards';
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

interface FeatureCardProps {
  iconSrc?: string;
  title: string;
  description: string;
}
// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function TwoCardSection() {
  return (
<section className="max-w-screen-xl mx-auto px-4 relative w-full py-[70px] md:px-8">
  <motion.div
  className="max-w-6xl mx-auto text-center mb-16"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}>
    <motion.p
    className="title-badges"
    variants={fadeUp}>
    Services
    </motion.p>
    <motion.h2
    className="cc-h2"
    variants={fadeUp}>
    Get The Right Cloud Power for Your Business
    </motion.h2>
    <motion.p
    className="subtitle font-lexend"
    variants={fadeUp}>
    We offer the best tools for your business growth. You can host websites or run complex apps here. Our team helps you scale your operations fast.
    </motion.p>
  </motion.div>
  <motion.div
  className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}>
    <motion.div variants={fadeUp}>
    <Cards
      imageSrc="/assets/images/home/paas-solution.webp"
      title="PaaS Solutions"
      description="You get managed databases and Kubernetes tools. We handle the hard server work so you can focus on your code and customers. Our system automates your scaling."
      buttonHref="/paas"/>
    </motion.div>

    <motion.div variants={fadeUp}>
    <Cards
      imageSrc="/assets/images/home/cloud-computing.webp"
      title="Cloud Compute"
      description="We provide fast virtual machines with NVMe storage. You get Intel or AMD chips. These units handle heavy workloads easily. Stay in control of your data."
      buttonHref="/compute"/>
    </motion.div>
  </motion.div>
  <motion.div
  className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"
  variants={fadeUp}/>
</section>
  );
}
