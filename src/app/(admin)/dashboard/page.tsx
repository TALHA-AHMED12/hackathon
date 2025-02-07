import { FiBox, FiShoppingCart, FiUsers, FiDollarSign, FiSettings, FiHome } from 'react-icons/fi';
import AdminSidebar from '@/components/AdminSidebar';
import Link from 'next/link';

const AdminDashboard = () => {
  // Mock data - replace with real data from your API
  const stats = [
    { title: 'Total Sales', value: '$24,532', icon: <FiDollarSign /> },
    { title: 'Total Orders', value: '1,234', icon: <FiShoppingCart /> },
    { title: 'Total Products', value: '568', icon: <FiBox /> },
    { title: 'Total Users', value: '892', icon: <FiUsers /> },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$120', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', amount: '$89', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$230', status: 'Pending' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>
      
      <nav className="mt-4">
        <Link href="./dasboard" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiHome className="mr-3" /> Dashboard
        </Link>

        <Link href="../products" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiBox className="mr-3" /> Products
        </Link>

        <Link href="../orders" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiShoppingCart className="mr-3" /> Orders
        </Link>

        <Link href="../users" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiUsers className="mr-3" /> Users
        </Link>

        <Link href="../inventory" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiShoppingCart className="mr-3" /> Inventory
        </Link>

        <div className="mt-8 border-t">
          <Link href="/admin/settings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <FiSettings className="mr-3" /> Settings
          </Link>
        </div>
      </nav>
      </aside>
      
     

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="text-3xl text-blue-500">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-4">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;