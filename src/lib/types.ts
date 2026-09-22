export type ProductCategory =
  | 'Muebles'
  | 'Iluminación'
  | 'Decoración'
  | 'Textiles'
  | 'Exterior';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  stock: number;
  rating: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface AppState {
  cart: CartItem[];
  favorites: string[];
  coupon: string | null;
}

export interface CheckoutForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  delivery: 'standard' | 'express';
  payment: 'card' | 'transfer' | 'cash';
}
