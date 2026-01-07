import type { Currency } from '@/data/pricingData';
import { INR_TO_USD_RATE } from './convertPrice';

export const formatPrice = (value: string, currency: Currency): string => {
  if (value.toUpperCase() === 'FREE') return 'FREE';

  const num = Number(value);
  if (isNaN(num)) return value;

  const converted =
    currency === 'USD' ? num / INR_TO_USD_RATE : num;

  if (converted >= 1) return converted.toFixed(2);
  if (converted >= 0.01) return converted.toFixed(4);
  return converted.toFixed(6);
};