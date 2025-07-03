export interface Product {
  id: string;
  name: string;
  src :string
  price: {
    current: number;
    original: number;
    discount_percentage: number;
  };
  playback_hours: number;
  rating: number;
  badges: string[];
  category?: string;
}
