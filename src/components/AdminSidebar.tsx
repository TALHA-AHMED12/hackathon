// components/AdminSidebar.jsx
import Link from 'next/link';
import { FiBox, FiShoppingCart, FiUsers, FiSettings, FiHome } from 'react-icons/fi';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg fixed h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>
      
      <nav className="mt-4">
        <Link href="/admin/dashboard" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiHome className="mr-3" /> Dashboard
        </Link>

        <Link href="/admin/products" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiBox className="mr-3" /> Products
        </Link>

        <Link href="/admin/orders" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiShoppingCart className="mr-3" /> Orders
        </Link>

        <Link href="/admin/users" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiUsers className="mr-3" /> Users
        </Link>

        <Link href="/admin/inventory" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiShoppingCart className="mr-3" /> Inventory
        </Link>

        <div className="mt-8 border-t">
          <Link href="/admin/settings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiSettings className="mr-3" /> Settings
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;