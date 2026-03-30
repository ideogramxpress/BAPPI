import React from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Package, 
  Settings, 
  MapPin, 
  CreditCard,
  Clock,
  ChevronRight
} from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-[#141414]/10 pb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic font-serif uppercase tracking-tighter">My Account<span className="text-orange-600">.</span></h2>
          <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">Track orders, manage wishlist and settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-[#141414]/5 overflow-hidden">
            <div className="p-6 border-b border-[#141414]/5 flex justify-between items-center">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Active Orders</h3>
              <button className="text-[10px] font-mono uppercase tracking-widest text-orange-600 hover:underline">View All</button>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2].map((id) => (
                <div key={id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-2xl border border-[#141414]/5 space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-xl border border-[#141414]/5 overflow-hidden">
                      <img src={`https://picsum.photos/seed/p${id}/100/100`} className="w-full h-full object-cover grayscale" alt="Product" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Order #ORD-2026-{id}</p>
                      <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest mt-1">Placed on March 30, 2026</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock size={12} className="text-orange-600" />
                        <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-orange-600">Out for Delivery</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-xs font-mono font-bold uppercase tracking-widest">৳4,500</p>
                      <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">1 Item</p>
                    </div>
                    <button className="p-3 bg-[#141414] text-[#E4E3E0] rounded-xl hover:bg-orange-600 transition-all">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wishlist Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#141414]/5 overflow-hidden">
            <div className="p-6 border-b border-[#141414]/5 flex justify-between items-center">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">My Wishlist</h3>
              <button className="text-[10px] font-mono uppercase tracking-widest text-orange-600 hover:underline">View All</button>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="aspect-square bg-gray-50 rounded-xl border border-[#141414]/5 overflow-hidden group relative">
                  <img src={`https://picsum.photos/seed/w${id}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Wishlist" />
                  <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={12} className="text-red-600 fill-red-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#141414] rounded-2xl shadow-sm p-8 text-[#E4E3E0] space-y-8">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">Account Details</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl"><MapPin size={18} /></div>
                <div>
                  <p className="text-[8px] font-mono text-[#E4E3E0]/40 uppercase tracking-widest">Default Address</p>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Gulshan, Dhaka, BD</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl"><CreditCard size={18} /></div>
                <div>
                  <p className="text-[8px] font-mono text-[#E4E3E0]/40 uppercase tracking-widest">Saved Payment</p>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Visa ending in 4242</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-white text-[#141414] rounded-xl text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-orange-600 hover:text-white transition-all">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#141414]/5 p-8 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Support</h3>
            <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest leading-relaxed">
              Need help with an order? Our support team is available 24/7.
            </p>
            <button className="w-full py-4 border border-[#141414]/10 rounded-xl text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-gray-50 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
