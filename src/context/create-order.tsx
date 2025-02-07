import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { paymentId, shippingInfo, items, total } = await request.json();
  
  // Here you would typically save to a database
  const order = {
    id: `ORD-${Date.now()}`,
    paymentId,
    shippingInfo,
    items,
    total,
    trackingNumber: `TRACK-${Math.floor(100000 + Math.random() * 900000)}`,
    status: 'processing',
    createdAt: new Date().toISOString()
  };

  return NextResponse.json(order);
}