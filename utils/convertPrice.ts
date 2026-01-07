import type { Currency } from '@/data/pricingData';

export const INR_TO_USD_RATE = 90;

export const convertPrice = (
  priceInINR: number,
  currency: Currency
): number => {
  return currency === 'USD'
    ? Number((priceInINR / 90).toFixed(2))
    : priceInINR;
};