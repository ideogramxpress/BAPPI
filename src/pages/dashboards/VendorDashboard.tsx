import React from 'react';
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  CreditCard, 
  AlertCircle, 
  Plus,
  BarChart3,
  Truck
} from 'lucide-react';

export const VendorDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Sales', value: '৳128,400', change: '+15%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Active Orders', value: '12', change: '+2', icon: ShoppingCart, color: 'text-blue-600' },
    { label: 'Wallet Balance', value: '৳42,900', change: '৳5,000 pending', icon: CreditCard, color: 'text-purple-600' },
    { label: 'Risk Score', value: '98/100', change: 'Excellent', icon: ShieldCheck, color: 'text-green-600' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-[#141414]/10 pb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic font-serif uppercase tracking-tighter">Vendor Command Center<span className="text-orange-600">.</span></h2>
          <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">Manage your store, products, and earnings</p>
        </div>
        <button className="flex items-center space-x-2 bg-[#141414] text-[#E4E3E0] px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-all">
          <Plus size={16} />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#141414]/5 space-y-4 group hover:border-orange-600 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[8px] font-mono font-bold text-green-600 uppercase tracking-widest">
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black italic font-serif tracking-tighter">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#141414]/5 overflow-hidden">
          <div className="p-6 border-b border-[#141414]/5 flex justify-between items-center">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Recent Orders</h3>
            <button className="text-[10px] font-mono uppercase tracking-widest text-orange-600 hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] font-mono uppercase tracking-widest text-[#141414]/40">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Courier</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                {[1, 2, 3].map((id) => (
                  <tr key={id} className="border-b border-[#141414]/5 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold">#ORD-V-{id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] font-bold uppercase tracking-widest">Processing</span>
                    </td>
                    <td className="px-6 py-4">৳{2500 * id}</td>
                    <td className="px-6 py-4 flex items-center space-x-2">
                      <Truck size={14} className="text-orange-600" />
                      <span>Pathao</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-orange-600 hover:underline">Print Label</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#141414]/5 p-6 space-y-6">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Inventory Alerts</h3>
          <div className="space-y-4">
            {[
              { name: 'Wireless Headphones', stock: 2, status: 'Low Stock' },
              { name: 'Mechanical Keyboard', stock: 0, status: 'Out of Stock' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest">{item.name}</p>
                  <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">Stock: {item.stock}</p>
                </div>
                <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${item.stock === 0 ? 'text-red-600' : 'text-orange-600'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-[#141414] text-[#E4E3E0] rounded-xl text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-orange-600 transition-all">
            Restock All
          </button>
        </div>
      </div>
    </div>
  );
};

import { ShieldCheck } from 'lucide-react';
