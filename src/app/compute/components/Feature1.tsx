"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Feature1() {
  
  const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Network isolation",
            desc: "Securely separate workloads to reduce risk and avoid unauthorized lateral movement across cloud infrastructure."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Regular monitoring",
            desc: "Security features to monitor system performance and detect threats. Using alerts and logs to identify anomalies early, reduce downtime and maintain reliable cloud operations."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Firewalls and Access Controls",
            desc: "Firewalls and Access controls traffic with high-end security features. It ensures only authorized users and services can access critical cloud resources."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Backup and Disaster Recovery",
            desc: "Get sensitive data protection and ensure fast recovery from failures. Enables quick restoration of data and services during failures or cyber attacks."
        }
    ];
    return (
    <section className="py-12 md:py-14 lg:py-16 overflow-hidden">
      <div className="md:px-8 text-center">

       <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="title-badges">
          Benefits
        </p>
        <h2 className="cc-h2">
          Cloud Compute Solution Benefits
        </h2>
        {/* <p className="subtitle">
          Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service.
        </p> */}
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
          className="mt-12 max-w-lg lg:max-w-none"
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
                  {item.icon}
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

