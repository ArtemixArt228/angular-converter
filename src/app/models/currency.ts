export interface IPrivat {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface IRates {
  USD: number;
  EUR: number;
  GBP: number;
  PLN: number;
}

export interface ICurrency {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: IRates;
}
