// app/api/orders/route.ts

import { NextResponse } from 'next/server';

let orders = [
  {
    orderId: '#1234',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890'
    },
    shippingAddress: {
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001'
    },
    items: [
      {
        id: '1',
        title: 'Product 1',
        quantity: 2,
        price: 59.99,
        totalPrice: 119.98
      }
    ],
    totalAmount: 119.98,
    status: 'Pending',
    paymentMethod: 'Cash on Delivery',
    orderDate: '2024-01-30T10:00:00Z'
  }
];

export async function GET() {
  return NextResponse.json(orders);
}

export async function PUT(request: Request) {
  const data = await request.json();
  const { orderId, status } = data;

  orders = orders.map(order =>
    order.orderId === orderId
      ? { ...order, status }
      : order
  );

  return NextResponse.json({ success: true, orders });
}

export async function POST(request: Request) {
  const newOrder = await request.json();
  orders.unshift(newOrder);
  // Keep only recent orders in memory
  orders = orders.slice(0, 100);
  
  return NextResponse.json({ success: true, order: newOrder });
}