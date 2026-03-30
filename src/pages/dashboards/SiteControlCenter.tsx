import React, { useEffect } from 'react';
import { 
  Settings, 
  Layout, 
  Navigation, 
  CreditCard, 
  Truck, 
  FileText, 
  Bell, 
  Shield, 
  Save,
  Plus,
  Trash2,
  GripVertical
} from 'lucide-react';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { SiteSettings } from '../../types';

export const SiteControlCenter: React.FC = () => {
  const [settings, setSettings] = React.useState<SiteSettings | null>(null);
  const [activeTab, setActiveTab] = React.useState('identity');
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'site_settings', 'global'), (doc) => {
      if (doc.exists()) {
        setSettings(doc.data() as SiteSettings);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdate = async (newSettings: Partial<SiteSettings>) => {
    try {
      await updateDoc(doc(db, 'site_settings', 'global'), newSettings);
    } catch (error) {
      console.error('Update settings error:', error);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64">Loading Settings...</div>;

  const tabs = [
    { id: 'identity', label: 'Identity', icon: Settings },
    { id: 'navigation', label: 'Header & Nav', icon: Navigation },
    { id: 'homepage', label: 'Home Sections', icon: Layout },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'policies', label: 'Policies', icon: FileText },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b border-[#141414]/10 pb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic font-serif uppercase tracking-tighter">Site Control Center<span className="text-orange-600">.</span></h2>
          <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">Modify global configurations in real-time</p>
        </div>
        <button className="flex items-center space-x-2 bg-[#141414] text-[#E4E3E0] px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-all">
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#141414] text-[#E4E3E0]' 
                  : 'bg-white text-[#141414]/60 hover:bg-gray-50 border border-[#141414]/5'
              }`}
            >
              <tab.icon size={18} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-[#141414]/5 p-8">
          {activeTab === 'identity' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Site Name</label>
                  <input 
                    type="text" 
                    value={settings?.siteName || ''} 
                    onChange={(e) => handleUpdate({ siteName: e.target.value })}
                    className="w-full bg-gray-50 border border-[#141414]/10 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-orange-600" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Maintenance Mode</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleUpdate({ maintenanceMode: !settings?.maintenanceMode })}
                      className={`w-14 h-8 rounded-full transition-all relative ${settings?.maintenanceMode ? 'bg-orange-600' : 'bg-gray-200'}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${settings?.maintenanceMode ? 'left-7' : 'left-1'}`} />
                    </button>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                      {settings?.maintenanceMode ? 'ENABLED' : 'DISABLED'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Global Commission Rate (%)</label>
                <input 
                  type="number" 
                  value={settings?.commissionRate || 0} 
                  onChange={(e) => handleUpdate({ commissionRate: parseFloat(e.target.value) })}
                  className="w-full bg-gray-50 border border-[#141414]/10 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-orange-600" 
                />
              </div>
            </div>
          )}

          {activeTab === 'homepage' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Homepage Section Builder</h3>
                <button className="flex items-center space-x-2 text-orange-600 text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Plus size={14} />
                  <span>Add Section</span>
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'hero', name: 'Editorial Hero', status: 'Active' },
                  { id: 'features', name: 'Feature Grid', status: 'Active' },
                  { id: 'flash', name: 'Flash Sale Slider', status: 'Active' },
                  { id: 'brands', name: 'Brand Marquee', status: 'Inactive' },
                ].map((section, i) => (
                  <div key={section.id} className="flex items-center justify-between p-4 bg-gray-50 border border-[#141414]/5 rounded-xl group">
                    <div className="flex items-center space-x-4">
                      <GripVertical size={16} className="text-[#141414]/20 cursor-move" />
                      <div>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest">{section.name}</p>
                        <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">Section ID: {section.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${section.status === 'Active' ? 'text-green-600' : 'text-gray-400'}`}>
                        {section.status}
                      </span>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white rounded-lg text-blue-600"><Settings size={14} /></button>
                        <button className="p-2 hover:bg-white rounded-lg text-red-600"><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {['navigation', 'payments', 'logistics', 'policies'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Settings size={48} className="text-orange-600 animate-spin-slow" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">Module configuration coming soon</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
