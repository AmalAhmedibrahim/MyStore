export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category?: string;
  url: string;
  quantity?: number;
  rating?: {
    rate: number;
    count: number;
  };
}
