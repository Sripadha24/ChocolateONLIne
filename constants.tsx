
import { Product, Category, Testimonial, Feature } from './types';

export const CATEGORIES: Category[] = [
  'Dark Chocolates',
  'Milk Chocolates',
  'Truffles',
  'Gift Boxes',
  'Seasonal Specials'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Silk Dark',
    category: 'Dark Chocolates',
    description: '85% Single-origin cocoa from Madagascar with hints of red berries.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Vanilla Bean Milk',
    category: 'Milk Chocolates',
    description: 'Creamy Alpine milk chocolate infused with Tahitian vanilla.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Gold Leaf Salted Caramel',
    category: 'Truffles',
    description: 'Smooth caramel center with sea salt and 24k gold leaf flakes.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop',
    badge: 'Chef\'s Choice'
  },
  {
    id: '4',
    name: 'Signature Collection Box',
    category: 'Gift Boxes',
    description: 'A curated selection of our 24 most beloved handcrafted truffles.',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?q=80&w=800&auto=format&fit=crop',
    badge: 'Limited Edition'
  },
  {
    id: '5',
    name: 'Spiced Winter Truffle',
    category: 'Seasonal Specials',
    description: 'Warm notes of cinnamon, nutmeg, and dark ginger ganache.',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb44b308?q=80&w=800&auto=format&fit=crop',
    badge: 'Limited Edition'
  },
  {
    id: '6',
    name: '70% Cocoa Nibs Bar',
    category: 'Dark Chocolates',
    description: 'Rich dark chocolate with crunchy toasted cocoa nibs.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Hazelnut Praline Hearts',
    category: 'Truffles',
    description: 'Roasted Piedmont hazelnuts blended into a silky milk ganache.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Petite Sweet Box',
    category: 'Gift Boxes',
    description: 'Perfect sampler set of 6 assorted milk and dark delights.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    content: "The Gold Leaf Salted Caramel is quite literally a bite of heaven. I've never tasted chocolate so refined and balanced.",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    content: "I ordered the Signature Collection for my wife's birthday. The packaging was exquisite and the delivery was prompt.",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'Elena Vance',
    content: "Velvet & Bean has set a new standard for chocolate. The dark chocolate nib bar is my daily indulgence.",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Premium Ingredients',
    description: 'We source only the finest single-origin cacao from sustainable farms globally.',
    icon: 'Crown'
  },
  {
    id: 2,
    title: 'Handmade & Fresh',
    description: 'Each truffle is hand-tempered and decorated by our master chocolatiers daily.',
    icon: 'Hand'
  },
  {
    id: 3,
    title: 'Perfect for Gifting',
    description: 'Our luxury packaging is designed to create an unforgettable unboxing experience.',
    icon: 'Gift'
  },
  {
    id: 4,
    title: 'Loved by Customers',
    description: 'Rated 4.9/5 stars by chocolate enthusiasts across the globe.',
    icon: 'Heart'
  }
];
