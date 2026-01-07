// =====================
// Types
// =====================

export interface ServerPlan {
  id: string;
  name: string;
  vCPU: number;
  ram: string;
  baseStorage: number;
  priceINRMonthly: number;
  priceUSDMonthly: number;
  priceINRHourly?: number;
  priceUSDHourly?: number;
  popular?: boolean;
}

export interface IPv4Plan {
  id: string;
  name: string;
  ipType: "ipv4" | "floating-ipv4";
  ipCount: number;
  priceINRMonthly: number;
  priceUSDMonthly: number;
}

export interface ServicePlan {
  id: string;
  name: string;
  minQty: number;
  priceINRMonthly: number;
  priceUSDMonthly: number;
}

export interface PlanCategory {
  id: string;
  name: string;
  description: string;
  plans: ServerPlan[] | IPv4Plan[] | ServicePlan[];
}

export interface OSCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  planCategories: PlanCategory[];
}

export type AnyPlan = ServerPlan | IPv4Plan | ServicePlan;

// =====================
// Storage Pricing
// =====================
export const STORAGE_PRICE_INR_MONTHLY = 6.2;
export const STORAGE_PRICE_INR_HOURLY = 0.01;

export const STORAGE_PRICE_USD_MONTHLY = 0.08;
export const STORAGE_PRICE_USD_HOURLY = 0.00012;

