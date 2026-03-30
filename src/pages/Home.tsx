import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Zap, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-orange-600 mb-6 block font-bold">
            ESTABLISHED 2026 • DHAKA, BD
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-black italic font-serif leading-[0.8] tracking-tighter uppercase text-[#141414]">
            Future<br />
            <span className="text-transparent stroke-text">Market</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <p className="max-w-xs text-xs font-mono text-[#141414]/60 leading-relaxed uppercase tracking-widest text-center md:text-left">
              The next generation of multi-vendor commerce. Built for scale, speed, and trust.
            </p>
            <Link to="/products" className="group flex items-center space-x-4 bg-[#141414] text-[#E4E3E0] px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-all">
              <span>Explore Collection</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-[#141414]/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-[#141414]/5 rounded-full pointer-events-none" />
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-1 border-y border-[#141414]/10">
        {[
          { icon: Zap, title: "Fast Delivery", desc: "Pathao & RedX Integrated" },
          { icon: ShieldCheck, title: "Secure Payments", desc: "SSLCommerz & bKash" },
          { icon: ShoppingBag, title: "Verified Vendors", desc: "Strict Moderation Queue" },
          { icon: Truck, title: "Global Shipping", desc: "Dhaka to Worldwide" }
        ].map((feature, i) => (
          <div key={i} className="p-12 border-x border-[#141414]/10 flex flex-col items-center text-center space-y-4 group hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-500">
            <feature.icon size={32} className="text-orange-600 group-hover:text-white transition-colors" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">{feature.title}</h3>
            <p className="text-[10px] font-mono text-[#141414]/40 uppercase group-hover:text-white/60">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Flash Sale Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="flex justify-between items-end border-b border-[#141414] pb-6">
          <h2 className="text-4xl font-black italic font-serif uppercase tracking-tighter">Flash Sales<span className="text-orange-600">.</span></h2>
          <Link to="/flash-sales" className="text-xs font-mono uppercase tracking-widest font-bold hover:text-orange-600">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <Link key={id} to={`/product/${id}`} className="group space-y-6">
              <div className="aspect-[4/5] bg-[#141414]/5 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/product${id}/800/1000`} 
                  alt="Product" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest">
                  -40% OFF
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Premium Tech Accessory</h3>
                  <p className="text-[10px] font-mono text-[#141414]/40 uppercase mt-1">Electronics • Apple</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-bold">৳12,500</p>
                  <p className="text-[10px] font-mono text-[#141414]/40 line-through uppercase">৳18,000</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Slider Placeholder */}
      <section className="bg-[#141414] py-12 overflow-hidden">
        <div className="flex space-x-20 animate-marquee whitespace-nowrap text-[#E4E3E0]/20 text-4xl font-black italic font-serif uppercase tracking-tighter">
          {Array(10).fill("PATHAO • REDX • SSLCOMMERZ • BKASH • NAGAD • STRIPE • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </section>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #141414;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
