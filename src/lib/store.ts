import type { AppState, CartItem, Product } from './types';

const STORAGE_KEY = 'archity-store-v1';
const DEMO_COUPON = 'ARCHITY10';
const listeners = new Set<(state: AppState) => void>();

const defaultState: AppState = {
  cart: [],
  favorites: [],
  coupon: null
};

let state: AppState = defaultState;

const canUseStorage = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const normalizeCart = (cart: CartItem[]): CartItem[] =>
  cart
    .filter((item) => item.quantity > 0 && typeof item.productId === 'string')
    .map((item) => ({ productId: item.productId, quantity: Math.floor(item.quantity) || 1 }));

const loadState = () => {
  if (!canUseStorage()) return;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Partial<AppState>;

    state = {
      cart: Array.isArray(parsed.cart) ? normalizeCart(parsed.cart as CartItem[]) : [],
      favorites: Array.isArray(parsed.favorites)
        ? parsed.favorites.filter((favorite): favorite is string => typeof favorite === 'string')
        : [],
      coupon: parsed.coupon === DEMO_COUPON ? DEMO_COUPON : null
    };
  } catch {
    state = defaultState;
  }
};

const persist = () => {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const emit = () => {
  listeners.forEach((listener) => listener(state));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('app:state-changed', { detail: state }));
  }
};

export const initStore = () => {
  loadState();
  emit();
};

export const subscribe = (listener: (newState: AppState) => void) => {
  listeners.add(listener);
  listener(state);
  return () => listeners.delete(listener);
};

export const getState = () => state;

export const addToCart = (productId: string, quantity = 1) => {
  const existing = state.cart.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ productId, quantity });
  }

  state.cart = normalizeCart(state.cart);
  persist();
  emit();
};

export const removeFromCart = (productId: string) => {
  state.cart = state.cart.filter((item) => item.productId !== productId);
  persist();
  emit();
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const target = state.cart.find((item) => item.productId === productId);
  if (!target) return;

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  target.quantity = Math.floor(quantity);
  state.cart = normalizeCart(state.cart);
  persist();
  emit();
};

export const clearCart = () => {
  state.cart = [];
  persist();
  emit();
};

export const toggleFavorite = (productId: string) => {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
  } else {
    state.favorites = [...state.favorites, productId];
  }
  persist();
  emit();
};

export const applyCoupon = (code: string) => {
  const normalized = code.trim().toUpperCase();
  state.coupon = normalized === DEMO_COUPON ? DEMO_COUPON : null;
  persist();
  emit();
  return state.coupon === DEMO_COUPON;
};

export const clearCoupon = () => {
  state.coupon = null;
  persist();
  emit();
};

export const getTotals = (products: Product[]) => {
  const subtotal = state.cart.reduce((acc, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  const shipping = subtotal > 0 && subtotal < 120 ? 7.99 : 0;
  const discount = state.coupon === DEMO_COUPON ? subtotal * 0.1 : 0;
  const total = Math.max(subtotal + shipping - discount, 0);

  return { subtotal, shipping, discount, total };
};

export const DEMO_COUPON_CODE = DEMO_COUPON;
