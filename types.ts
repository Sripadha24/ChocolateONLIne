
export type Category = 'Dark Chocolates' | 'Milk Chocolates' | 'Truffles' | 'Gift Boxes' | 'Seasonal Specials';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  badge?: 'Best Seller' | 'Chef\'s Choice' | 'Limited Edition';
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
