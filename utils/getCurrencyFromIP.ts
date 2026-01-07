import type { Currency } from '@/data/pricingData';

export const getCurrencyFromIP = async (): Promise<Currency> => {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();

    // India → INR, Rest → USD
    return data?.country_code === 'IN' ? 'INR' : 'USD';
  } catch {
    // Safe fallback
    return 'INR';
  }
};