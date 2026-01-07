"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}

interface CardProps {
  card: CardData;
  index: number;
}

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const CardWrapper = ({ className = "", children }: WrapperProps) => {
  return (
    <div
      className={`rounded-3xl border glass-card bg-black shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};




const Card = ({ card, index }: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsInView(entry.isIntersecting),
    { threshold: 0.5 }
  );

  if (cardRef.current) observer.observe(cardRef.current);

  return () => {
    if (cardRef.current) observer.unobserve(cardRef.current);
  };
}, []);


  const IconComponent = card.icon;

  return (
    <div
      ref={cardRef}
      className="h-[70vh] flex items-center justify-center pt-20 px-6 lg:px-8"
      style={{
        position: "sticky",
        top: `${80 + index * 12}px`,
      }}
    >
      <motion.div
        style={{ opacity, scale, y, rotateX }}
        className="w-full max-w-6xl"
      >
        <CardWrapper className="relative p-12 lg:p-16 overflow-hidden transition-all duration-700">
          {/* Background Effects */}
          {/* <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" /> */}

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView
                  ? { scale: 1, rotate: 0 }
                  : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-8"
            >
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="cc-h2"
            >
              {card.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl"
            >
              {card.description}
            </motion.p>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white"
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium">{card.stats}</span>
            </motion.div>
          </div>
        </CardWrapper>
      </motion.div>
    </div>
  );
};

export default Card;
