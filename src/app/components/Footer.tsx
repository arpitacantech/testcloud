"use client";

import { useState } from "react";
import TawkTo from './TawkTo';
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* =====================
   Mobile Accordion Item
===================== */

const MobileAccordion = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-lg font-semibold text-gray-300"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-4 space-y-3 text-gray-400 overflow-hidden"
          >
            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[16px] hover:text-white transition-colors"
                >
                  {link.title}
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =====================
   Footer Component
===================== */

const Footer = () => {
  const productLinks = [
    { title: "PaaS Solutions", href: "/paas" },
    { title: "Compute Solutions", href: "/compute" },
    { title: "Storage", href: "/paas/storage" },
    { title: "Database", href: "/paas/database" },
    { title: "Kubernetes", href: "/compute/kubernetes" },
  ];

  const pricingLinks = [
    { title: "PaaS Pricing", href: "/paas/pricing" },
    { title: "Compute Pricing", href: "/compute/pricing" },
  ];

  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const legalLinks = [
    { title: "SLA", href: "/sla" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Acceptable Use Policy", href: "/acceptable-policy" },
    { title: "eKYC Verification", href: "/ekyc-verification" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/cantechnetworks/" },
    { icon: Twitter, href: "https://x.com/CantechHosting" },
    { icon: Instagram, href: "https://www.instagram.com/cantechhosting/" },
    { icon: Youtube, href: "https://www.youtube.com/user/CantechIndia" },
  ];

  // const startYear = 2019;
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer className="bg-footer-bg gradient-border">
      <div className="container max-w-6xl mx-auto px-6 pt-16">
        {/* Logo */}
        <div className="flex flex-1 items-center gap-2 mb-8">
          <div className="flex flex-1 items-center gap-2">
            <a href="/" className="flex items-center gap-2">
                <img
                src="/assets/images/logo/cantech-cloud-logo.svg"
                alt="Cantech Cloud"
               />
             </a>
          </div>
        </div>

        {/* ================= MOBILE FOOTER ================= */}
        <div className="md:hidden space-y-6 mb-12">
          <MobileAccordion title="Products" links={productLinks} />
          <MobileAccordion title="Pricing" links={pricingLinks} />
          <MobileAccordion title="Company" links={companyLinks} />
          <MobileAccordion title="Legal" links={legalLinks} />

          {/* Social */}
          <div>
            <div className="text-lg font-semibold text-gray-300 mb-4">
              Follow Us
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  rel="nofollow"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP FOOTER (UNCHANGED) ================= */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Products */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Products
            </div>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Pricing
            </div>
            <ul className="space-y-3 text-gray-400">
              {pricingLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Company
            </div>
            <ul className="space-y-3 text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Legal
            </div>
            <ul className="space-y-3 text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Follow Us
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <p className="text-base text-gray-400 text-center mb-6">
          © Copyright {currentYear} Cantech Cloud. All rights reserved.
        </p>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
    <TawkTo />
    </>
  );
};

export default Footer;