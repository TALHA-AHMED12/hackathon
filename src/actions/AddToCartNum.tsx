"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function AddToCartNum() {
  const { cart } = useCart();

  return (
    <Link href="/cart" className="flex gap-2 items-center">
      <i className="bi bi-cart mr-2"></i>
      Cart
      {cart.length > 0 && (
        <span className="bg-[#029FAE] text-white rounded-full py-1 px-2 font-medium font-[Inter] text-sm">
          {cart.length}
        </span>
      )}
    </Link>
  );
}
