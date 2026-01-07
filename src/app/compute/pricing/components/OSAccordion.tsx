"use client";

import { useState } from "react";
import { ChevronDown, Server, Cpu, Database, Globe, HardDrive, Layers, Shield, Cloud, Network } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CustomDropdown } from "@/src/app/components/ui/CustomDropdown";
import { PricingToggle } from "@/src/app/components/ui/PricingToggle";
import { ServerPlanCard } from "./ServerPlanCard";
import type { OSCategory } from "@/data/serverPlans";

/* =====================
   Custom OS Icons
===================== */

const LinuxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.503 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.836-.41 1.757-.287 2.687.117.871.476 1.621.856 2.302-.195.089-.39.091-.589.094-1.05.015-1.632-.803-2.349-1.376-.375-.299-.753-.594-1.214-.722-.363-.101-.776-.095-1.13.073-.413.196-.685.582-.808.965-.253.782.103 1.707.655 2.306.439.476 1.01.831 1.589 1.16 1.228.696 2.588 1.208 4.011 1.356.912.095 1.837-.003 2.692-.309.757-.272 1.437-.711 1.991-1.293.554.582 1.234 1.021 1.991 1.293.855.306 1.78.404 2.692.309 1.423-.148 2.783-.66 4.011-1.356.579-.329 1.15-.684 1.589-1.16.552-.599.908-1.524.655-2.306-.123-.383-.395-.769-.808-.965-.354-.168-.767-.174-1.13-.073-.461.128-.839.423-1.214.722-.717.573-1.299 1.391-2.349 1.376-.199-.003-.394-.005-.589-.094.38-.681.739-1.431.856-2.302.123-.93-.009-1.851-.287-2.687-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z" />
  </svg>
);

const WindowsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.45H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.45L0 20.699M10.949 12.6H24V24l-13.051-1.95" />
  </svg>
);

const IPv4Icon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const StorageIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2zm0 4c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2zm0 4c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2z" />
  </svg>
);

const SnapshotIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .34-.03.67-.08 1h2.02c.04-.33.06-.66.06-1 0-4.42-3.58-8-8-8zm-6 6c0-.34.02-.67.06-1H4.04c-.05.33-.08.66-.08 1 0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
  </svg>
);

const VpnIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9z" />
  </svg>
);

const BackupIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 7h-1V6a6 6 0 10-12 0v1H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zm-7 9l-4-4h3V9h2v3h3l-4 4z" />
  </svg>
);

const LoadBalancerIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v4H3V3zm4 6h10v4H7V9zm-4 6h18v4H3v-4z" />
  </svg>
);

const osIcons: Record<string, React.ReactNode> = {
  linux: <LinuxIcon />,
  windows: <WindowsIcon />,
  ipv4: <IPv4Icon />,
  storage: <StorageIcon />,
  snapshot: <SnapshotIcon />,
  vpn: <VpnIcon />,
  backup: <BackupIcon />,
  "load-balancer": <LoadBalancerIcon />,
};

/* =====================
   Static Data
===================== */

const ipv4InstanceTypes = [
  { value: "ipv4", label: "IPv4" },
];

const serviceInstanceTypesMap: Record<string, { value: string; label: string }[]> = {
  storage: [{ value: "object-storage", label: "Storage" }],
  snapshot: [{ value: "snapshot", label: "Snapshot" }],
  vpn: [{ value: "vpn", label: "VPN" }],
  backup: [{ value: "backup", label: "Backup" }],
  "load-balancer": [{ value: "load-balancer", label: "Load Balancer" }],
  ipv4: [{ value: "ipv4", label: "IPv4" }],
};

const instanceTypes = [
  { value: "general-purpose", label: "General Purpose" },
  { value: "cpu-intensive", label: "CPU Intensive" },
  { value: "memory-optimized", label: "Memory Optimized" },
];

const currencies = [
  { value: "USD", label: "$ USD" },
  { value: "INR", label: "₹ INR" },
];

interface OSAccordionProps {
  osCategories: OSCategory[];
  defaultOpen?: string;
}

/* =====================
   Component
===================== */