// =====================
// Data
// =====================
export const osCategories: OSCategory[] = [
  {
    id: "linux",
    name: "Linux",
    description: "Ubuntu, CentOS, Debian, and more Linux distributions",
    icon: "linux",
    planCategories: [
      {
        id: "general-purpose",
        name: "General Purpose",
        description: "Balanced compute, memory, and networking",
        plans: [
          { id: "linux-gp-4",  name: "GP-Starter",   vCPU: 1,  ram: "4 GB",   baseStorage: 30, priceINRMonthly: 930,   priceINRHourly: 1.27, priceUSDMonthly: 11.2,  priceUSDHourly: 0.015 },
          { id: "linux-gp-8",  name: "GP-Basic",   vCPU: 2,  ram: "8 GB",   baseStorage: 30, priceINRMonthly: 1182,  priceINRHourly: 1.62, priceUSDMonthly: 14.2,  priceUSDHourly: 0.019, popular: true},
          { id: "linux-gp-12", name: "GP-Standard",  vCPU: 3,  ram: "12 GB",  baseStorage: 30, priceINRMonthly: 1630,  priceINRHourly: 2.23, priceUSDMonthly: 19.6,  priceUSDHourly: 0.027 },
          { id: "linux-gp-16", name: "GP-Advanced",  vCPU: 4,  ram: "16 GB",  baseStorage: 30, priceINRMonthly: 2079,  priceINRHourly: 2.85, priceUSDMonthly: 25.0,  priceUSDHourly: 0.034 },
          { id: "linux-gp-24", name: "GP-Pro",  vCPU: 6,  ram: "24 GB",  baseStorage: 30, priceINRMonthly: 2987,  priceINRHourly: 4.09, priceUSDMonthly: 36.0,  priceUSDHourly: 0.049 },
          { id: "linux-gp-32", name: "GP-Business",  vCPU: 8,  ram: "32 GB",  baseStorage: 30, priceINRMonthly: 3904,  priceINRHourly: 5.35, priceUSDMonthly: 47.0,  priceUSDHourly: 0.064 },
          { id: "linux-gp-48", name: "GP-Enterprise", vCPU: 12, ram: "48 GB",  baseStorage: 30, priceINRMonthly: 6178,  priceINRHourly: 8.46, priceUSDMonthly: 74.4,  priceUSDHourly: 0.101 },
          { id: "linux-gp-64", name: "GP-Enterprise Plus", vCPU: 16, ram: "64 GB",  baseStorage: 30, priceINRMonthly: 8238,  priceINRHourly: 11.28,priceUSDMonthly: 99.2,  priceUSDHourly: 0.136 },
          { id: "linux-gp-96", name: "GP-Ultra", vCPU: 24, ram: "96 GB",  baseStorage: 30, priceINRMonthly: 11645, priceINRHourly: 15.95,priceUSDMonthly: 140.3, priceUSDHourly: 0.192 },
          { id: "linux-gp-128",name: "GP-Ultra Plus",vCPU: 32, ram: "128 GB", baseStorage: 30, priceINRMonthly: 16186, priceINRHourly: 22.17,priceUSDMonthly: 195.0, priceUSDHourly: 0.267 },
          { id: "linux-gp-256",name: "GP-Mega",vCPU: 64, ram: "256 GB", baseStorage: 30, priceINRMonthly: 32083, priceINRHourly: 43.95,priceUSDMonthly: 386.5, priceUSDHourly: 0.53 }
        ],
      },
      {
        id: "cpu-intensive",
        name: "CPU Intensive",
        description: "High-performance processors for compute-heavy apps",
        plans: [
          { id: "linux-cpu-4",   name: "CPU-Starter",    vCPU: 2,  ram: "4 GB",   baseStorage: 30, priceINRMonthly: 931,   priceINRHourly: 1.28, priceUSDMonthly: 11.2,  priceUSDHourly: 0.015 },
          { id: "linux-cpu-8",   name: "CPU-Basic",    vCPU: 4,  ram: "8 GB",   baseStorage: 30, priceINRMonthly: 1538,  priceINRHourly: 2.11, priceUSDMonthly: 18.5,  priceUSDHourly: 0.025, popular: true},
          { id: "linux-cpu-12",  name: "CPU-Standard",   vCPU: 6,  ram: "12 GB",  baseStorage: 30, priceINRMonthly: 2145,  priceINRHourly: 2.94, priceUSDMonthly: 25.8,  priceUSDHourly: 0.035 },
          { id: "linux-cpu-16",  name: "CPU-Advanced",   vCPU: 8,  ram: "16 GB",  baseStorage: 30, priceINRMonthly: 2781,  priceINRHourly: 3.81, priceUSDMonthly: 33.5,  priceUSDHourly: 0.046 },
          { id: "linux-cpu-24",  name: "CPU-Pro",  vCPU: 12, ram: "24 GB",  baseStorage: 30, priceINRMonthly: 4480,  priceINRHourly: NaN, priceUSDMonthly: 54.0,  priceUSDHourly: NaN },
          { id: "linux-cpu-32",  name: "CPU-Business",  vCPU: 16, ram: "32 GB",  baseStorage: 30, priceINRMonthly: 5975,  priceINRHourly: 8.18, priceUSDMonthly: 72.0,  priceUSDHourly: 0.099 },
          { id: "linux-cpu-48",  name: "CPU-Enterprise",  vCPU: 24, ram: "42 GB",  baseStorage: 30, priceINRMonthly: 11649, priceINRHourly: 15.96,priceUSDMonthly: 140.3, priceUSDHourly: 0.192 },
          { id: "linux-cpu-64",  name: "CPU-Enterprise Plus",  vCPU: 32, ram: "64 GB",  baseStorage: 30, priceINRMonthly: 16190, priceINRHourly: 22.18,priceUSDMonthly: 195.1, priceUSDHourly: 0.267 },
          { id: "linux-cpu-96",  name: "CPU-Ultra",  vCPU: 48, ram: "96 GB",  baseStorage: 30, priceINRMonthly: 23007, priceINRHourly: 31.52,priceUSDMonthly: 277.2, priceUSDHourly: 0.38 },
          { id: "linux-cpu-128", name: "CPU-Ultra Plus", vCPU: 64, ram: "128 GB", baseStorage: 30, priceINRMonthly: 32090, priceINRHourly: 43.96,priceUSDMonthly: 386.6, priceUSDHourly: 0.53 }
        ],
      },
      {
        id: "memory-optimized",
        name: "Memory Optimized",
        description: "High memory-to-CPU ratio for memory-intensive workloads",
        plans: [
          { id: "linux-mem-8",   name: "MEM-Starter", vCPU: 1,  ram: "8 GB", baseStorage: 30, priceINRMonthly: 1180,  priceINRHourly: 1.62, priceUSDMonthly: 14.2,  priceUSDHourly: 0.019 },
          { id: "linux-mem-16",  name: "MEM-Basic", vCPU: 2,  ram: "16 GB", baseStorage: 30, priceINRMonthly: 2076,  priceINRHourly: 2.84, priceUSDMonthly: 25.0,  priceUSDHourly: 0.034, popular: true},
          { id: "linux-mem-24",  name: "MEM-Standard", vCPU: 3,  ram: "24 GB", baseStorage: 30, priceINRMonthly: 2982,  priceINRHourly: 4.08, priceUSDMonthly: 35.9,  priceUSDHourly: 0.049 },
          { id: "linux-mem-32",  name: "MEM-Advanced", vCPU: 4,  ram: "32 GB", baseStorage: 30, priceINRMonthly: 3899,  priceINRHourly: 5.34, priceUSDMonthly: 47.0,  priceUSDHourly: 0.064 },
          { id: "linux-mem-48",  name: "MEM-Pro", vCPU: 6,  ram: "48 GB", baseStorage: 30, priceINRMonthly: 5764,  priceINRHourly: 7.90, priceUSDMonthly: 69.4,  priceUSDHourly: 0.095 },
          { id: "linux-mem-64",  name: "MEM-Business", vCPU: 8,  ram: "64 GB", baseStorage: 30, priceINRMonthly: 7506,  priceINRHourly: 10.28,priceUSDMonthly: 90.4,  priceUSDHourly: 0.124 },
          { id: "linux-mem-96",  name: "MEM-Enterprise", vCPU: 12, ram: "96 GB", baseStorage: 30, priceINRMonthly: 11628, priceINRHourly: 15.93,priceUSDMonthly: 140.1, priceUSDHourly: 0.192 },
          { id: "linux-mem-128", name: "MEM-Enterprise Plus",vCPU: 16, ram: "128 GB", baseStorage: 30, priceINRMonthly: 14722, priceINRHourly: 20.16,priceUSDMonthly: 177.4, priceUSDHourly: 0.243 },
          { id: "linux-mem-192", name: "MEM-Ultra", vCPU: 24, ram: "192 GB", baseStorage: 30, priceINRMonthly: 22967, priceINRHourly: 31.46,priceUSDMonthly: 276.7, priceUSDHourly: 0.379 },
          { id: "linux-mem-256", name: "MEM-Ultra Plus", vCPU: 32, ram: "256 GB", baseStorage: 30, priceINRMonthly: 32090, priceINRHourly: 43.89,priceUSDMonthly: 386.6, priceUSDHourly: 0.53 },
          { id: "linux-mem-384", name: "MEM-Mega", vCPU: 48, ram: "384 GB", baseStorage: 30, priceINRMonthly: 53201, priceINRHourly: 72.88,priceUSDMonthly: 641.0, priceUSDHourly: 0.878 },
          { id: "linux-mem-512", name: "MEM-Giga", vCPU: 64, ram: "512 GB", baseStorage: 30, priceINRMonthly: 79652, priceINRHourly: 109.11,priceUSDMonthly: 959.7, priceUSDHourly: 1.31 }
        ],
      },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    description: "Windows Server 2019, 2022, and other Windows editions",
    icon: "windows",
    planCategories: [
      {
        id: "general-purpose",
        name: "General Purpose",
        description: "Balanced compute, memory, and networking",
        plans: [
          { id: "win-gp-4",  name: "GP-Starter",   vCPU: 1,  ram: "4 GB",   baseStorage: 30, priceINRMonthly: 920,   priceINRHourly: 0.80, priceUSDMonthly: 11.2,  priceUSDHourly: 0.015 },
          { id: "win-gp-8",  name: "GP-Basic",   vCPU: 2,  ram: "8 GB",   baseStorage: 30, priceINRMonthly: 1446,  priceINRHourly: 1.73, priceUSDMonthly: 14.2,  priceUSDHourly: 0.019, popular: true},
          { id: "win-gp-12", name: "GP-Standard",  vCPU: 3,  ram: "12 GB",  baseStorage: 30, priceINRMonthly: 2308,  priceINRHourly: 2.63, priceUSDMonthly: 19.6,  priceUSDHourly: 0.027 },
          { id: "win-gp-16", name: "GP-Advanced",  vCPU: 4,  ram: "16 GB",  baseStorage: 30, priceINRMonthly: 3012,  priceINRHourly: 3.60, priceUSDMonthly: 25.0,  priceUSDHourly: 0.034 },
          { id: "win-gp-24", name: "GP-Pro",  vCPU: 6,  ram: "24 GB",  baseStorage: 30, priceINRMonthly: 4366,  priceINRHourly: 5.45, priceUSDMonthly: 36.0,  priceUSDHourly: 0.049 },
          { id: "win-gp-32", name: "GP-Business",  vCPU: 8,  ram: "32 GB",  baseStorage: 30, priceINRMonthly: 5816,  priceINRHourly: 7.44, priceUSDMonthly: 47.0,  priceUSDHourly: 0.064 },
          { id: "win-gp-48", name: "GP-Enterprise", vCPU: 12, ram: "48 GB",  baseStorage: 30, priceINRMonthly: 11328,  priceINRHourly: 14.99, priceUSDMonthly: 74.4,  priceUSDHourly: 0.101 },
          { id: "win-gp-64", name: "GP-Enterprise Plus", vCPU: 16, ram: "64 GB",  baseStorage: 30, priceINRMonthly: 15738,  priceINRHourly: 21.03,priceUSDMonthly: 99.2,  priceUSDHourly: 0.136 },
          { id: "win-gp-96", name: "GP-Ultra", vCPU: 24, ram: "96 GB",  baseStorage: 30, priceINRMonthly: 22352, priceINRHourly: 30.09,priceUSDMonthly: 140.3, priceUSDHourly: 0.192 },
          { id: "win-gp-128",name: "GP-Ultra Plus",vCPU: 32, ram: "128 GB", baseStorage: 30, priceINRMonthly: 31172, priceINRHourly: 42.17,priceUSDMonthly: 195.0, priceUSDHourly: 0.267 },
          { id: "win-gp-256",name: "GP-Mega",vCPU: 64, ram: "256 GB", baseStorage: 30, priceINRMonthly: 51751, priceINRHourly: 70.36,priceUSDMonthly: 386.5, priceUSDHourly: 0.53 }
        ],
      },
      {
        id: "cpu-intensive",
        name: "CPU Intensive",
        description: "High-performance processors for compute-heavy apps",
        plans: [
          { id: "win-cpu-4",   name: "CPU-Starter",    vCPU: 2,  ram: "4 GB",   baseStorage: 30, priceINRMonthly: 1509,   priceINRHourly: 1.54, priceUSDMonthly: 11.2,  priceUSDHourly: 0.015 },
          { id: "win-cpu-8",   name: "CPU-Basic",    vCPU: 4,  ram: "8 GB",   baseStorage: 30, priceINRMonthly: 2716,  priceINRHourly: 3.19, priceUSDMonthly: 18.5,  priceUSDHourly: 0.025, popular: true},
          { id: "win-cpu-12",  name: "CPU-Standard",   vCPU: 6,  ram: "12 GB",  baseStorage: 30, priceINRMonthly: 3894,  priceINRHourly: 4.81, priceUSDMonthly: 25.8,  priceUSDHourly: 0.035 },
          { id: "win-cpu-16",  name: "CPU-Advanced",   vCPU: 8,  ram: "16 GB",  baseStorage: 30, priceINRMonthly: 5127,  priceINRHourly: 6.49, priceUSDMonthly: 33.5,  priceUSDHourly: 0.046 },
          { id: "win-cpu-24",  name: "CPU-Pro",  vCPU: 12, ram: "24 GB",  baseStorage: 30, priceINRMonthly: 8428,  priceINRHourly: 11.02, priceUSDMonthly: 54.0,  priceUSDHourly: NaN },
          { id: "win-cpu-32",  name: "CPU-Business",  vCPU: 16, ram: "32 GB",  baseStorage: 30, priceINRMonthly: 11328,  priceINRHourly: 14.99, priceUSDMonthly: 72.0,  priceUSDHourly: 0.099 },
          { id: "win-cpu-48",  name: "CPU-Enterprise",  vCPU: 24, ram: "42 GB",  baseStorage: 30, priceINRMonthly: 22352, priceINRHourly: 30.09,priceUSDMonthly: 140.3, priceUSDHourly: 0.192 },
          { id: "win-cpu-64",  name: "CPU-Enterprise Plus",  vCPU: 32, ram: "64 GB",  baseStorage: 30, priceINRMonthly: 31172, priceINRHourly: 42.17,priceUSDMonthly: 195.1, priceUSDHourly: 0.267 },
          { id: "win-cpu-96",  name: "CPU-Ultra",  vCPU: 48, ram: "96 GB",  baseStorage: 30, priceINRMonthly: 38890, priceINRHourly: 52.75,priceUSDMonthly: 277.2, priceUSDHourly: 0.38 },
          { id: "win-cpu-128", name: "CPU-Ultra Plus", vCPU: 64, ram: "128 GB", baseStorage: 30, priceINRMonthly: 51751, priceINRHourly: 70.36,priceUSDMonthly: 386.6, priceUSDHourly: 0.53 }
        ],
      },
      {
        id: "memory-optimized",
        name: "Memory Optimized",
        description: "High memory-to-CPU ratio for memory-intensive workloads",
        plans: [
          { id: "win-mem-8",   name: "MEM-Starter", vCPU: 1,  ram: "8 GB", baseStorage: 30, priceINRMonthly: 1646,  priceINRHourly: 1.73, priceUSDMonthly: 14.2,  priceUSDHourly: 0.019 },
          { id: "win-mem-16",  name: "MEM-Basic", vCPU: 2,  ram: "16 GB", baseStorage: 30, priceINRMonthly: 3012,  priceINRHourly: 3.60, priceUSDMonthly: 25.0,  priceUSDHourly: 0.034, popular: true},
          { id: "win-mem-24",  name: "MEM-Standard", vCPU: 3,  ram: "24 GB", baseStorage: 30, priceINRMonthly: 4366,  priceINRHourly: 5.45, priceUSDMonthly: 35.9,  priceUSDHourly: 0.049 },
          { id: "win-mem-32",  name: "MEM-Advanced", vCPU: 4,  ram: "32 GB", baseStorage: 30, priceINRMonthly: 5816,  priceINRHourly: 7.44, priceUSDMonthly: 47.0,  priceUSDHourly: 0.064 },
          { id: "win-mem-48",  name: "MEM-Pro", vCPU: 6,  ram: "48 GB", baseStorage: 30, priceINRMonthly: 8428,  priceINRHourly: 11.02, priceUSDMonthly: 69.4,  priceUSDHourly: 0.095 },
          { id: "win-mem-64",  name: "MEM-Business", vCPU: 8,  ram: "64 GB", baseStorage: 30, priceINRMonthly: 11328,  priceINRHourly: 14.99,priceUSDMonthly: 90.4,  priceUSDHourly: 0.124 },
          { id: "win-mem-96",  name: "MEM-Enterprise", vCPU: 12, ram: "96 GB", baseStorage: 30, priceINRMonthly: 17453, priceINRHourly: 23.38,priceUSDMonthly: 140.1, priceUSDHourly: 0.192 },
          { id: "win-mem-128", name: "MEM-Enterprise Plus",vCPU: 16, ram: "128 GB", baseStorage: 30, priceINRMonthly: 22352, priceINRHourly: 30.09,priceUSDMonthly: 177.4, priceUSDHourly: 0.243 },
          { id: "win-mem-192", name: "MEM-Ultra", vCPU: 24, ram: "192 GB", baseStorage: 30, priceINRMonthly: 38890, priceINRHourly: 52.75,priceUSDMonthly: 276.7, priceUSDHourly: 0.379 },
          { id: "win-mem-256", name: "MEM-Ultra Plus", vCPU: 32, ram: "256 GB", baseStorage: 30, priceINRMonthly: 51751, priceINRHourly: 70.96,priceUSDMonthly: 386.6, priceUSDHourly: 0.53 },
          { id: "win-mem-384", name: "MEM-Mega", vCPU: 48, ram: "384 GB", baseStorage: 30, priceINRMonthly: 77476, priceINRHourly: 105.60,priceUSDMonthly: 641.0, priceUSDHourly: 0.878 },
          { id: "win-mem-512", name: "MEM-Giga", vCPU: 64, ram: "512 GB", baseStorage: 30, priceINRMonthly: 154648, priceINRHourly: 211.32,priceUSDMonthly: 959.7, priceUSDHourly: 1.31 }
        ],
      },
    ],
  },
  {
    id: "ipv4",
    name: "IPv4",
    description: "Dedicated IPv4 addresses",
    icon: "ipv4",
    planCategories: [
      {
        id: "ipv4",
        name: "IPv4 Plans",
        description: "IPv4 pricing",
        plans: [
          {
            id: "ipv4-standard",
            name: "IPv4",
            ipType: "ipv4",
            ipCount: 1,
            priceINRMonthly: 200,
            priceUSDMonthly: 2.50,
          },
          {
            id: "ipv4-floating",
            name: "Floating IPv4",
            ipType: "floating-ipv4",
            ipCount: 1,
            priceINRMonthly: 200,
            priceUSDMonthly: 2.50,
          },
        ],
      },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    description: "Scalable object storage",
    icon: "storage",
    planCategories: [
      {
        id: "object-storage",
        name: "Object Storage Plans",
        description: "Pay per GB storage",
        plans: [
          {
            id: "object-storage-gb",
            name: "Object Storage",
            minQty: 1,
            priceINRMonthly: 3.1,
            priceUSDMonthly: 0.04,
          },
          {
            id: "block-storage-gb",
            name: "Block Storage",
            minQty: 1,
            priceINRMonthly: 6.2,
            priceUSDMonthly: 0.08,
          },
        ],
      },
    ],
  },
  {
    id: "snapshot",
    name: "Snapshot",
    description: "Backup snapshots",
    icon: "snapshot",
    planCategories: [
      {
        id: "snapshot",
        name: "Snapshot Plans",
        description: "Snapshot storage pricing",
        plans: [
          {
            id: "snapshot-gb",
            name: "Snapshot",
            minQty: 1,
            priceINRMonthly: 6.2,
            priceUSDMonthly: 0.08,
          },
        ],
      },
    ],
  },
  {
    id: "vpn",
    name: "VPN",
    description: "Secure VPN access",
    icon: "vpn",
    planCategories: [
      {
        id: "vpn",
        name: "VPN Plans",
        description: "Per VPN node pricing",
        plans: [
          {
            id: "vpn-node",
            name: "VPN",
            minQty: 1,
            priceINRMonthly: 1000,
            priceUSDMonthly: 12,
          },
        ],
      },
    ],
  },
  {
    id: "backup",
    name: "Backup",
    description: "Automated backup service",
    icon: "backup",
    planCategories: [
      {
        id: "backup",
        name: "Backup Plans",
        description: "Backup per node",
        plans: [
          {
            id: "backup-node",
            name: "Backup",
            minQty: 1,
            priceINRMonthly: 6.2,
            priceUSDMonthly: 0.08,
          },
        ],
      },
    ],
  },
  {
    id: "load-balancer",
    name: "Load Balancer",
    description: "Managed load balancer service",
    icon: "load-balancer",
    planCategories: [
      {
        id: "load-balancer",
        name: "Load Balancer Plans",
        description: "Fixed monthly pricing",
        plans: [
          {
            id: "lb-2",
            name: "Load Balancer (2 Core / 4 GB)",
            minQty: 1,
            priceINRMonthly: 2000,
            priceUSDMonthly: 24,
          },
          {
            id: "lb-4",
            name: "Load Balancer (4 Core / 8 GB)",
            minQty: 1,
            priceINRMonthly: 4000,
            priceUSDMonthly: 48,
          },
          {
            id: "lb-8",
            name: "Load Balancer (8 Core / 16 GB)",
            minQty: 1,
            priceINRMonthly: 8000,
            priceUSDMonthly: 96,
          },
          {
            id: "lb-16",
            name: "Load Balancer (16 Core / 32 GB)",
            minQty: 1,
            priceINRMonthly: 16000,
            priceUSDMonthly: 192,
          },
        ],
      },
    ],
  },
];