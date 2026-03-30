'use client';
import React from 'react';
import { IoClose } from "react-icons/io5";

const BlogModal = ({ isOpen, onClose, blogData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 md:p-6">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
      ></div>

      {/* Main Content Box - Full Scrollable Page */}
      <div className="relative bg-[#FFF8F0] w-full max-w-5xl h-full md:h-[95vh] rounded-none md:rounded-3xl overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-[1000] bg-white p-3 rounded-full shadow-xl text-2xl text-[#E91E63] hover:scale-110 transition-all"
        >
          <IoClose />
        </button>

        {/* --- BLOG FULL CONTENT (Based on your screenshots) --- */}
        <div className="p-8 md:p-20 space-y-20">
          
          {/* SECTION 1: ABOUT US (Based on image_94d16c.jpg) */}
          <section className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#E91E63]"></div>
                <span className="text-[#E91E63] font-bold tracking-widest text-sm uppercase">About Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">PS Decor</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                PS Decor (Pradeep Shukla Decor) is a professional wedding planning, event design, and coordination company offering services across India. We help couples and families plan memorable weddings through creative design and reliable coordination.
              </p>
              <p className="text-gray-600 italic">
                Note: PS Decor is the brand name of Pradeep Shukla Decor.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="/about_wedding.jpg" className="rounded-2xl shadow-2xl border-8 border-white" alt="About PS Decor" />
            </div>
          </section>

          {/* SECTION 2: OUR PROCESS (Based on image_f065a3.png content) */}
          <section className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-orange-50">
            <h3 className="text-3xl font-serif mb-10 text-center text-gray-800 underline decoration-pink-200 underline-offset-8">Our Planning Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <span className="text-5xl font-serif text-pink-100 block">01</span>
                <h4 className="font-bold text-xl">Consultation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We begin with a detailed consultation to understand your vision, cultural traditions, and budget.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif text-pink-100 block">02</span>
                <h4 className="font-bold text-xl">Concept Design</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We focus on details that create lasting impressions, from concept development to on-ground execution.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif text-pink-100 block">03</span>
                <h4 className="font-bold text-xl">Execution</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Our team works closely with clients to deliver a smooth and organized planning experience.</p>
              </div>
            </div>
          </section>

          {/* SECTION 3: WHY CHOOSE US (Based on image_94d16c.jpg) */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-serif">Why Choose PS Decor?</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment is built on transparency, clear communication, and professional execution. We aim to simplify the wedding planning journey while delivering elegant and well-managed events. 
            </p>
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Reliable", "Creative", "Transparent", "Professional"].map(item => (
                <div key={item} className="bg-[#FFF1E0] py-4 rounded-full text-sm font-bold uppercase tracking-widest text-[#E91E63] border border-pink-100">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: LOCATION & VENDORS */}
          <section className="bg-[#4A3728] text-white p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-serif mb-6">Trusted Network Across India</h3>
              <p className="opacity-80 leading-relaxed">
                PS Decor collaborates with trusted local vendors and service partners across multiple cities in India. Depending on location, we coordinate with venues, decorators, and caterers to help clients select suitable options.
              </p>
            </div>
            <div className="md:w-1/3">
               <button className="w-full bg-[#E91E63] py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-pink-700 transition">Contact Our Team</button>
            </div>
          </section>

          {/* Footer of the Modal */}
          <footer className="text-center pt-10 border-t border-orange-100">
            <p className="text-gray-400 text-xs uppercase tracking-widest italic">
              © 2026 PS Decor - Creating Timeless Memories
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;