"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Server,
  Database,
  Box,
  Cpu,
  DollarSign,
} from "lucide-react";
import { Code2, Layers } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paasTab, setPaasTab] = useState("application");
  const [computeTab, setComputeTab] = useState("kubernetes");
  const [pricingTab, setPricingTab] = useState<"paas" | "compute">("paas");
  const [mobileOpen, setMobileOpen] = useState(false); // hamburger open/close
  const [mobileMenu, setMobileMenu] = useState<
    "paas" | "compute" | "pricing" | null
  >(null); // which main menu is open
  const [mobilePaasTab, setMobilePaasTab] = useState<
    "application" | "database" | "storage"
  >("application");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const applicationItems = [
    {
      name: "PHP Hosting",
      description: "High-performance PHP runtime",
      href: "/paas/application/php-hosting",
      icon: Code2,
    },
    {
      name: "Laravel Hosting",
      description: "Optimized for Laravel apps",
      href: "/paas/application/laravel-hosting",
      icon: Layers,
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6 md:px-8">
        <div
          className={`mx-auto border border-white/20 bg-black/80 rounded-full backdrop-blur-xl px-6 md:px-8 h-[55px]
            flex items-center transition-all duration-300 ease-out
            ${
              scrolled
                ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
                : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
            }`}
        >
          {/* LOGO */}
          <div className="flex flex-1 items-center">
            <a href="/">
              <img
                src="/assets/images/logo/cantech-cloud-logo.svg"
                alt="Cantech Cloud"
                className="h-10"
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex flex-1 justify-center items-center space-x-6 text-white/80 pl-20">

            {/* ================= PaaS ================= */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-white font-sora">
                PaaS
                <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
              </button>

              {/* MEGA MENU */}
              <div className="absolute top-full left-1/2 -translate-x-[50%] mt-5 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black border border-white/15 rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  {/* HERO CARD */}
                  <a
                    href="/paas"
                    className="flex items-center gap-3 px-4 py-3 border-b border-white/20 cursor-pointer group transition-colors bg-white/5 rounded-t-2xl"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                      <Layers className="w-6 h-6 text-white/80 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold font-sora text-white">
                        PaaS Platform
                      </span>
                      <span className="text-[10px] text-white/60 font-sora">
                        Explore all PaaS services
                      </span>
                    </div>
                  </a>

                  <div className="flex">
                    {/* LEFT SIDEBAR */}
                    <div className="w-48 p-4 border-r border-white/20 space-y-2">
                      {[
                        { id: "application", label: "Application" },
                        { id: "database", label: "Database" },
                        { id: "storage", label: "Storage" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onMouseEnter={() => setPaasTab(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-sora transition
                ${
                  paasTab === item.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5"
                }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1 p-5 text-white">
                      {/* APPLICATION */}
                      {paasTab === "application" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/application"
                            className="flex items-start gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Layers className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white">
                                Application Platform
                              </span>
                              <span className="text-[10px] text-white/60 font-sora">
                                Deploy and manage applications
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                          <div className="grid grid-cols-2 gap-3">
                            {applicationItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition group"
                              >
                                <item.icon className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />

                                <div className="flex flex-col">
                                  <span className="font-sora text-sm font-medium text-white">
                                    {item.name}
                                  </span>
                                  <span className="font-sora text-xs text-white/60">
                                    {item.description}
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* DATABASE */}
                      {paasTab === "database" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/database"
                            className="flex items-start gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Database className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white">
                                Database Services
                              </span>
                              <span className="text-[10px] text-white/60 font-sora">
                                Managed SQL & NoSQL databases
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                        </div>
                      )}

                      {/* STORAGE */}
                      {paasTab === "storage" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/storage"
                            className="flex items-start gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Box className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white">
                                Storage Services
                              </span>
                              <span className="text-[10px] text-white/60 font-sora">
                                Secure object & file storage
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* ================= COMPUTE ================= */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-white font-sora">
                Compute
                <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
              </button>

              {/* MEGA MENU */}
              <div className="absolute top-full left-1/2 -translate-x-[30%] mt-5 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black border border-white/15 rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  {/* HERO CARD ON TOP */}
                  <a
                    href="/compute"
                    className="flex items-center gap-3 px-4 py-3 border-b border-white/20 cursor-pointer group transition-colors bg-white/5 rounded-t-2xl"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                      <Server className="w-6 h-6 text-white/80 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                        Compute Platform
                      </span>
                      <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                        Explore all Compute services
                      </span>
                    </div>
                  </a>

                  {/* LEFT SIDEBAR WITH OTHER COMPUTE TABS */}
                  <div className="flex">
                    <div className="w-48 p-4 border-r border-white/20 space-y-2">
                      {[
                        { id: "kubernetes", label: "Kubernetes" },
                        { id: "storage", label: "Storage" },
                        { id: "network", label: "Network" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onMouseEnter={() => setComputeTab(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-sora transition
                ${
                  computeTab === item.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5"
                }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1 p-5 text-white">
                      {/* Kubernetes */}
                      {computeTab === "kubernetes" && (
                        <div className="space-y-4">
                          <a
                            href="/compute/kubernetes"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Server className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Kubernetes Cluster
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Fully managed, production-ready Kubernetes
                              </span>
                            </div>
                          </a>
                        </div>
                      )}

                      {/* Storage */}
                      {computeTab === "storage" && (
                        <div className="space-y-4">
                          <a
                            href="/compute/storage"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Box className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Storage Services
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Object and Block storage for compute
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                        </div>
                      )}

                      {/* Network */}
                      {computeTab === "network" && (
                        <div className="space-y-4">
                          <a
                            href="/compute/network"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Layers className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Network Services
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Load balancers, firewalls, and networking
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* ================= PRICING ================= */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-white font-sora">
                Pricing
                <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
              </button>

              {/* SIMPLE DROPDOWN */}
              <div className="absolute top-full left-1/2 -translate-x-[45%] mt-6 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black border border-white/15 rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  {/* DROPDOWN LINKS */}
                  <a
                    href="/paas/pricing"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg group hover:bg-white/10 transition-colors"
                  >
                    <Layers className="w-5 h-5 text-white/80 group-hover:text-white" />
                    <span className="text-sm font-sora text-white group-hover:text-white">
                      PaaS Pricing
                    </span>
                  </a>

                  <a
                    href="/compute/pricing"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg group hover:bg-white/10 transition-colors"
                  >
                    <Server className="w-5 h-5 text-white/80 group-hover:text-white" />
                    <span className="text-sm font-sora text-white group-hover:text-white">
                      Compute Pricing
                    </span>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="/about" className="hover:text-white font-sora">
                About
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-white font-sora">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white font-sora">
                Blog
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex flex-1 justify-end">
            <a
              href="https://app.cantech.cloud/?signup=true"
              target="_blank"
              className="pl-2 pr-0 py-2 rounded-full text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,1)]"
            >
              Get Started →
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[90%] md:max-w-md
  bg-black/90 backdrop-blur-xl border-l border-white/20
  transform transition-transform duration-300
  ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="p-5 space-y-4 text-white overflow-y-auto">
          {/* PaaS */}
          <div>
            <button
              onClick={() =>
                setMobileMenu(mobileMenu === "paas" ? null : "paas")
              }
              className="w-full flex justify-between items-center font-semibold text-white"
            >
              PaaS
              <ChevronDown
                className={`transition-transform ${
                  mobileMenu === "paas" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenu === "paas" && (
              <div className="mt-2 pl-4 space-y-2">
                {/* PaaS Tabs */}
                {["application", "database", "storage"].map((tab) => (
                  <div key={tab}>
                    <button
                      onClick={() =>
                        setMobilePaasTab(tab as typeof mobilePaasTab)
                      }
                      className="w-full flex justify-between items-center px-2 py-1 text-sm text-white/80 hover:text-white"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {tab === "application" && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobilePaasTab === "application" ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Application Submenu */}
                    {tab === "application" &&
                      mobilePaasTab === "application" && (
                        <div className="pl-4 mt-1 space-y-1 text-white/70">
                          <a
                            href="/paas/application/php-hosting"
                            className="block px-2 py-1 hover:text-white"
                          >
                            PHP Hosting
                          </a>
                          <a
                            href="/paas/application/laravel-hosting"
                            className="block px-2 py-1 hover:text-white"
                          >
                            Laravel Hosting
                          </a>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Compute */}
          <div>
            <button
              onClick={() =>
                setMobileMenu(mobileMenu === "compute" ? null : "compute")
              }
              className="w-full flex justify-between items-center font-semibold text-white"
            >
              Compute
              <ChevronDown
                className={`transition-transform ${
                  mobileMenu === "compute" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenu === "compute" && (
              <div className="mt-2 pl-4 space-y-1 text-white/70">
                <a
                  href="/compute/kubernetes"
                  className="block px-2 py-1 hover:text-white"
                >
                  Kubernetes
                </a>
                <a
                  href="/compute/storage"
                  className="block px-2 py-1 hover:text-white"
                >
                  Storage
                </a>
                <a
                  href="/compute/network"
                  className="block px-2 py-1 hover:text-white"
                >
                  Network
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div>
            <button
              onClick={() =>
                setMobileMenu(mobileMenu === "pricing" ? null : "pricing")
              }
              className="w-full flex justify-between items-center font-semibold text-white"
            >
              Pricing
              <ChevronDown
                className={`transition-transform ${
                  mobileMenu === "pricing" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenu === "pricing" && (
              <div className="mt-2 pl-4 space-y-1 text-white/70">
                <a
                  href="/paas/pricing"
                  className="block px-2 py-1 hover:text-white"
                >
                  PaaS Pricing
                </a>
                <a
                  href="/compute/pricing"
                  className="block px-2 py-1 hover:text-white"
                >
                  Compute Pricing
                </a>
              </div>
            )}
          </div>

          {/* Simple links */}
          <a href="/about" className="block px-2 py-1 hover:text-white">
            About
          </a>
          <a href="/contact-us" className="block px-2 py-1 hover:text-white">
            Contact
          </a>
          <a href="/blog" className="block px-2 py-1 hover:text-white">
            Blog
          </a>

          {/* CTA */}
          <a
            href="https://app.cantech.cloud/?signup=true"
            target="_blank"
            className="block mt-4 py-3 text-center rounded-full bg-white text-black font-semibold"
          >
            Get Started →
          </a>
        </div>
      </aside>
    </>
  );
}
