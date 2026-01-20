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
              <div className="absolute top-full left-1/2 -translate-x-[40%] mt-5 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black border border-white/15 rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  {/* HERO CARD ON TOP */}
                  <a
                    href="/paas"
                    className="flex items-center gap-3 px-4 py-3 border-b border-white/20 cursor-pointer group transition-colors bg-white/5 rounded-t-2xl"
                  >
                    <div className="w-12 h-12 flex items-center justify-center  bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                      <Server className="w-6 h-6 text-white/80 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                        PaaS Platform
                      </span>
                      <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                        Explore all PaaS services
                      </span>
                    </div>
                  </a>

                  {/* LEFT SIDEBAR WITH OTHER PaaS TABS */}
                  <div className="flex flex-col">
                    {/* TOP HORIZONTAL PaaS TABS */}
                    <div className="flex gap-2 px-4 pt-4 border-b border-white/20">
                      {[
                        { id: "application", label: "Application" },
                        { id: "database", label: "Database" },
                        { id: "storage", label: "Storage" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onMouseEnter={() => setPaasTab(item.id)}
                          className={`px-4 py-2 rounded-t-lg font-sora text-sm transition
        ${
          paasTab === item.id
            ? "bg-white/10 text-white border-b-2 border-white"
            : "text-white/60 hover:text-white"
        }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1 p-5 text-white">
                      {/* Application */}
                      {paasTab === "application" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/application"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center  bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Layers className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Application Hosting
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Deploy apps anywhere, anytime
                              </span>
                            </div>
                          </a>

                          <div className="border-b border-white/20 mb-4"></div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {applicationItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors group"
                              >
                                <item.icon className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
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

                      {/* Database */}
                      {paasTab === "database" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/database"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Database className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Database Hosting
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Manage your data efficiently
                              </span>
                            </div>
                          </a>
                          <div className="border-b border-white/20 mb-4"></div>
                        </div>
                      )}

                      {/* Storage */}
                      {paasTab === "storage" && (
                        <div className="space-y-4">
                          <a
                            href="/paas/storage"
                            className="flex items-center gap-3 mb-2 cursor-pointer group transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-white/20 flex-shrink-0">
                              <Box className="w-6 h-6 text-white/80 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold font-sora text-white group-hover:text-white">
                                Storage Hosting
                              </span>
                              <span className="text-[10px] text-white/60 group-hover:text-white/70 font-sora">
                                Secure cloud storage
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
            onClick={() => setOpen(true)}
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
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-black/80 backdrop-blur-xl border-l border-white/20
        transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-white">
          <div>
            <p className="text-white/70 mb-2">PaaS</p>
            <div className="pl-4 space-y-2">
              <a href="/paas">Overview</a>
              <a href="/paas/application/php-hosting">PHP Hosting</a>
              <a href="/paas/laravel-hosting">Laravel Hosting</a>
              <a href="/paas/database">Database</a>
              <a href="/paas/storage">Storage</a>
            </div>
          </div>

          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>

          <a
            href="https://app.cantech.cloud/?signup=true"
            target="_blank"
            className="block text-center py-3 rounded-full bg-black/70 shadow-[0_0_12px_rgba(192,192,192,0.6)]"
          >
            Get Started →
          </a>
        </div>
      </aside>
    </>
  );
}
