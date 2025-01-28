'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Producte } from '@/types/data';

// Define the shape of a cart item
interface CartItem extends Producte {
  quantity: number;
}

// Define the cart context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Producte) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (product: Producte) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item._id === product._id);
      
      if (existingItem) {
        // If exists, increase quantity
        return prevCart.map(item => 
          item._id === product._id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If not, add new item with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId));
  };

  // Update quantity of an item
  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item._id === productId 
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getTotalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}