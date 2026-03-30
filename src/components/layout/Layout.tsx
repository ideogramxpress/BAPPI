import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#141414] text-[#E4E3E0] py-2 px-4 text-center text-xs tracking-widest uppercase font-mono">
        Free shipping on orders over ৳5000 | New Arrivals in Tech
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#E4E3E0]/80 backdrop-blur-md border-b border-[#141414]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase italic font-serif">
              Marketplace<span className="text-orange-600">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-xs font-mono uppercase tracking-widest">
              <Link to="/" className="hover:text-orange-600 transition-colors">Shop</Link>
              <Link to="/categories" className="hover:text-orange-600 transition-colors">Categories</Link>
              <Link to="/vendors" className="hover:text-orange-600 transition-colors">Vendors</Link>
              <Link to="/support" className="hover:text-orange-600 transition-colors">Support</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-[#141414]/5 rounded-full transition-colors">
                <Search size={20} />
              </button>
              <Link to="/cart" className="p-2 hover:bg-[#141414]/5 rounded-full transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to={profile?.role === 'Vendor' ? '/vendor-dashboard' : profile?.role === 'SuperAdmin' || profile?.role === 'Admin' ? '/admin-dashboard' : '/dashboard'} className="flex items-center space-x-2 p-1 pr-3 hover:bg-[#141414]/5 rounded-full transition-colors border border-[#141414]/10">
                    <img src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.displayName}`} className="w-8 h-8 rounded-full border border-[#141414]/20" alt="Avatar" />
                    <span className="text-xs font-mono font-bold">{profile?.displayName?.split(' ')[0]}</span>
                  </Link>
                  <button onClick={handleLogout} className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="flex items-center space-x-2 px-4 py-2 bg-[#141414] text-[#E4E3E0] rounded-full text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-colors">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              )}

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E4E3E0] border-b border-[#141414]/10 p-4 font-mono text-xs uppercase tracking-widest space-y-4">
          <Link to="/" className="block py-2">Shop</Link>
          <Link to="/categories" className="block py-2">Categories</Link>
          <Link to="/vendors" className="block py-2">Vendors</Link>
          <Link to="/support" className="block py-2">Support</Link>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#141414] text-[#E4E3E0] py-16 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic font-serif">Marketplace<span className="text-orange-600">.</span></h2>
            <p className="text-xs text-[#E4E3E0]/60 leading-relaxed font-mono">
              The ultimate multi-vendor ecosystem for Bangladesh. Quality, speed, and trust.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-orange-600">Shop</h3>
            <ul className="text-xs space-y-2 font-mono text-[#E4E3E0]/60">
              <li><Link to="/" className="hover:text-white">All Products</Link></li>
              <li><Link to="/" className="hover:text-white">New Arrivals</Link></li>
              <li><Link to="/" className="hover:text-white">Best Sellers</Link></li>
              <li><Link to="/" className="hover:text-white">Flash Sales</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-orange-600">Company</h3>
            <ul className="text-xs space-y-2 font-mono text-[#E4E3E0]/60">
              <li><Link to="/" className="hover:text-white">About Us</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-orange-600">Newsletter</h3>
            <form className="flex space-x-2">
              <input type="email" placeholder="EMAIL@EXAMPLE.COM" className="bg-transparent border-b border-[#E4E3E0]/20 py-2 text-xs font-mono focus:outline-none focus:border-orange-600 flex-grow" />
              <button className="text-xs font-mono uppercase tracking-widest hover:text-orange-600">Join</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E4E3E0]/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-[#E4E3E0]/40 uppercase tracking-widest">
          <p>© 2026 ENTERPRISE MARKETPLACE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>SSL SECURED</span>
            <span>BKASH</span>
            <span>NAGAD</span>
            <span>VISA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
