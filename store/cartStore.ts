// cartStore.ts
import create from "zustand";

interface CartItem {
  id: string;
  menuId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  rating: string | null;
  type: string;
  image: string;
  ordersId: string | null;
  cartId: string | null;
  favoritesId: string | null;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (item) => {
    const existingItem = get().cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      set((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
      }));
    } else {
      set((state) => ({ cart: [...state.cart, item] }));
    }
  },
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    }));
  },
  updateQuantity: (id, quantity) => {
    set((state) => ({
      cart: state.cart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      ),
    }));
  },
  getCartCount: () => get().cart.length,
}));
