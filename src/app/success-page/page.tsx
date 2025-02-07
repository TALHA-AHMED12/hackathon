// app/checkout/success/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [status, setStatus] = useState('Processing...');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (sessionId) {
      // Clear the cart
      clearCart();
      setStatus('Payment successful!');
      
      // Redirect to confirmation page after a brief delay
      setTimeout(() => {
        router.push('/checkout?step=confirmation&payment=online');
      }, 2000);
    }
  }, [searchParams, clearCart, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">{status}</h1>
        <p>Please wait while we process your order...</p>
      </div>
    </div>
  );
}