import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const Cart: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="border-b border-[#141414] pb-6">
        <h1 className="text-5xl font-black italic font-serif uppercase tracking-tighter">Shopping Bag<span className="text-orange-600">.</span></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {[1, 2].map((id) => (
            <div key={id} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-3xl border border-[#141414]/5 space-y-6 md:space-y-0 group hover:border-orange-600 transition-all">
              <div className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden border border-[#141414]/5">
                  <img src={`https://picsum.photos/seed/p${id}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Product" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Premium Tech Accessory {id}</h3>
                  <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">Vendor: TechStore BD</p>
                  <p className="text-xs font-mono font-bold">৳12,500</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:space-x-12">
                <div className="flex items-center border border-[#141414]/10 rounded-full p-1">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Minus size={12} /></button>
                  <span className="w-8 text-center font-mono font-bold text-[10px]">1</span>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Plus size={12} /></button>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="text-xs font-mono font-bold">৳12,500</p>
                </div>
                <button className="p-3 hover:bg-red-50 text-red-600 rounded-full transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="space-y-8">
          <div className="bg-[#141414] rounded-3xl p-10 text-[#E4E3E0] space-y-10">
            <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter text-orange-600">Order Summary</h2>
            
            <div className="space-y-6 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex justify-between">
                <span className="text-[#E4E3E0]/40">Subtotal</span>
                <span className="font-bold">৳25,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E4E3E0]/40">Shipping</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E4E3E0]/40">Tax (VAT 5%)</span>
                <span className="font-bold">৳1,250</span>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between text-base">
                <span className="font-serif italic font-black">Total</span>
                <span className="font-serif italic font-black text-orange-600">৳26,250</span>
              </div>
            </div>

            <Link to="/checkout" className="w-full flex items-center justify-center space-x-4 bg-white text-[#141414] py-5 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-orange-600 hover:text-white transition-all group">
              <span>Checkout Now</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#141414]/5 space-y-6">
            <div className="flex items-center space-x-4">
              <ShieldCheck size={20} className="text-orange-600" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Secure Checkout Guaranteed</p>
            </div>
            <div className="flex items-center space-x-4">
              <Truck size={20} className="text-orange-600" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Fast Delivery across Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
