import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { motion } from 'motion/react';
import { LogIn, ShieldCheck, Globe } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E4E3E0] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#141414]/5"
      >
        <div className="bg-[#141414] p-12 text-center space-y-4">
          <h1 className="text-3xl font-black italic font-serif text-[#E4E3E0] tracking-tighter uppercase">
            Marketplace<span className="text-orange-600">.</span>
          </h1>
          <p className="text-[10px] font-mono text-[#E4E3E0]/40 uppercase tracking-[0.3em]">
            Enterprise Multi-Vendor Platform
          </p>
        </div>

        <div className="p-12 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-bold font-mono uppercase tracking-widest text-[#141414]">Welcome Back</h2>
            <p className="text-[10px] font-mono text-[#141414]/40 uppercase tracking-widest">Sign in to access your dashboard</p>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-4 bg-[#E4E3E0] hover:bg-[#141414] hover:text-[#E4E3E0] text-[#141414] py-4 rounded-2xl transition-all duration-300 group border border-[#141414]/10"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Continue with Google</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col items-center p-4 bg-[#141414]/5 rounded-2xl space-y-2">
              <ShieldCheck size={20} className="text-orange-600" />
              <span className="text-[8px] font-mono uppercase tracking-widest font-bold">Secure Auth</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#141414]/5 rounded-2xl space-y-2">
              <Globe size={20} className="text-orange-600" />
              <span className="text-[8px] font-mono uppercase tracking-widest font-bold">Global Access</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#141414]/5 text-center border-t border-[#141414]/5">
          <p className="text-[8px] font-mono text-[#141414]/40 uppercase tracking-widest">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
};