export function OSAccordion({ osCategories, defaultOpen }: OSAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpen || osCategories[0]?.id || null
  );

  const [accordionFilters, setAccordionFilters] = useState<
    Record<
      string,
      {
        instanceType: string;
        pricingInterval: "monthly" | "hourly";
        currency: "USD" | "INR";
      }
    >
  >(() => {
    const initial: Record<string, any> = {};

    osCategories.forEach((os) => {
      initial[os.id] = {
        instanceType:
          os.id === "linux" || os.id === "windows"
            ? "general-purpose"
            : os.planCategories[0].id,
        pricingInterval: "monthly",
        currency: "INR",
      };
    });

    return initial;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const updateFilter = (osId: string, key: string, value: any) => {
    setAccordionFilters((prev) => ({
      ...prev,
      [osId]: {
        ...prev[osId],
        [key]: value,
      },
    }));
  };

  return (
    <div className="container mx-auto space-y-4 max-w-7xl">
      {osCategories.map((osCategory) => {
        const isOpen = openId === osCategory.id;
        const filters = accordionFilters[osCategory.id];
        const selectedCategory = osCategory.planCategories.find(
          (cat) => cat.id === filters.instanceType
        );

        return (
          <div
            key={osCategory.id}
            className="border border-cmpt_border rounded-xl overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(osCategory.id)}
              className={cn(
                "w-full flex items-center justify-between gap-4 p-5",
                "glass-card",
                "focus:outline-none focus:ring-2 focus:ring-cmpt_primary/30"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-cmpt_lg bg-cmpt_primary/10 text-cmpt_primary flex items-center justify-center">
                  {osIcons[osCategory.icon] || <Server className="w-5 h-5" />}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-cmpt_foreground">
                    {osCategory.name}
                  </h3>
                  <p className="text-sm text-cmpt_muted-foreground">
                    {osCategory.description}
                  </p>
                </div>
              </div>
              
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  isOpen && "rotate-180 text-cmpt_primary"
                )}
              />
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 space-y-4">
                    {/* Filters */}
                    <div className="glass-panel mt-5 relative z-10 mb-7 rounded-xl p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <CustomDropdown
                            label="Instance Type"
                            options={serviceInstanceTypesMap[osCategory.id] ?? instanceTypes}
                            value={filters.instanceType}
                            onChange={(v) => updateFilter(osCategory.id, "instanceType", v)}
                          />
                        {(osCategory.id === "linux" || osCategory.id === "windows") && (
                          <PricingToggle
                            value={filters.pricingInterval}
                            onChange={(v) =>
                              updateFilter(osCategory.id, "pricingInterval", v)
                            }
                          />
                        )}
                        <CustomDropdown
                          label="Currency"
                          options={currencies}
                          value={filters.currency}
                          onChange={(v) =>
                            updateFilter(osCategory.id, "currency", v)
                          }
                        />
                      </div>
                    </div>

                    {/* Selected Category */}
                    {selectedCategory && (
                      <div className="flex items-center gap-2 px-2">
                        <div className="w-8 h-8 rounded-cmpt_sm bg-cmpt_primary/10 text-cmpt_primary flex items-center justify-center">
                          {filters.instanceType === "general-purpose" && (
                            <Server className="w-4 h-4" />
                          )}
                          {filters.instanceType === "cpu-intensive" && (
                            <Cpu className="w-4 h-4" />
                          )}
                          {filters.instanceType === "memory-optimized" && (
                            <Database className="w-4 h-4" />
                          )}
                          {filters.instanceType === "ipv4" && (
                            <Globe className="w-4 h-4" />
                          )}
                          {filters.instanceType === "floating-ipv4" && (
                            <Globe className="w-4 h-4" />
                          )}
                          {filters.instanceType === "object-storage" && <HardDrive className="w-4 h-4" />}
                          {filters.instanceType === "snapshot" && <Layers className="w-4 h-4" />}
                          {filters.instanceType === "vpn" && <Shield className="w-4 h-4" />}
                          {filters.instanceType === "backup" && <Cloud className="w-4 h-4" />}
                          {filters.instanceType === "vpc" && <Network className="w-4 h-4" />}
                          {filters.instanceType === "load-balancer" && <Server className="w-4 h-4" />}
                        </div>
                        <span className="font-medium text-cmpt_foreground">
                          {selectedCategory.name}
                        </span>
                        <span className="text-sm text-cmpt_muted-foreground ml-2">
                          — {selectedCategory.description}
                        </span>
                      </div>
                    )}

                    {/* Plans */}
                    <div className="space-y-3">
                      {selectedCategory?.plans.map((plan, planIndex) => (
                        <div
                          key={plan.id}
                          className="animate-fade-in"
                          style={{ animationDelay: `${planIndex * 50}ms` }}
                        >
                          <ServerPlanCard
                            plan={plan}
                            currency={filters.currency}
                            interval={filters.pricingInterval}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}