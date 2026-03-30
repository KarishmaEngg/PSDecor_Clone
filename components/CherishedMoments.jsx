// components/CherishedMoments.jsx
'use client';
import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const CherishedMoments = () => {
  const socialLinks = [
    { icon: <FaInstagram />, handle: "@pradeepshukladecor", color: "text-[#E1306C] bg-white",link:"https://www.instagram.com/psdecorindia?igsh=MWV2ZzdleXRqcGtwbw%3D%3D" },
    { icon: <FaFacebookF />, handle: "Pradeep Shukla Decor", color: "text-[#1877F2] bg-white",link:"https://www.facebook.com/psdecorindia" },
    { icon: <FaYoutube />, handle: "@pradeepshukladecor9784", color: "text-[#FF0000] bg-white",link:"https://www.youtube.com/channel/UCGs7iIGmmUC0fRl2qmIDISw" },
    { icon: <FaWhatsapp />, handle: "+91 7599208222", color: "text-[#25D366] bg-white",link:"hhttps://www.youtube.com/channel/UCGs7iIGmmUC0fRl2qmIDISw" },
  ];

  return (
    <section className='bg-[#FFE4D5] relative overflow-hidden py-24 px-4'>
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
           <div className="h-[1px] w-12 bg-pink-400"></div>
           <span className="text-pink-600 text-[10px] uppercase font-bold tracking-[0.3em]">Follow Our Journey</span>
           <div className="h-[1px] w-12 bg-pink-400"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-gray-800 tracking-[0.15em] uppercase mb-12">
          Cherished Moments
        </h2>

        {/* Social Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-xl border border-white/50 p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${social.color}`}>
                  {social.icon}
                </div>
                <span className="text-[9px] md:text-[11px] text-gray-500 font-semibold tracking-tight break-all uppercase">
                  {social.handle}
                </span>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-pink-100">
             <p className="text-gray-600 text-center font-serif max-w-lg mx-auto mb-8">Tag us in your photos and use our special hashtag</p>
             <p className="text-rose-500 font-medium mt-1">
               #weddingbypsdecor
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CherishedMoments;