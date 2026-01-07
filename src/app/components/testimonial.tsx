"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


// --- Types ---
interface Testimonial {
  title: string;
  text: string;
  name: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    title: "Great Hosting Services",
    text: "Cantech is an excellent hosting service provider, especially for dedicated servers in India. I have been using their services since 2017 and highly recommend them for their proactive and professional support team. Their servers offer great performance with latency between 23ms and 55ms ....",
    name: "Aadit Soni",
  },
  {
    title: "Best Quality Hosting",
    text: "I have 11 years of association with the company and I can upfront suggest Cantech as Hosting Provider to any one without any hesitation. My sites were almost up all the time (2 time problem in 11 years) which were solved promptly.They are reliable with a best quality hosting and ....",
    name: "Shashishekhar Keshri",
  },

  {
    title: "No.1 Hosting Company in India",
    text: "Great Support, Great Company to work with. Highly technical and polite staff. They are well trained. Surely, Cantech is No. 1 Hosting Company in India.",
    name: "Aadit Soni",
  },

  {
    title: "Great hosting service company",
    text: "I have been using Cantech services since 2018 and it's a great hosting service company. I must recommend all to start a trial with them and you will also be a long term customer for them. The support team is very proactive and professional ....",
    name: "Sagar Goswami",
  },
  {
    title: "Amazing Service",
    text: "Best in digital business. Very user friendly website and very customer centric approach they have, along with affordable prices. ....",
    name: "Stephen Macwan",
  },
  {
    title: "Excellent",
    text: "We highly Recommend Cantech . Outstanding support .We recently moved from a different service provider to Cantech for web hosting ,SSL and domain registration.We approached Cantech only for SSL and all thanks to excellent support and guidance by Mr.Devarsh we landed up taking more services with Cantech...",
    name: "Lakshmi P",
  },
  {
    title: "Best Dedicated Server Provider",
    text: "Cantech is I think the best dedicated server provider in India. They provide the best rates and latency like a CDN network about min 23ms to max 55ms. Their support is best they will help you out of the way even if you haven't taken their support plan in ....",
    name: "MARTSINDIA",
  },
  {
    title: "Best Hosting company",
    text: "Before taking cantech hosting service, I have used many big brand hosting companies. But when it come to technical support and service they are worst. I was frustrated with Big brand hosting company....",
    name: "Jiten",
  },
  {
    title: "Affordable",
    text: "I have been using this Cantech Networks hosting service for over a year and I am very satisfied with their service. They offer the best features, performance, and security for my website. They are always helpful and responsive whenever I have any questions or issues....",
    name: "Dhaval",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const defaultImage = "/assets/images/trustpilot-star.svg";

// --- Sub-Components ---
const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.ul
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ title, text, name }, i) => (
              <li
                key={`${index}-${i}`}
                aria-hidden={index === 1}
                className="max-w-[420px] w-full"
              >
                {/* 🔥 Hover animation moved INSIDE */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="p-10 rounded-3xl border border-neutral-800 bg-neutral-900 shadow-lg shadow-black/40"
                >
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-semibold text-white mb-3">
                      {title}
                    </h2>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {text}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {name}
                      </span>
                      <img
                        src={defaultImage}
                        alt="Rating"
                        className="h-6 w-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};



const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className=" py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <p className="title-badges">Testimonials</p>
          </div>

          <h2 className="cc-h2">What our users say</h2>
          <p className="subtitle text-center">
            Our customer stories explain why we are rated highly on all
            platforms that we operate, and we are the best.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function Testimonial() {
  return (
    <div className="w-full min-h-screen  transition-colors duration-300 flex flex-col justify-center relative selection:bg-primary selection:text-white">
      <TestimonialsSection />
    </div>
  );
}
