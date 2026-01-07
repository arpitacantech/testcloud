export type Region = 'india' | 'us' | 'germany';
export type Category = 'compute' | 'diskSpace' | 'traffic' | 'options';
export type Currency = 'INR' | 'USD';

export interface CloudletTier {
  range: string;
  ram: string;
  pricePerMonth: number;
}

export interface DiskSpaceTier {
  diskUsed: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export interface TrafficTier {
  trafficRange: string;
  freePerHour: string;
  pricePerGB: string;
}

export interface OptionItem {
  name: string;
  count?: string;
  pricePerHour: string;
  pricePerMonth: string;
}

export interface RegionData {
  reservedCloudlets: CloudletTier[];
  dynamicCloudlets: CloudletTier[];
  diskSpace: DiskSpaceTier[];
  traffic: TrafficTier[];
  ssl: OptionItem[];
  externalIP: OptionItem[];
  backup: OptionItem[];
}

export const pricingData: Record<Region, RegionData> = {
  india: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 70 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 68 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 65 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 63 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 60 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 55 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 92 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 88 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 84 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 82 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 78 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 74 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.005479', pricePerMonth: '4.00' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.004110', pricePerMonth: '3.00' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.002740', pricePerMonth: '2.00' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '8.00' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '7.00' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '6.00' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '5.00' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '3.50' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.137', pricePerMonth: '100' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
  us: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 90 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 88 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 85 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 82 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 78 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 72 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 120 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 115 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 109 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 106 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 103 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 97 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.005479', pricePerMonth: '4.00' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.004110', pricePerMonth: '3.00' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.002740', pricePerMonth: '2.00' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '4.00' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '3.50' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '3.00' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '2.50' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '2.00' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.137', pricePerMonth: '100' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
  germany: {
    reservedCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 90 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 88 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 85 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 82 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 78 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 72 },
    ],
    dynamicCloudlets: [
      { range: '1 - 15', ram: '128 MB - 2048 MB', pricePerMonth: 120 },
      { range: '16 - 31', ram: '2048 MB - 4096 MB', pricePerMonth: 115 },
      { range: '32 - 63', ram: '4096 MB - 8192 MB', pricePerMonth: 109 },
      { range: '64 - 127', ram: '8192 MB - 16384 MB', pricePerMonth: 106 },
      { range: '128 - 155', ram: '16384 MB - 32768 MB', pricePerMonth: 103 },
      { range: '256 - ∞', ram: '32768 MB onwards', pricePerMonth: 97 },
    ],
    diskSpace: [
      { diskUsed: 'First 20GB', pricePerHour: 'FREE', pricePerMonth: 'FREE' },
      { diskUsed: '20GB - 99GB', pricePerHour: '0.005479', pricePerMonth: '4.00' },
      { diskUsed: '100GB - 499GB', pricePerHour: '0.004110', pricePerMonth: '3.00' },
      { diskUsed: '500GB - ∞', pricePerHour: '0.002740', pricePerMonth: '2.00' },
    ],
    traffic: [
      { trafficRange: '0GB - 730GB', freePerHour: 'FREE', pricePerGB: 'FREE' },
      { trafficRange: '731GB - 999GB', freePerHour: '1GB', pricePerGB: '4.00' },
      { trafficRange: '1000GB - 1999GB', freePerHour: '1GB', pricePerGB: '3.50' },
      { trafficRange: '2000GB - 4999GB', freePerHour: '1GB', pricePerGB: '3.00' },
      { trafficRange: '5000GB - 6999GB', freePerHour: '1GB', pricePerGB: '2.50' },
      { trafficRange: '7000GB - ∞', freePerHour: '1GB', pricePerGB: '2.00' },
    ],
    ssl: [{ name: 'Cantech Cloud SSL', pricePerHour: 'FREE', pricePerMonth: 'FREE' }],
    externalIP: [{ name: 'Public IPv4', count: '1', pricePerHour: '0.137', pricePerMonth: '100' }],
    backup: [{ name: 'Daily Backup', count: '-', pricePerHour: 'Free', pricePerMonth: 'Free' }],
  },
};

export const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
};

export const regionLabels: Record<Region, string> = {
  india: 'India',
  us: 'US',
  germany: 'Germany',
};

export const categoryLabels: Record<Category, string> = {
  compute: 'Compute',
  diskSpace: 'Disk Space',
  traffic: 'Traffic',
  options: 'Options',
};