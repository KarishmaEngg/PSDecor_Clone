"use client";
import React from 'react';
import { useParams } from 'next/navigation'; // Slug lene ke liye
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VenueHero from "@/components/VenueHero";
import BookingForm from "@/components/BookingForm";
import { FaCheckCircle } from "react-icons/fa";
import { FINAL_VENUES } from "@/data/venues"; // Data import zaroori hai

export default function VenueDetail() {
  const params = useParams();
  const slug = params.slug;

  // URL wale slug se data file mein hotel dhoondein
  const currentVenue = FINAL_VENUES.find((v) => v.id === slug);

  // Agar hotel data nahi milta toh ek loading ya error message dikhayein
  if (!currentVenue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF1E0]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Venue Not Found</h2>
          <p className="text-gray-500 mt-2">Please check the URL or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FFF1E0] min-h-screen">
      <Navbar />
      
      {/* Main Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
        
        {/* Row for Hero Image and Sticky Form */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE: Hero Image, About, Gallery, Videos */}
          <div className="w-full lg:w-2/3">
            
            {/* 1. Hero Section (Dynamic Data Pass Ho Raha Hai) */}
            <VenueHero venue={currentVenue} />

            {/* 2. About Section */}
            <section className="mt-12 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Set against the timeless wilderness of Uttarakhand’s most celebrated forest, {currentVenue.name} offers a wedding setting where nature’s poetry meets contemporary grandeur. 
                The resort unfolds like a secluded sanctuary—cradled by dense sal forests and framed by panoramic hill silhouettes. Its architectural design blends refined modern styling with organic textures.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                📍 {currentVenue.location || currentVenue.city}
              </p>
            </section>

            {/* 3. Guest Capacity Cards */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Guest Capacity Packages</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-pink-50 p-6 rounded-2xl text-center border-b-4 border-[#E91E63] shadow-sm">
                  <p className="text-[#E91E63] font-bold text-sm md:text-base">{currentVenue.pax}</p>
                  <span className="text-[10px] text-gray-500 uppercase font-semibold">Capacity</span>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl text-center border-b-4 border-[#E91E63] shadow-sm">
                  <p className="text-[#E91E63] font-bold text-sm md:text-base">{currentVenue.rooms || "Luxury"}</p>
                  <span className="text-[10px] text-gray-500 uppercase font-semibold">Rooms</span>
                </div>
              </div>
            </section>

            {/* 4. Facilities & Amenities */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Facilities & Amenities</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {["Parking Available", "AC Banquet", "Outdoor Lawn", "Catering Service", "5-Star Rooms", "Power Backup"].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" /> {feat}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: Floating Booking Form (Sticky) */}
          <aside className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <BookingForm venueName={currentVenue.name} />
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}