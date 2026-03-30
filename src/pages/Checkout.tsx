import React from 'react';
import { 
  CreditCard, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export const Checkout: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [paymentMethod, setPaymentMethod] = React.useState('bkash');

  const steps = [
    { id: 1, label: 'Shipping', icon: MapPin },
    { id: 2, label: 'Payment', icon: CreditCard },
    { id: 3, label: 'Review', icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Checkout Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#141414] pb-6 space-y-6 md:space-y-0">
        <h1 className="text-5xl font-black italic font-serif uppercase tracking-tighter">Checkout<span className="text-orange-600">.</span></h1>
        
        {/* Progress Bar */}
        <div className="flex items-center space-x-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${step >= s.id ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {s.id}
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${step >= s.id ? 'text-[#141414]' : 'text-gray-400'}`}>
                {s.label}
              </span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-12">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter">Shipping Address</h2>
                <button className="flex items-center space-x-2 text-orange-600 text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Plus size={14} />
                  <span>Add New</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((id) => (
                  <div key={id} className="p-6 bg-white rounded-3xl border-2 border-orange-600 relative group cursor-pointer">
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 size={20} className="text-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-bold uppercase tracking-widest">Home Address {id}</p>
                      <p className="text-[10px] font-mono text-[#141414]/60 uppercase tracking-widest leading-relaxed">
                        House 12, Road 5, Block A<br />
                        Gulshan-2, Dhaka 1212<br />
                        Bangladesh
                      </p>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest pt-2">+880 1712 345678</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter">Shipping Method</h2>
                <div className="space-y-4">
                  {[
                    { id: 'standard', name: 'Standard Delivery', time: '2-3 Days', price: 'FREE', icon: Truck },
                    { id: 'express', name: 'Express Delivery', time: 'Next Day', price: '৳200', icon: Zap },
                  ].map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-[#141414]/5 hover:border-orange-600 transition-all cursor-pointer group">
                      <div className="flex items-center space-x-6">
                        <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-orange-50 transition-colors">
                          <method.icon size={20} className="text-orange-600" />
                        </div>
                        <div>
                          <p className="text-xs font-mono font-bold uppercase tracking-widest">{method.name}</p>
                          <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">{method.time}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest">{method.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full bg-[#141414] text-[#E4E3E0] py-5 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-orange-600 transition-all flex items-center justify-center space-x-4 group"
              >
                <span>Continue to Payment</span>
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter">Payment Method</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { id: 'bkash', name: 'bKash', icon: 'https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png' },
                  { id: 'nagad', name: 'Nagad', icon: 'https://seeklogo.com/images/N/nagad-logo-7A70CC668E-seeklogo.com.png' },
                  { id: 'ssl', name: 'SSLCommerz', icon: 'https://sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png' },
                  { id: 'cod', name: 'Cash on Delivery', icon: 'https://cdn-icons-png.flaticon.com/512/1554/1554401.png' },
                  { id: 'stripe', name: 'Stripe', icon: 'https://seeklogo.com/images/S/stripe-logo-EB82203194-seeklogo.com.png' },
                ].map((method) => (
                  <button 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-8 bg-white rounded-3xl border-2 transition-all flex flex-col items-center justify-center space-y-4 group ${paymentMethod === method.id ? 'border-orange-600' : 'border-[#141414]/5 hover:border-orange-600/50'}`}
                  >
                    <div className="h-12 flex items-center justify-center">
                      <img src={method.icon} className="max-h-full grayscale group-hover:grayscale-0 transition-all" alt={method.name} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{method.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-4">
                <button onClick={() => setStep(1)} className="flex-grow py-5 border border-[#141414]/10 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-gray-50 transition-all">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] bg-[#141414] text-[#E4E3E0] py-5 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-orange-600 transition-all">Review Order</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter">Review & Confirm</h2>
              
              <div className="p-8 bg-white rounded-3xl border border-[#141414]/5 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Shipping to</h3>
                    <p className="text-xs font-mono font-bold uppercase tracking-widest leading-relaxed">
                      House 12, Road 5, Block A<br />
                      Gulshan-2, Dhaka 1212
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Payment via</h3>
                    <p className="text-xs font-mono font-bold uppercase tracking-widest">{paymentMethod.toUpperCase()}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#141414]/5 space-y-4">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Order Items</h3>
                  {[1, 2].map((id) => (
                    <div key={id} className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                      <span>Premium Tech Accessory {id} x 1</span>
                      <span>৳12,500</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button onClick={() => setStep(2)} className="flex-grow py-5 border border-[#141414]/10 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-gray-50 transition-all">Back</button>
                <button className="flex-[2] bg-orange-600 text-white py-5 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#141414] transition-all">Place Order Now</button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#141414] rounded-3xl p-10 text-[#E4E3E0] space-y-10 sticky top-32">
            <h2 className="text-xl font-black italic font-serif uppercase tracking-tighter text-orange-600">Summary</h2>
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
                <span className="text-[#E4E3E0]/40">Tax</span>
                <span className="font-bold">৳1,250</span>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between text-base">
                <span className="font-serif italic font-black">Total</span>
                <span className="font-serif italic font-black text-orange-600">৳26,250</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-4">
                <ShieldCheck size={16} className="text-orange-600" />
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#E4E3E0]/60">Secure SSL Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Zap } from 'lucide-react';
