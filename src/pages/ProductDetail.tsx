import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Star, 
  ChevronRight,
  Plus,
  Minus,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);

  const images = [
    `https://picsum.photos/seed/p${id}a/1000/1200`,
    `https://picsum.photos/seed/p${id}b/1000/1200`,
    `https://picsum.photos/seed/p${id}c/1000/1200`,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden border border-[#141414]/5 relative">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={images[activeImage]} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Product" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-orange-600' : 'border-transparent'}`}
              >
                <img src={img} className="w-full h-full object-cover grayscale" alt="Thumbnail" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-[#141414]/40">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <ChevronRight size={12} />
              <Link to="/categories/tech" className="hover:text-orange-600">Electronics</Link>
              <ChevronRight size={12} />
              <span className="text-[#141414] font-bold">Premium Accessory</span>
            </div>
            <h1 className="text-5xl font-black italic font-serif uppercase tracking-tighter leading-none">
              Ultra-Responsive<br />Mechanical Keyboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-orange-600">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill={s <= 4 ? 'currentColor' : 'none'} />)}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold">(48 Verified Reviews)</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-black italic font-serif tracking-tighter">৳12,500</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-green-600 font-bold">In Stock • Ready to Ship</p>
          </div>

          <p className="text-xs font-mono text-[#141414]/60 leading-relaxed uppercase tracking-widest">
            Engineered for precision and built for durability. This mechanical keyboard features custom switches, RGB lighting, and a solid aluminum frame. Perfect for both professional work and intense gaming sessions.
          </p>

          <div className="space-y-6 pt-6 border-t border-[#141414]/10">
            <div className="flex items-center space-x-8">
              <div className="flex items-center border border-[#141414]/10 rounded-full p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100 rounded-full transition-colors"><Minus size={16} /></button>
                <span className="w-12 text-center font-mono font-bold text-xs">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 rounded-full transition-colors"><Plus size={16} /></button>
              </div>
              <button className="flex-grow bg-[#141414] text-[#E4E3E0] py-5 rounded-full text-xs font-mono uppercase tracking-widest font-bold hover:bg-orange-600 transition-all flex items-center justify-center space-x-4">
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              <button className="p-5 border border-[#141414]/10 rounded-full hover:bg-red-50 hover:text-red-600 transition-all">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-[#141414]/10">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-50 rounded-2xl"><Truck size={20} className="text-orange-600" /></div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Fast Delivery</p>
                <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">2-3 Days in Dhaka</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-50 rounded-2xl"><ShieldCheck size={20} className="text-orange-600" /></div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Warranty</p>
                <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">1 Year Official</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="space-y-12">
        <div className="flex justify-between items-end border-b border-[#141414] pb-6">
          <h2 className="text-4xl font-black italic font-serif uppercase tracking-tighter">Verified Reviews<span className="text-orange-600">.</span></h2>
          <button className="text-xs font-mono uppercase tracking-widest font-bold hover:text-orange-600">Write a Review</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((r) => (
            <div key={r} className="p-8 bg-white rounded-3xl border border-[#141414]/5 space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <img src={`https://ui-avatars.com/api/?name=User+${r}`} className="w-10 h-10 rounded-full" alt="Avatar" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-xs font-mono font-bold uppercase tracking-widest">Verified Customer {r}</p>
                      <CheckCircle2 size={12} className="text-green-600" />
                    </div>
                    <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">March {20 + r}, 2026</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-orange-600">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-xs font-mono text-[#141414]/60 leading-relaxed uppercase tracking-widest">
                "Absolutely incredible quality. The tactile feedback is exactly what I was looking for. Highly recommend to anyone looking for a high-end keyboard."
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
