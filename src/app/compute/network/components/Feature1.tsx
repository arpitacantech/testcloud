"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
 ShieldCheck,
  Zap,
  Rocket,
  Plug
} from "lucide-react";


export default function Feature1() {
  
  const features = [
        {
            icon: ShieldCheck,
            title: "Enterprise-Grade Security",
            desc: "Virtual firewalls, traffic filtering, and layered protection are built into our cloud network services to ensure the safety of your workloads."
        },
        {
            icon: Zap,
            title: "High Availability & Speed",
            desc: "Advanced routing and smart load balancing make our network cloud services ideal for high-uptime applications."
        },
        {
            icon: Rocket,
            title: "Future-Ready Support",
            desc: "Dual-stack IPv4 and IPv6 support and scalable network paradigms to support the dynamic workloads in the cloud networking."
        },
        {
            icon: Plug,
            title: "Easy Interoperability",
            desc: "Seamlessly integrate compute, Kubernetes, databases, and storage with our Cloud Compute networking architecture."
        }
    ];
    return (
    <section className="py-12 md:py-14 lg:py-24 overflow-hidden">
      <div className="md:px-8 text-center">

       <div className="max-w-6xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-0">
        
        <h2 className="cc-h2">
          What Makes Cantech Cloud Networking the Smarter Choice
        </h2>
        <p className="subtitle">
          Cantech Cloud delivers enterprise-ready cloud networking services built for speed, security, and reliability. As a trusted cloud network service provider, we offer scalable cloud network services with powerful security and simple, hassle-free management.
        </p>
      </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 gap-4 items-center justify-between md:px-8 lg:flex">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 lg:mt-0"
        >
          <img
            src="/assets/images/compute/cloud-compute-solution-benefits.webp"
            className="w-full shadow-lg rounded-lg"
            alt="Cloud Compute Solution Benefits | Cantech Cloud"
          />
        </motion.div>

        {/* Features */}
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
          className="max-w-lg lg:max-w-none"
        >
          <ul className="space-y-8">
            {features.map((item, idx) => (
                
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-x-4"
              >
                <div className="flex-none w-12 h-12 bg-[#ffffff1a] rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="cc-h3">
                    {item.title}
                  </h3>
                  <p className="cc-p">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
    )

}

