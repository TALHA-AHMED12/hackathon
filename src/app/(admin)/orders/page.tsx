'use client';

import { useState, useEffect } from 'react';
import { FiBox, FiShoppingCart, FiUsers, FiDollarSign, FiSettings, FiHome, FiEdit, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

interface Order {
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  items: Array<{
    id: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }>;
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
  orderDate: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState<Order['status']>('Pending');

  // Simulated orders data - replace with actual API call
  useEffect(() => {
    const fetchOrders = async () => {
      // Simulate API call
      const mockOrders: Order[] = [
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
        },
        // Add more mock orders as needed
      ];

      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId: string, newStatus: Order['status']) => {
    try {
      // Here you would make an API call to update the order status
      // For now, we'll just update the local state
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.orderId === orderId
            ? { ...order, status: newStatus }
            : order
        )
      );
      setIsEditingStatus(false);

      // You would typically update your dashboard data here as well
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - same as dashboard */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        
        <nav className="mt-4">
          <Link href="./dashboard" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiHome className="mr-3" /> Dashboard
          </Link>

          <Link href="./products" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiBox className="mr-3" /> Products
          </Link>

          <Link href="./orders" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiShoppingCart className="mr-3" /> Orders
          </Link>

          <Link href="./users" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiUsers className="mr-3" /> Users
          </Link>

          <Link href="./inventory" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiShoppingCart className="mr-3" /> Inventory
          </Link>

          <div className="mt-8 border-t">
            <Link href="./settings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <FiSettings className="mr-3" /> Settings
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Orders Management</h1>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderId} className="border-b last:border-b-0">
                    <td className="py-4">{order.orderId}</td>
                    <td>{order.customer.name}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>${order.totalAmount.toFixed(2)}</td>
                    <td>
                      {isEditingStatus && selectedOrder?.orderId === order.orderId ? (
                        <select
                          value={newStatus}
                          onChange={(e) => setNewStatus(e.target.value as Order['status'])}
                          className="border rounded p-1"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      ) : (
                        <span className={`px-3 py-1 rounded-full text-sm 
                          ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      )}
                    </td>
                    <td>
                      {isEditingStatus && selectedOrder?.orderId === order.orderId ? (
                        <button
                          onClick={() => handleStatusUpdate(order.orderId, newStatus)}
                          className="text-green-600 hover:text-green-800 mr-3"
                        >
                          <FiCheck size={20} />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setNewStatus(order.status);
                            setIsEditingStatus(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 mr-3"
                        >
                          <FiEdit size={20} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Order Details - {selectedOrder.orderId}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Customer Information</h3>
                  <p>Name: {selectedOrder.customer.name}</p>
                  <p>Email: {selectedOrder.customer.email}</p>
                  <p>Phone: {selectedOrder.customer.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shipping Address</h3>
                  <p>{selectedOrder.shippingAddress.address}</p>
                  <p>{selectedOrder.shippingAddress.city}</p>
                  <p>{selectedOrder.shippingAddress.postalCode}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Order Items</h3>
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-2">Item</th>
                      <th className="pb-2">Quantity</th>
                      <th className="pb-2">Price</th>
                      <th className="pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2">{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${item.totalPrice.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}