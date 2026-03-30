"use client";
import React from 'react';

export default function VenueHero({ venue }) {
  if (!venue) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="w-full bg-[#FFF1E0] pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-[10px] text-gray-500 mb-4 uppercase">Home &gt; Venues &gt; {venue.name}</nav>
        
        <div className="relative">
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            {/* Main Image */}
            <img src={venue.img || '/p1.jpg'} className="w-full h-full object-cover" alt={venue.name} />
          </div>

          <div className="md:absolute -bottom-10 left-10 bg-white p-8 rounded-2xl shadow-2xl border border-orange-50 mt-4 md:mt-0 max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800">{venue.name}</h1>
            <p className="text-blue-600 font-semibold mt-2">📍 {venue.city}, {venue.state}</p>
            <p className="text-gray-500 mt-1">👥 Capacity: {venue.pax} pax</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Yahan aap maps chala sakte hain agar images array mein hain */}
             <div className="h-40 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                <img src={venue.gallaryImg || venue.img} className="w-full h-full object-cover hover:scale-110 transition" alt="gallery" />
             </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 mb-10">
          <h2 className="text-2xl font-bold mb-6">Experience the Venue</h2>
          <div className="w-full max-w-3xl aspect-video bg-black rounded-3xl overflow-hidden relative group cursor-pointer">
             <img src={venue.videoThumb || venue.img} className="w-full h-full object-cover opacity-50" alt="video thumb" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition">
                   <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}