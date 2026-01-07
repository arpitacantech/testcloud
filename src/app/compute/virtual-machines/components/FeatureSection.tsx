"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection() {
  
  const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Fast and Easy Setup",
            desc: "Launch your virtual machines in seconds using our intuitive interface, API, or CLI tools. Start focusing on what matters without delays."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Reliable Performance",
            desc: "With a 99.95% uptime SLA, your VMs deliver consistent performance to keep your business running smoothly."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Scalable Configurations",
            desc: "Choose the right resources for your needs and scale up or down effortlessly as your workload changes."
        }
    ];
    const features_2 = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Fast and Easy Setup",
            desc: "Launch your virtual machines in seconds using our intuitive interface, API, or CLI tools. Start focusing on what matters without delays."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Reliable Performance",
            desc: "With a 99.95% uptime SLA, your VMs deliver consistent performance to keep your business running smoothly."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Scalable Configurations",
            desc: "Choose the right resources for your needs and scale up or down effortlessly as your workload changes."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Scalable Configurations",
            desc: "Choose the right resources for your needs and scale up or down effortlessly as your workload changes."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none"><path fill="#FFF" d="m15.682 11.153 6.844 6.225v-6.21h1.332v6.237l6.874-6.252v7.097h2.822v10.236h-2.813v6.32l-6.883-5.97v6.038h-1.332v-5.94l-6.836 5.944v-6.392h-2.823V18.25h2.815Zm5.839 8.396H14.2v7.638h1.488v-2.409Zm-4.499 5.805v6.625l5.504-4.785v-6.775Zm13.719 1.833h1.481v-7.638h-7.267l5.786 5.175ZM29.4 18.25v-4.109l-4.518 4.109Zm-12.386-4.109v4.109h4.518Zm12.395 17.771v-3.426h-.008v-3.138l-5.505-4.935v6.718Z"/></svg>,
            title: "Scalable Configurations",
            desc: "Choose the right resources for your needs and scale up or down effortlessly as your workload changes."
        }
    ]

  return (
    <>
    <section className="py-12 md:py-14 lg:py-16 overflow-hidden">
      <div className="md:px-8 text-center">

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[32px] text-white font-extrabold mx-auto mb-6"
        >
          Why Choose CloudPe Virtual Machines?
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#ffffffb3]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue,
          nisl eget molestie varius, enim ex faucibus purus
        </motion.p>
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
            src="/O1CN0168OqNH25645IcktmN.png"
            className="w-full shadow-lg rounded-lg"
            alt=""
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
                  <h4 className="text-lg text-white font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[#94969d]">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
    {/* <section className="py-14">
        <div className="md:px-8 text-center">

            <p className="text-[32px] text-white font-extrabold mx-auto mb-6">
                Why Choose CloudPe Virtual Machines?
            </p>
            <p className="text-[#ffffffb3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-4 items-center justify-between md:px-8 lg:flex">
            <div className="mt-12 lg:mt-0">
                <img src="/O1CN0168OqNH25645IcktmN.png" className="w-full shadow-lg" />
            </div>
            <div>
                <div className="mt-12 max-w-lg lg:max-w-none">
                    <ul className="space-y-8">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-[#ffffff1a] text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-[#94969d]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section> */}
    {/* <section className="relative mx-auto py-4 px-4 md:px-8">
        <div className="md:px-8 text-center mb-[60px]">

            <p className="text-[32px] text-white font-extrabold mx-auto mb-6">
                Power Up with Add-Ons
            </p>
            <p className="text-[#ffffffb3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-4 items-center justify-between md:px-8 lg:flex">
            <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                 <div className=" max-w-lg lg:max-w-none">
                    <ul className="space-y-8">
                        {
                            features_2.map((item2, idx2) => (
                                <li key={idx2} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-[#ffffff1a] text-indigo-600 rounded-full flex items-center justify-center">
                                        {item2.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-semibold">
                                            {item2.title}
                                        </h4>
                                        <p className="mt-3 text-[#94969d]">
                                            {item2.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
             </div>
            <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                <div className="bg-[radial-gradient(63%_46%_at_-3.9%_-1.8%,#262626_0%,#141414_100%)] opacity-100 rounded-[23px] p-8">
                    <img 
                    src="/Pff4jiCRoIQdwf1slphQVhSArY.jpg" 
                    alt="" 
                    className="w-full rounded-[12px]" 
                    />
                </div>
            </div>
        </div>
    </section> */}
     <section className="relative mx-auto py-12 md:py-14 lg:py-16 overflow-hidden">

      {/* Heading */}
      <div className="md:px-8 text-center mb-[60px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[32px] text-white font-extrabold mx-auto mb-6"
        >
          Power Up with Add-Ons
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#ffffffb3]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue,
          nisl eget molestie varius, enim ex faucibus purus
        </motion.p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 gap-4 items-center justify-between md:px-8 lg:flex">

        {/* Features List */}
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
          className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:text-left"
        >
          <ul className="space-y-8">
            {features_2.map((item2, idx2) => (
              <motion.li
                key={idx2}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-x-4"
              >
                <div className="flex-none w-12 h-12 bg-[#ffffff1a] rounded-full flex items-center justify-center">
                  {item2.icon}
                </div>
                <div>
                  <h4 className="text-lg text-white font-semibold">
                    {item2.title}
                  </h4>
                  <p className="mt-3 text-[#94969d]">
                    {item2.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto"
        >
          <div className="bg-[radial-gradient(63%_46%_at_-3.9%_-1.8%,#262626_0%,#141414_100%)] rounded-[23px] p-8">
            <img
              src="/Pff4jiCRoIQdwf1slphQVhSArY.jpg"
              alt=""
              className="w-full rounded-[12px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
    <section className="py-14">
      <div className="max-w-7xl mx-auto lg:flex bg-[#111112] rounded-2xl">

        {/* CARD WRAPPER (ANIMATES FIRST) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[#e7eaed2e] p-7 !pb-0 md:p-10 lg:pl-16 lg:pr-0 lg:pt-16 z-10 w-full"
        >

          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">

            {/* TEXT CONTENT (ANIMATES AFTER CARD) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
            >

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white text-3xl font-semibold sm:text-4xl mb-6"
              >
                Virtual Machine Management
              </motion.h3>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#94969d]"
              >
                Master the essentials of managing virtual machines in your cloud
                platform. Learn how to deploy, configure, and optimize virtual
                machines for various workloads.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#94969d]"
              >
                Explore topics such as resource allocation, scaling, monitoring,
                and best practices for maintaining performance and reliability in
                your virtualized environment.
              </motion.p>

            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 sm:hidden lg:block"
            >
              <img
                src="/call-to-action.webp"
                className="-mb-px h-[450px] w-full rounded-t-xl border border-border bg-body object-cover object-left-top lg:ml-[22px] lg:rounded-3xl lg:rounded-b-none"
                alt="Virtual Machine Management"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}