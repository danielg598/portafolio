export interface ApiParams {
  lat: number;
  lon: number;
  city: string;
  countryCode: string;
  baseCurrency: string; // por defecto 'USD'
  targetCurrency: string; // por defecto 'COP'
}