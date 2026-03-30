import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Search,
  Filter,
  User,
  Send
} from 'lucide-react';

export const SupportDashboard: React.FC = () => {
  const [activeTicket, setActiveTicket] = React.useState(1);

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white rounded-3xl shadow-sm border border-[#141414]/5 overflow-hidden">
      {/* Tickets List */}
      <div className="w-80 border-r border-[#141414]/5 flex flex-col">
        <div className="p-6 border-b border-[#141414]/5 space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Support Tickets</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141414]/40" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH TICKETS..." 
              className="w-full bg-gray-50 border border-[#141414]/10 rounded-xl py-3 pl-10 pr-4 text-[10px] font-mono focus:outline-none focus:border-orange-600" 
            />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {[1, 2, 3, 4, 5].map((id) => (
            <button 
              key={id}
              onClick={() => setActiveTicket(id)}
              className={`w-full p-6 text-left border-b border-[#141414]/5 transition-all hover:bg-gray-50 ${activeTicket === id ? 'bg-orange-50 border-r-4 border-r-orange-600' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#141414]/40">#TKT-2026-{id}</span>
                <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${id === 1 ? 'text-red-600' : 'text-green-600'}`}>
                  {id === 1 ? 'Urgent' : 'Normal'}
                </span>
              </div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 truncate">Payment Failed SSLCommerz</p>
              <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">Customer: John Doe</p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow flex flex-col">
        <div className="p-6 border-b border-[#141414]/5 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-orange-600" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest">John Doe</h4>
              <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">Customer since 2025 • Dhaka, BD</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-[8px] font-mono font-bold uppercase tracking-widest">Resolve Ticket</button>
            <button className="p-2 hover:bg-gray-50 rounded-lg"><AlertCircle size={18} className="text-orange-600" /></button>
          </div>
        </div>

        <div className="flex-grow p-8 overflow-y-auto space-y-8 bg-gray-50/50">
          <div className="flex flex-col space-y-2 max-w-[70%]">
            <div className="p-4 bg-white rounded-2xl rounded-tl-none border border-[#141414]/5 shadow-sm">
              <p className="text-[10px] font-mono uppercase tracking-widest leading-relaxed">
                Hello, I tried to pay using bKash but the transaction failed even though the money was deducted. Can you please check?
              </p>
            </div>
            <span className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">10:42 AM</span>
          </div>

          <div className="flex flex-col space-y-2 max-w-[70%] ml-auto items-end">
            <div className="p-4 bg-[#141414] text-[#E4E3E0] rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-[10px] font-mono uppercase tracking-widest leading-relaxed">
                Hello John, I'm sorry to hear that. Let me check our payment logs for transaction ID. Could you please provide the bKash transaction ID?
              </p>
            </div>
            <span className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">10:45 AM</span>
          </div>
        </div>

        <div className="p-6 border-t border-[#141414]/5 bg-white">
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="TYPE YOUR MESSAGE..." 
              className="flex-grow bg-gray-50 border border-[#141414]/10 rounded-2xl py-4 px-6 text-[10px] font-mono focus:outline-none focus:border-orange-600" 
            />
            <button className="p-4 bg-orange-600 text-white rounded-2xl hover:bg-[#141414] transition-all">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
