'use client';
import React from 'react';
import Image from 'next/image'; // Next.js का Image component use करना बेहतर है

const AwardsSection = () => {
  const awards = [
    { title: "Best Wedding Decor Award 2023", image: "/award.webp" },
    { title: "Certified Event Planner – IEDP", image: "/award.webp" },
    { title: "ISO 9001:2015 Certified", image: "/award.webp" },
    { title: "Member – National Event Association", image: "/award.webp" },
  ];

  return (
    <section className="bg-[#FFF5E9] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-[0.2em] uppercase mb-3">
          Awards & Certifications
        </h2>
        <p className="text-gray-800 text-[10px] md:text-xs max-w-2xl mx-auto mb-12 bold tracking-widest">
         Celebrating our journey of excellence through prestigious awards and trusted industry certifications.
        </p>

        {/* Grid: Mobile पर 2 columns और Desktop पर 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-[#FFE4D5] p-6 md:p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center"
            >
              {/* Image Box */}
              <div className="relative w-50 h-10 md:w-15 md:h-15 mb-6 grayscale  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full "
                />
              </div>
              
              <p className="text-[11px] md:text-[12px] font-bold text-gray-700 uppercase tracking-tight leading-tight">
                {award.title}
              </p>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default AwardsSection;