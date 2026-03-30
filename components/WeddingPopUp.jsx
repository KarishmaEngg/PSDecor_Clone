"use client";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WeddingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('wedding_popup_seen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // 1.5 seconds baad show hoga
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Ek baar close karne par session mein save kar lega taaki baar-baar na aaye
    sessionStorage.setItem('wedding_popup_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Popup Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-4xl w-full max-h-[95vh] border border-white/20"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 p-1.5 bg-white/80 hover:bg-white rounded-full transition-all shadow-md group active:scale-90"
            >
              <X size={20} className="text-gray-900 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Left Side: Image Content */}
            <div className="md:w-5/12 relative min-h-[200px] md:min-h-full">
              <img 
                src="/popup.png" // Yahan apni primary image ka path dein
                alt="Wedding Celebration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-black leading-tight drop-shadow-md">Your Dream Wedding</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] mt-2 font-bold opacity-90">
                  Planning • Décor • Hospitality • Artists
                </p>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div className="md:w-9/12 p-8 md:p-12 overflow-y-auto bg-[#FFFCFA]">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                  We Handle Your Complete Wedding
                </h2>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3 text-[10px] font-black text-[#e91e63] uppercase tracking-widest">
                  <span>Venue</span> <span>•</span> <span>Planning</span> <span>•</span> <span>Decor</span> <span>•</span> <span>Hospitality</span> <span>•</span> <span>Artists</span>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter ml-1">Name</label>
                    <input type="text" placeholder="Your name" className="w-full bg-white border border-gray-100 p-3.5 rounded-2xl text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all shadow-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter ml-1">Mobile</label>
                    <input type="tel" placeholder="+91 XXXXX" className="w-full bg-white border border-gray-100 p-3.5 rounded-2xl text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter ml-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-white border border-gray-100 p-3.5 rounded-2xl text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all shadow-sm" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter ml-1">Event Date</label>
                    <input type="date" className="w-full bg-white border border-gray-100 p-3.5 rounded-2xl text-sm focus:border-pink-500 outline-none transition-all shadow-sm text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-tighter ml-1">Event Location</label>
                    <input type="text" placeholder="City / Venue" className="w-full bg-white border border-gray-100 p-3.5 rounded-2xl text-sm focus:border-pink-500 outline-none transition-all shadow-sm" />
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-[9px] text-gray-400 text-center font-bold tracking-tight">
                    1000+ Happy Events • Quick Response • Best Price Guarantee
                  </p>
                </div>

                <button className="w-full bg-[#e91e63] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black hover:shadow-pink-200 shadow-lg transition-all active:scale-[0.98]">
                  Submit Details
                </button>

                <p className="text-[8px] text-gray-400 text-center mt-4 uppercase tracking-[0.15em] font-medium">
                  Note: We respect your privacy. Your details are secure.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WeddingPopup;