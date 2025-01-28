'use client';

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

export default function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useCart();

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success('Item removed from cart');
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 mt-24 mb-32 px-4">
      <div className="flex flex-col gap-5 w-full lg:w-2/3">
        <div>
          <h1 className="font-[Inter] font-medium text-2xl text-[#111111]">
            Bag {cart.length === 0 && "(Empty)"}
          </h1>
        </div>

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row border-b justify-between items-center gap-5 p-4 "
          >
            <div className="flex gap-5 items-center">
              <Image 
                src={urlFor(item.image).url()} 
                alt={item.title} 
                width={150} 
                height={150} 
              />
              <div className="flex flex-col gap-2 md:gap-5">
                <h3 className="text-[#272343] font-normal text-base">
                  {item.title}
                </h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button 
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 items-center mt-4 md:mt-0">
                  <button 
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-around w-full md:w-auto">
              <h3 className="font-[Inter] font-normal text-base text-[#111111]">
                MRP: ${(item.price * item.quantity).toFixed(2)}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center gap-7 w-full lg:w-1/3 mt-12 lg:mt-0">
        <div>
          <h1 className="font-medium text-xl font-[Inter] text-[#111111]">
            Summary
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex justify-between items-center">
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
              Subtotal
            </h3>
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
              ${getTotalPrice().toFixed(2)}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
              Estimated Delivery & Handling
            </h3>
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
              Free
            </h3>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h3 className="font-normal text-base font-[Inter] text-[#111111]">
              Total
            </h3>
            <h3 className="font-medium text-base font-[Inter] text-[#111111]">
              ${getTotalPrice().toFixed(2)}
            </h3>
          </div>
          <hr />
          <div>
            <button 
              disabled={cart.length === 0}
              className={`font-medium font-[Inter] text-base py-[18px] px-[100px] rounded-[30px] text-white ${
                cart.length === 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#029FAE]'
              }`}
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}