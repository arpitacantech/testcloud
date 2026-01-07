"use client"; 
import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react";

export type Item = {
  id: string;
  title: string;
  // subtitle?: string;
  description: string;
  category: "product" | "indivdb" |  "dbcluster" | "addon";
  // price?: string;
};

export const TEST_DATA: Item[] = [
  /* ================= INDIVIDUAL DATABASES ================= */
  {
    id: "indivdb1",
    title: "MongoDB",
    description:
      "This NoSQL database handles modern apps with great speed and flexibility. It stores your unstructured data in easy JSON formats for fast access.",
    category: "indivdb",
  },
  {
    id: "indivdb2",
    title: "PostgreSQL",
    description:
      "This is an advanced open-source system that handles complex data relationships. You have complete support for geographic objects and high-volume transactions with high data consistency.",
    category: "indivdb",
  },
  {
    id: "indivdb3",
    title: "MySQL",
    description:
      "This is an open-source and worldwide-renowned database. Millions of developers use it in their web projects. It is very reliable and compatible with nearly all web applications on our high-speed cloud network.",
    category: "indivdb",
  },
  {
    id: "indivdb4",
    title: "MariaDB",
    description:
      "This system is more suitable than the normal MySQL for heavy tasks. It is completely compatible with your existing code, and it also improves the query speed.",
    category: "indivdb",
  },
  {
    id: "indivdb5",
    title: "Redis In-Memory Cache",
    description:
      "This can be used as session caching and real-time data. It saves the burden on your primary database by storing frequently accessed items in memory.",
    category: "indivdb",
  },

  /* ================= DATABASE CLUSTERS ================= */
  {
    id: "dbcluster1",
    title: "MySQL Cluster",
    description:
      "This multi-master configuration distributes the traffic among several nodes. It prevents any single point of failure and keeps your website online always.",
    category: "dbcluster",
  },
  {
    id: "dbcluster2",
    title: "MariaDB Galera",
    description:
      "This maximum uptime cluster ensures that all nodes contain the same data. You receive synchronous replication, and it eliminates the data loss in case of any hardware failure.",
    category: "dbcluster",
  },
  {
    id: "dbcluster3",
    title: "PostgreSQL Primary-Secondary",
    description:
      "We set up a master-slave configuration to have enhanced data reading power. The secondary node handles read requests and keeps the primary node very light with write operations.",
    category: "dbcluster",
  },
  {
    id: "dbcluster4",
    title: "Redis Cluster",
    description:
      "This distributed setup spreads your data across multiple nodes for high performance. It ensures your application stays fast even when there is heavy traffic.",
    category: "dbcluster",
  },
  {
    id: "dbcluster5",
    title: "Multi-Region Redis Cluster",
    description:
      "Your data stays synced across different geographical areas to enhance accessibility. It minimizes latency to your international users and provides very high availability.",
    category: "dbcluster",
  },
  {
    id: "dbcluster6",
    title: "PostgreSQL Multi-Region Cluster",
    description:
      "We deploy your Postgres data in multiple global zones for safety. This will ensure that your business is not affected by any local data center outages or disasters.",
    category: "dbcluster",
  },

  /* ================= ADD ONS ================= */
  {
    id: "addon1",
    title: "Redis Encrypted Connection",
    description:
      "We secure your Redis data with strong encryption during the transfer. This feature keeps your confidential data safe against any unauthorized access or data leakage.",
    category: "addon",
  },
  {
    id: "addon2",
    title: "MySQL SSL/TLS Encrypt",
    description:
      "Our team enables end-to-end encryption for all your MySQL data traffic. It meets high compliance standards, and your business information remains completely confidential.",
    category: "addon",
  },
  {
    id: "addon3",
    title: "Postgres SSL/TLS",
    description:
      "This service adds a layer of security to your PostgreSQL connections. It prevents hackers to intercept your data packets in the process of transmission.",
    category: "addon",
  },
  {
    id: "addon4",
    title: "Database Backup/Restore",
    description:
      "Our automated tool creates point-in-time recovery points for your database. With no effort, you can recover your data to any past state.",
    category: "addon",
  },
  {
    id: "addon5",
    title: "Database Corruption Diagnostic",
    description:
      "Our system checks your database health for any hidden file errors. It detects problems at an early stage and avoids any significant loss of data to your company.",
    category: "addon",
  },
  {
    id: "addon6",
    title: "Database Cluster Recovery",
    description:
      "This tool fixes your failed clusters and recovers them fast. It automates the repair process and saves your business a lot of time.",
    category: "addon",
  },
  {
    id: "addon7",
    title: "SSL/TLS Encryption",
    description:
      "We provide full certificates to secure every connection to your server. This feature builds trust and secures your customer information.",
    category: "addon",
  },
  {
    id: "addon8",
    title: "Corruption Diagnostic Tools",
    description:
      "Our automated scripts monitor your data integrity at the disk level. The system notifies our team in case it detects any bad sectors or errors.",
    category: "addon",
  },
  {
    id: "addon9",
    title: "Automated Cluster Recovery",
    description:
      "This service recovers your database nodes in case of an abrupt hardware failure. It takes care of the re-syncing process without any manual work from your side.",
    category: "addon",
  },
  {
    id: "addon10",
    title: "TimeZone Change Service",
    description:
      "We set your database clock to your local business time. This ensures your logs and reports show the correct time for your region.",
    category: "addon",
  },
  {
    id: "addon11",
    title: "BitNinja Security Suite",
    description:
      "This tool offers a strong protection against malware and DDoS attacks. It cleans your traffic and blocks malicious bots before they reach your data.",
    category: "addon",
  },
];
 
const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "vps":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "k8s":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "db":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7v6c0 1.657 3.134 3 7 3s7-1.343 7-3V7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "redis":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 12s4-5 8-5 8 5 8 5-4 5-8 5-8-5-8-5z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export default function ProductTabs() {
  const [tab, setTab] = useState<"all" | "indivdb" | "dbcluster" | "addon">("all");

  const filtered =
    tab === "all"
      ? TEST_DATA
      : TEST_DATA.filter((item) => item.category === tab);

  return (
<section className="py-20 ">
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <h2 className="cc-h2">Our Full Range of Managed Database Hosting Solutions</h2>
      <p className="subtitle">We provide many types of databases for any type of application.</p>
    </motion.div>

    {/* Tabs */}
    <motion.div
      className="flex gap-2 mb-8 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {[
        { id: "all", label: "All Products" },
        { id: "indivdb", label: "Individual Databases" },
        { id: "dbcluster", label: "Database Clusters" },
        { id: "addon", label: "Add Ons" },
      ].map((t) => (
        <button
          key={t.id}
          onClick={() => setTab(t.id as any)}
          className={` px-4 py-2 rounded-md font-medium text-[#ffffffb3] transition-all ${
            tab === t.id
              ? "bg-white text-black shadow database-tab border-0"
              : "bg-transparent"
          }`}
        >
          {t.label}
        </button>
      ))}
    </motion.div>

    {/* Cards */}
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            className="box1"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <div className="box2 h-full p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex gap-4">
                <div className="text-white">
                  {item.category === "product" ? (
                    item.title.toLowerCase().includes("kubernetes") ? (
                      <Icon name="k8s" />
                    ) : (
                      <Icon name="vps" />
                    )
                  ) : item.title.toLowerCase().includes("redis") ? (
                    <Icon name="redis" />
                  ) : (
                    <Icon name="db" />
                  )}
                </div>

                <div>
                  <h3 className="cc-h3 mb-2">
                    {item.title}
                  </h3>
                  <p className="cc-p">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</section>
  );
}