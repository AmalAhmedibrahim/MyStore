export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount?: number;
  rating: {
    rate: number;
    count: number;
  };
}
