import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  ChevronRight,
  BarChart3,
  Truck,
  CreditCard,
  ShieldCheck,
  MessageSquare,
  Globe
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const menuItems = {
    SuperAdmin: [
      { name: 'Overview', icon: LayoutDashboard, path: '/admin-dashboard' },
      { name: 'Site Control', icon: Globe, path: '/admin-dashboard/site-control' },
      { name: 'Vendors', icon: Users, path: '/admin-dashboard/vendors' },
      { name: 'Products', icon: Package, path: '/admin-dashboard/products' },
      { name: 'Orders', icon: ShoppingCart, path: '/admin-dashboard/orders' },
      { name: 'Payments', icon: CreditCard, path: '/admin-dashboard/payments' },
      { name: 'Logistics', icon: Truck, path: '/admin-dashboard/logistics' },
      { name: 'Analytics', icon: BarChart3, path: '/admin-dashboard/analytics' },
      { name: 'Support', icon: MessageSquare, path: '/admin-dashboard/support' },
      { name: 'Settings', icon: Settings, path: '/admin-dashboard/settings' },
    ],
    Admin: [
      { name: 'Overview', icon: LayoutDashboard, path: '/admin-dashboard' },
      { name: 'Vendors', icon: Users, path: '/admin-dashboard/vendors' },
      { name: 'Products', icon: Package, path: '/admin-dashboard/products' },
      { name: 'Orders', icon: ShoppingCart, path: '/admin-dashboard/orders' },
      { name: 'Settings', icon: Settings, path: '/admin-dashboard/settings' },
    ],
    Vendor: [
      { name: 'Storefront', icon: LayoutDashboard, path: '/vendor-dashboard' },
      { name: 'My Products', icon: Package, path: '/vendor-dashboard/products' },
      { name: 'Orders', icon: ShoppingCart, path: '/vendor-dashboard/orders' },
      { name: 'Wallet', icon: CreditCard, path: '/vendor-dashboard/wallet' },
      { name: 'Analytics', icon: BarChart3, path: '/vendor-dashboard/analytics' },
      { name: 'Settings', icon: Settings, path: '/vendor-dashboard/settings' },
    ],
    Customer: [
      { name: 'My Profile', icon: LayoutDashboard, path: '/dashboard' },
      { name: 'My Orders', icon: ShoppingCart, path: '/dashboard/orders' },
      { name: 'Wishlist', icon: Package, path: '/dashboard/wishlist' },
      { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
    ],
    SupportAgent: [
      { name: 'Tickets', icon: MessageSquare, path: '/support-dashboard' },
      { name: 'Customers', icon: Users, path: '/support-dashboard/customers' },
    ],
    OperationsManager: [],
    FinanceManager: [],
    Moderator: []
  };

  const currentMenu = profile ? menuItems[profile.role] : [];

  return (
    <div className="flex h-screen bg-[#E4E3E0] text-[#141414] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-[#141414] text-[#E4E3E0] transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <span className="text-xl font-black italic font-serif tracking-tighter">DASHBOARD<span className="text-orange-600">.</span></span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-white/10 rounded">
            <ChevronRight className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} size={20} />
          </button>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4">
          {currentMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-all group ${
                location.pathname === item.path 
                  ? 'bg-orange-600 text-white' 
                  : 'hover:bg-white/5 text-[#E4E3E0]/60'
              }`}
            >
              <item.icon size={20} className={isSidebarOpen ? 'mr-3' : 'mx-auto'} />
              {isSidebarOpen && <span className="text-xs font-mono uppercase tracking-widest font-bold">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center p-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={20} className={isSidebarOpen ? 'mr-3' : 'mx-auto'} />
            {isSidebarOpen && <span className="text-xs font-mono uppercase tracking-widest font-bold">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto bg-[#E4E3E0]">
        <header className="h-16 bg-[#E4E3E0] border-b border-[#141414]/10 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#141414]/40">
            <span>{profile?.role}</span>
            <ChevronRight size={12} />
            <span className="text-[#141414] font-bold">{currentMenu.find(m => m.path === location.pathname)?.name || 'Overview'}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs font-bold font-mono">{profile?.displayName}</p>
              <p className="text-[10px] font-mono text-[#141414]/40 uppercase">{profile?.email}</p>
            </div>
            <img src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.displayName}`} className="w-10 h-10 rounded-full border border-[#141414]/10" alt="Avatar" />
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
