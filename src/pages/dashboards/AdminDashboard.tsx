import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SiteControlCenter } from './SiteControlCenter';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  XCircle,
  CreditCard,
  Truck,
  MessageSquare,
  ShieldCheck,
  Globe
} from 'lucide-react';

const AdminOverview = () => {
  const stats = [
    { label: 'Today Orders', value: '1,284', change: '+12%', icon: ShoppingCart, color: 'text-blue-600' },
    { label: 'Today Revenue', value: '৳482,900', change: '+8%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Active Vendors', value: '482', change: '+2', icon: Users, color: 'text-purple-600' },
    { label: 'Pending Approvals', value: '24', change: '-5', icon: Clock, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#141414]/5 space-y-4 group hover:border-orange-600 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-[10px] font-mono font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#141414]/5 overflow-hidden">
          <div className="p-6 border-b border-[#141414]/5 flex justify-between items-center">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Recent Orders</h3>
            <Link to="/admin-dashboard/orders" className="text-[10px] font-mono uppercase tracking-widest text-orange-600 hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] font-mono uppercase tracking-widest text-[#141414]/40">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                {[1, 2, 3, 4, 5].map((id) => (
                  <tr key={id} className="border-b border-[#141414]/5 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold">#ORD-2026-{id}</td>
                    <td className="px-6 py-4">Customer Name {id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] font-bold uppercase tracking-widest">Processing</span>
                    </td>
                    <td className="px-6 py-4">৳{1250 * id}</td>
                    <td className="px-6 py-4">
                      <button className="text-orange-600 hover:underline">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Alerts */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[#141414]/5 p-6 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Alerts & Notifications</h3>
            <div className="space-y-4">
              {[
                { icon: AlertCircle, text: '5 Failed Payments detected', color: 'text-red-600', bg: 'bg-red-50' },
                { icon: Clock, text: '12 Pending Vendor approvals', color: 'text-orange-600', bg: 'bg-orange-50' },
                { icon: MessageSquare, text: '8 New Support Tickets', color: 'text-blue-600', bg: 'bg-blue-50' },
              ].map((alert, i) => (
                <div key={i} className={`flex items-center space-x-4 p-4 rounded-xl ${alert.bg}`}>
                  <alert.icon size={16} className={alert.color} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{alert.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] rounded-2xl shadow-sm p-6 text-[#E4E3E0] space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">Quick Controls</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-center space-y-2">
                <ShieldCheck size={20} className="mx-auto" />
                <span className="text-[8px] font-mono uppercase tracking-widest block">Security Scan</span>
              </button>
              <button className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-center space-y-2">
                <Globe size={20} className="mx-auto" />
                <span className="text-[8px] font-mono uppercase tracking-widest block">Flush Cache</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AdminOverview />} />
      <Route path="site-control" element={<SiteControlCenter />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};
