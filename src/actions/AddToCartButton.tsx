"use client";

import { useCart } from "@/context/CartContext";
import { Producte } from "@/types/data";
import { useState } from "react";
import { toast } from "react-hot-toast"; // Assuming you're using react-hot-toast for notifications

export function AddToCartButton({ product }: { product: Producte }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    try {
      addToCart(product);
      setIsAdding(true);
      toast.success("Item added to cart!");

      // Reset the adding state after a short delay
      setTimeout(() => {
        setIsAdding(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to add item to cart", error);
      toast.error("Failed to add item to cart");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`
       bg-[#029FAE] font-semibold text-lg text-center text-white rounded-lg w-[212px] h-[63px]
        ${isAdding ? "opacity-50 cursor-not-allowed" : "hover:bg-[#037e8c]"}
      `}
    >
      <i className="bi bi-cart mr-2"></i>
      {isAdding ? "Adding..." : "Add To Cart"}
    </button>
  );
}
