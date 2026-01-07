"use client";
import { motion } from "framer-motion";

/* ----------------------------------
   CONTENT
-----------------------------------*/

const sectionContent = {
  
  features: [
    {
      title: "Website and Application Hosting",
      desc: "Run scalable, high availability web and mobile applications with stable performance, high availability and on-demand compute resources.",
    },
    {
      title: "Analytics and Data Processing",
      desc: "Manage large scale data processing, batch jobs, and real-time data analytics workloads efficiently and cost effectively.",
    },
    {
      title: "SaaS and Enterprise Platforms",
      desc: "Power secure, multi-tenant SaaS and enterprise systems with flexible infrastructure that can adapt to user demands.",
    },
    {
      title: "Development and Testing",
      desc: "Create flexible, QA, CI/CD pipelines on demand environments for development, QA without long term commitments.",
    },
  ],
  image:
    "/assets/images/compute/use-cases-of cloud-solution.webp",
};



export default function Feature4() {
  return (
    <>
       <div className="md:px-8 text-center">

       <div className="max-w-6xl mx-auto text-center ">
        {/* <p className="title-badges">
          Benefits
        </p> */}
        <h2 className="cc-h2">
          Use Cases of Cloud Solution
        </h2>
        {/* <p className="subtitle">
          Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service.
        </p> */}
      </div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          
          {/* LEFT FEATURES */}
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            {sectionContent.features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded lg:p-5 flex flex-col gap-4 lg:transition lg:duration-300 lg:hover:bg-[#101010]"
              >
                <h3 className="cc-h3">
                  {item.title}
                </h3>

                <p className="subtitle">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative md:col-span-2 lg:col-span-2"
          >
            <img
              className="inset-0 w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src={sectionContent.image}
              alt="Use Cases of Cloud Solution | Cantech Cloud"
            />
          </motion.div>

        </div>
      </motion.div>
    </>
  );
}
