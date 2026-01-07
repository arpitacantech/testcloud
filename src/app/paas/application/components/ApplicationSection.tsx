"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  title: string;
  description: string;
  // logo: string;
  category: string;
}

const tabs = [
  "All Apps",
  "Web & CMS",
  "Programming Frameworks",
  "Enterprise Management",
  "Collaboration Tools",
  "Databases & Storage",
  "DevOps Tools",
  "Monitoring Performance",
  "Security Utilities",
];

const cards: Card[] = [
  {
    id: 1,
    // logo: "/assets/images/application/wordpress.png",
    title: "WordPress",
    description:
      "This platform powers most of the web. We provide optimized performance and automatic updates for your site.",
    category: "Web & CMS",
  },
  {
    id: 2,
    // logo: "/assets/images/application/wordpress-cluster.png",
    title: "WordPress Cluster",
    description:
      "You get high availability for your blog. It uses load balancing to handle massive visitor traffic.",
    category: "Web & CMS",
  },
  {
    id: 3,
    // logo: "/assets/images/application/wordpress-standalone.png",
    title: "WordPress Standalone Kit",
    description:
      "This tool provides a streamlined setup for individual sites. It includes performance tuning for better speed.",
    category: "Web & CMS",
  },
  {
    id: 4,
    // logo: "/assets/images/application/wordpress-multiregion.png",
    title: "Multi-Region WordPress",
    description:
      "Run your site across different global locations. It uses LiteSpeed to ensure low latency for everyone.",
    category: "Web & CMS",
  },
  {
    id: 5,
    // logo: "/assets/images/application/joomla.png",
    title: "Joomla",
    description:
      "This flexible CMS offers deep customization. It supports many languages and robust content management features.",
    category: "Web & CMS",
  },
  {
    id: 6,
    // logo: "/assets/images/application/drupal.png",
    title: "Drupal",
    description:
      "Build enterprise-level sites with advanced security. It offers powerful modeling and extensive API capabilities.",
    category: "Web & CMS",
  },
  {
    id: 7,
    // logo: "/assets/images/application/magento.png",
    title: "Magento",
    description:
      "This is a heavy-duty e-commerce platform. It handles multi-store management and B2B sales easily.",
    category: "Web & CMS",
  },
  {
    id: 8,
    // logo: "/assets/images/application/magento-cluster.png",
    title: "Magento Cluster",
    description:
      "Scale your store with load balancing. This setup ensures your large online shop never goes offline.",
    category: "Web & CMS",
  },
  {
    id: 9,
    // logo: "/assets/images/application/ghost.png",
    title: "Ghost",
    description:
      "Use this modern platform for newsletters and blogs. It offers a clean design and very high performance.",
    category: "Web & CMS",
  },
  {
    id: 10,
    // logo: "/assets/images/application/prestashop.png",
    title: "PrestaShop",
    description:
      "This feature-rich store builder has advanced product management. You can customize every part of your shop.",
    category: "Web & CMS",
  },
  {
    id: 11,
    // logo: "/assets/images/application/opencart.png",
    title: "OpenCart",
    description:
      "This user-friendly shop platform manages multiple stores. It includes payment gateways and shipping tools.",
    category: "Web & CMS",
  },
  {
    id: 12,
    // logo: "/assets/images/application/woocommerce.png",
    title: "WooCommerce",
    description:
      "This e-commerce tool works inside WordPress. It handles inventory and payments with a scalable architecture.",
    category: "Web & CMS",
  },
  {
    id: 13,
    // logo: "/assets/images/application/moodle.png",
    title: "Moodle",
    description:
      "This is a top learning management system. It tracks student progress and manages online courses efficiently.",
    category: "Web & CMS",
  },
  {
    id: 14,
    // logo: "/assets/images/application/python.png",
    title: "Python",
    description:
      "This versatile language is great for AI and data science. It comes with extensive libraries for fast development.",
    category: "Programming Frameworks",
  },
  {
    id: 15,
    // logo: "/assets/images/application/nodejs.png",
    title: "Node.js",
    description:
      "Build scalable network apps with this JavaScript runtime. It has a huge ecosystem for rapid building.",
    category: "Programming Frameworks",
  },
  {
    id: 16,
    // logo: "/assets/images/application/laravel.png",
    title: "Laravel",
    description:
      "This PHP framework uses elegant syntax. It includes built-in tools for authentication and web development.",
    category: "Programming Frameworks",
  },
  {
    id: 17,
    // logo: "/assets/images/application/ruby.png",
    title: "Ruby",
    description:
      "Focus on productivity with this simple language. It is famous for the Ruby on Rails framework.",
    category: "Programming Frameworks",
  },
  {
    id: 18,
    // logo: "/assets/images/application/php.png",
    title: "PHP",
    description:
      "This server-side language builds dynamic websites. It works perfectly with almost all web applications.",
    category: "Programming Frameworks",
  },
  {
    id: 19,
    // logo: "/assets/images/application/java.png",
    title: "Java",
    description:
      "This language is ideal for big enterprise apps. It works on any platform and powers many cloud-native tools.",
    category: "Programming Frameworks",
  },
  {
    id: 20,
    // logo: "/assets/images/application/spring-boot-cluster.png",
    title: "Spring Boot Cluster",
    description:
      "Run Java apps with automatic scaling. It offers enterprise-grade reliability for your backend.",
    category: "Programming Frameworks",
  },
  {
    id: 21,
    // logo: "/assets/images/application/spring-boot-builders.png",
    title: "Spring Boot Builders",
    description:
      "Choose between Thin or Fat Jar builders. These tools optimize your Java packaging for fast deployment.",
    category: "Programming Frameworks",
  },
  {
    id: 22,
    // logo: "/assets/images/application/django-cms.png",
    title: "Django CMS",
    description:
      "This system is built on the Django framework. It offers a clean and developer-friendly way to manage content.",
    category: "Programming Frameworks",
  },
  {
    id: 23,
    // logo: "/assets/images/application/open-liberty.png",
    title: "Open Liberty",
    description:
      "Build fast Java microservices with this framework. It is designed for efficient cloud-native development.",
    category: "Programming Frameworks",
  },
  {
    id: 24,
    // logo: "/assets/images/application/eclipse-vertx.png",
    title: "Eclipse Vert.x Builders",
    description:
      "Create self-contained JARs for your apps. These utilities simplify your deployment and portability.",
    category: "Programming Frameworks",
  },
  {
    id: 25,
    // logo: "/assets/images/application/dropwizard.png",
    title: "DropWizard Builder",
    description:
      "Package your microservices into fat JARs easily. It simplifies the deployment of your Java services.",
    category: "Programming Frameworks",
  },
  {
    id: 26,
    // logo: "/assets/images/application/dotnet-core.png",
    title: "Dot NET Core",
    description:
      "Build scalable Linux or Windows apps. This framework is perfect for modern cloud solutions.",
    category: "Programming Frameworks",
  },
  {
    id: 27,
    // logo: "/assets/images/application/odoo.png",
    title: "Odoo",
    description:
      "This is a full suite for business management. It integrates CRM and inventory into one platform.",
    category: "Enterprise Management",
  },
  {
    id: 28,
    // logo: "/assets/images/application/erpnext.png",
    title: "ERPNext",
    description:
      "Manage your accounting and HR in one place. This open-source tool tracks projects and customer data.",
    category: "Enterprise Management",
  },
  {
    id: 29,
    // logo: "/assets/images/application/vtiger.png",
    title: "Vtiger CRM",
    description:
      "Streamline your sales and support tasks. It automates workflows and email campaigns to drive growth.",
    category: "Enterprise Management",
  },
  {
    id: 30,
    // logo: "/assets/images/application/jira.png",
    title: "Jira Software",
    description:
      "Manage your agile projects with ease. It includes sprint planning and team collaboration tools.",
    category: "Enterprise Management",
  },
  {
    id: 31,
    // logo: "/assets/images/application/liferay.png",
    title: "Liferay",
    description:
      "Use this leading platform to build web portals. It is an open-source solution for enterprise digital experiences.",
    category: "Enterprise Management",
  },
  {
    id: 32,
    // logo: "/assets/images/application/cyclos.png",
    title: "Cyclos 4 PRO",
    description:
      "Run your own online banking or payment system. It is perfect for microfinance and community systems.",
    category: "Enterprise Management",
  },
   {
    id: 33,
    // logo: "/assets/images/application/jitsi.png",
    title: "Jitsi Meet",
    description:
      "Host secure video calls with HD quality. It includes screen sharing and real-time collaboration.",
    category: "Collaboration Tools",
  },
  {
    id: 34,
    // logo: "/assets/images/application/nextcloud.png",
    title: "Nextcloud",
    description:
      "This is a self-hosted cloud storage solution. You keep full control of your files and data.",
    category: "Collaboration Tools",
  },
  {
    id: 35,
    // logo: "/assets/images/application/mattermost.png",
    title: "Mattermost",
    description:
      "This messaging platform is built for secure teams. It offers a private way to collaborate and integrate tools.",
    category: "Collaboration Tools",
  },
  {
    id: 36,
    // logo: "/assets/images/application/email.png",
    title: "Email",
    description:
      "Get professional mail with spam protection. It uses custom domains for your business communication.",
    category: "Collaboration Tools",
  },
  {
    id: 37,
    // logo: "/assets/images/application/webmail-lite.png",
    title: "WebMail Lite",
    description:
      "Use this lightweight email client for your server. It supports IMAP and SMTP with a clean interface.",
    category: "Collaboration Tools",
  },
  {
    id: 38,
    // logo: "/assets/images/application/discourse.png",
    title: "Discourse",
    description:
      "Start an open-source forum for discussions. It focuses on high-quality conversations and a clean user experience.",
    category: "Collaboration Tools",
  },
  {
    id: 39,
    // logo: "/assets/images/application/xwiki.png",
    title: "XWiki",
    description:
      "This is a powerful enterprise wiki platform. It helps in knowledge sharing and collaboration within your team.",
    category: "Collaboration Tools",
  },
  {
    id: 40,
    // logo: "/assets/images/application/dokuwiki.png",
    title: "DokuWiki",
    description:
      "It is a simple and file-based wiki. You get easy documentation without a complex database.",
    category: "Collaboration Tools",
  },
  {
    id: 41,
    // logo: "/assets/images/application/mongodb.png",
    title: "MongoDB",
    description:
      "This NoSQL database is compatible with modern applications that need horizontal scaling. This database uses a flexible scheme.",
    category: "Databases & Storage",
  },
  {
    id: 42,
    // logo: "/assets/images/application/mongodb-replica.png",
    title: "MongoDB Replica Set",
    description:
      "Ensure high availability for your data. It provides automatic backup and data redundancy.",
    category: "Databases & Storage",
  },
  {
    id: 43,
    // logo: "/assets/images/application/mysql-mariadb.png",
    title: "MySQL & MariaDB",
    description:
      "These are high-performance relational databases. They include automated backups and simplified settings.",
    category: "Databases & Storage",
  },
  {
    id: 44,
    // logo: "/assets/images/application/postgresql.png",
    title: "PostgreSQL",
    description:
      "This advanced database handles complex queries. It is ACID-compliant and supports JSON data.",
    category: "Databases & Storage",
  },
  {
    id: 45,
    // logo: "/assets/images/application/postgresql-multiregion.png",
    title: "PostgreSQL Multi-Region",
    description:
      "Distribute your data across several regions. This setup keeps your database online everywhere around the globe.",
    category: "Databases & Storage",
  },
  {
    id: 46,
    // logo: "/assets/images/application/redis.png",
    title: "Redis",
    description:
      "This in-memory store works as a fast cache. It offers extremely high speed for real-time workloads.",
    category: "Databases & Storage",
  },
  {
    id: 47,
    // logo: "/assets/images/application/redis-cluster.png",
    title: "Redis Cluster",
    description:
      "Get high availability with data sharding. This setup provides automatic failover for your cache.",
    category: "Databases & Storage",
  },
  {
    id: 48,
    // logo: "/assets/images/application/object-storage.png",
    title: "Object Storage",
    description:
      "Save unstructured data with S3 compatibility. It is highly durable and stays available at all times.",
    category: "Databases & Storage",
  },
  {
    id: 49,
    // logo: "/assets/images/application/file-storage.png",
    title: "File Storage",
    description:
      "This cloud solution offers secure file access. It allows your team to collaborate with fast performance.",
    category: "Databases & Storage",
  },
  {
    id: 50,
    // logo: "/assets/images/application/glusterfs.png",
    title: "GlusterFS",
    description:
      "It is a distributed file system for big data. It ensures your storage is fault-tolerant across nodes.",
    category: "Databases & Storage",
  },
  {
    id: 51,
    // logo: "/assets/images/application/couchbase.png",
    title: "Couchbase CE Cluster",
    description:
      "It is an automatic scaling NoSQL cluster. It provides high performance for flexible data.",
    category: "Databases & Storage",
  },
  {
    id: 52,
    // logo: "/assets/images/application/kubernetes.png",
    title: "Kubernetes Cluster",
    description:
      "Automate container management. It takes care of scaling and deployment across your infrastructure.",
    category: "DevOps Tools",
  },
  {
    id: 53,
    // logo: "/assets/images/application/docker-swarm.png",
    title: "Docker Swarm",
    description:
      "This is a lightweight container platform. It includes built-in load balancing for your microservices.",
    category: "DevOps Tools",
  },
  {
    id: 54,
    // logo: "/assets/images/application/docker-engine.png",
    title: "Docker Engine",
    description:
      "Build and run your apps consistently. This runtime works the same in any environment.",
    category: "DevOps Tools",
  },
  {
    id: 55,
    // logo: "/assets/images/application/gitlab.png",
    title: "GitLab Server",
    description:
      "Host your own Git repository. It includes CI/CD pipelines for complete development workflows.",
    category: "DevOps Tools",
  },
  {
    id: 56,
    // logo: "/assets/images/application/jenkins.png",
    title: "Jenkins DevOps Pack",
    description:
      "Automate your delivery pipeline with this toolkit. It comes with preconfigured plugins for integration.",
    category: "DevOps Tools",
  },
  {
    id: 57,
    // logo: "/assets/images/application/nexus.png",
    title: "Nexus Repository",
    description:
      "Manage your software components in a centralized manner. It organizes and distributes your application dependencies.",
    category: "DevOps Tools",
  },
  {
    id: 58,
    // logo: "/assets/images/application/eclipse-che.png",
    title: "Eclipse Che",
    description:
      "Use this cloud-based IDE for your team. It offers container-native workspaces for development.",
    category: "DevOps Tools",
  },
  {
    id: 59,
    // logo: "/assets/images/application/plesk.png",
    title: "Plesk",
    description:
      "This hosting panel automates your site management. It includes developer tools and strong security.",
    category: "DevOps Tools",
  },
  {
    id: 60,
    // logo: "/assets/images/application/git-push-deploy.png",
    title: "Git-Push-Deploy",
    description:
      "Push your code with a single command. This extension makes your delivery workflow faster.",
    category: "DevOps Tools",
  },
   {
    id: 61,
    // logo: "/assets/images/application/intelligent-search.png",
    title: "Intelligent Search",
    description:
      "Quickly add lightning-fast search to your apps. It gives a typo-tolerant result without high costs.",
    category: "Monitoring Performance",
  },
  {
    id: 62,
    // logo: "/assets/images/application/apache-superset.png",
    title: "Apache Superset",
    description:
      "Build powerful data dashboards. It is linked to 60+ deep analytics sources.",
    category: "Monitoring Performance",
  },
  {
    id: 63,
    // logo: "/assets/images/application/plausible.png",
    title: "Plausible Analytics",
    description:
      "Track your traffic with a privacy focus. It is compliant with GDPR and helps boost your SEO.",
    category: "Monitoring Performance",
  },
  {
    id: 64,
    // logo: "/assets/images/application/new-relic.png",
    title: "New Relic APM",
    description:
      "Track your application performance in real-time. It gives profound insights into errors and infrastructure.",
    category: "Monitoring Performance",
  },
  {
    id: 65,
    // logo: "/assets/images/application/nginx-amplify.png",
    title: "NGINX Amplify",
    description:
      "Analyze your NGINX configuration and metrics. It identifies errors and performance notifications.",
    category: "Monitoring Performance",
  },
  {
    id: 66,
    // logo: "/assets/images/application/traffic-distributor.png",
    title: "Traffic Distributor",
    description:
      "Optimize your global load balancing. This tool ensures high availability across different regions.",
    category: "Monitoring Performance",
  },
  {
    id: 67,
    // logo: "/assets/images/application/http3-cdn.png",
    title: "HTTP/3 Premium CDN",
    description:
      "Speed up your site with next-gen delivery. It ensures secure and reliable performance worldwide.",
    category: "Monitoring Performance",
  },
  {
    id: 68,
    // logo: "/assets/images/application/lets-encrypt.png",
    title: "Let's Encrypt SSL",
    description:
      "Get free certificates for your site. The tool automatically secures your data using HTTPS.",
    category: "Security Utilities",
  },
  {
    id: 69,
    // logo: "/assets/images/application/bitninja.png",
    title: "BitNinja",
    description:
      "Protect your server with this all-in-one suite. It stops malware and DDoS attacks proactively.",
    category: "Security Utilities",
  },
  {
    id: 70,
    // logo: "/assets/images/application/fail2ban.png",
    title: "Fail2Ban",
    description:
      "This is a tool that blocks malicious IPs on your server. It protects you against brute-force login attacks.",
    category: "Security Utilities",
  },
  {
    id: 71,
    // logo: "/assets/images/application/openvpn.png",
    title: "OpenVPN",
    description:
      "Enable secure remote access for your team. This VPN offers encrypted site-to-site connectivity.",
    category: "Security Utilities",
  },
  {
    id: 72,
    // logo: "/assets/images/application/backup-restore.png",
    title: "Backup & Restore Add-ons",
    description:
      "We have special WordPress and database tools. You are able to schedule backups and restore data with a single click.",
    category: "Security Utilities",
  },
  {
    id: 73,
    // logo: "/assets/images/application/file-sync.png",
    title: "File Synchronization",
    description:
      "Synchronize updated files on all devices. This service keeps your data up to date and safe.",
    category: "Security Utilities",
  },
  {
    id: 74,
    // logo: "/assets/images/application/timezone.png",
    title: "TimeZone Change",
    description:
      "Adjust your server time settings easily. This utility keeps your schedules and logs accurate.",
    category: "Security Utilities",
  },
  {
    id: 75,
    // logo: "/assets/images/application/env-scheduler.png",
    title: "Env Scheduler",
    description:
      "Save costs by scheduling your environment times. You can automatically stop non-peak workloads.",
    category: "Security Utilities",
  },
  {
    id: 76,
    // logo: "/assets/images/application/nginx-safe-reload.png",
    title: "NGINX Safe Reload",
    description:
      "Update your settings without a restart. This tool is used to test your syntax to prevent downtime.",
    category: "Security Utilities",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState<string>("All Apps");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const matchesTab =
        activeTab === "All Apps" || card.category === activeTab;

      const matchesSearch = card.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);
  
  return (
    <section className="py-20 bg-black text-white">
      {/* Intro */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p className="title-badges">Applications</p>
        <h2 className="cc-h2">
          Select the application that best fits your needs
        </h2>
        <p className="subtitle">
          Choose from our range of applications to get started quickly
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search Application"
          value={searchQuery}
          onChange={handleSearchChange}
          className="
            w-full
            bg-[linear-gradient(135deg,#0d0d0d,#050505)]
            border border-white/10
            shadow-[0_0_10px_rgba(0,0,0,0.5)]
            text-gray-200
            rounded-lg
            px-4 py-3
            focus:outline-none
            focus:ring-1
            focus:ring-gray-700
          "
        />
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mb-10 overflow-x-auto bg-black rounded-lg scrollbar-dark">
        <div className="flex gap-3 px-2 w-max min-w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all mb-4 ${
                activeTab === tab
                  ? "application-bg-tab text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="cn-application-bx-one"
            >
              <div className="cn-application-bx-two p-6">
                {/* <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-8 h-8 filter grayscale"
                  />
                </div> */}

                <h3 className="cc-h3">
                  {card.title}
                </h3>

                <p className="cc-p">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredCards.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-gray-500"
          >
            No applications found.
          </motion.p>
        )}
      </motion.div>
       

      {/* <div><div className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-neutral-300 bg-white block"><div className="bg-slate-950 px-4 py-12"><div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50"><div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800 border-10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg><h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">Go faster</h4><p className="relative z-10 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.</p></div><div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{transform: 'scale(1.75) rotate(51.7371deg) translateZ(0px)'}}></div></div></div></div><div className="relative border border-neutral-300 bg-neutral-900 p-4 pt-0 none"><div className="-ml-4 -mr-4 mb-4 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 pr-4 text-sm"><div className="flex items-center font-medium"></div><div className="relative cursor-pointer text-xs text-neutral-50"><select className="w-[120px] cursor-pointer text-ellipsis bg-transparent pr-6 focus:outline-none"></select><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="pointer-events-none absolute right-0 top-[2px] cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg></div></div><div className="absolute inset-0 z-40 grid place-content-center bg-neutral-900/50 backdrop-blur"><a href="/pricing"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mx-auto mb-2 text-4xl font-semibold text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg><span className="text-sm font-medium text-white">Go pro to access this content</span></a></div><div className="no-scrollbar relative max-h-[445px] w-full overflow-scroll"></div><button className="absolute right-2 top-[60px] rounded bg-neutral-600 p-3 text-lg text-neutral-50 transition-colors hover:bg-neutral-500"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button></div></div> */}
   
    </section> 
  );
}