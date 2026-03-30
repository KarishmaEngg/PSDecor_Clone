"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import AwardsSection from '@/components/AwardsSection';
import AwardGallery from '@/components/AwardGallery';
import Footer from '@/components/Footer';

export default function AwardsPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
       

        {/* Award Badges Section */}
        <AwardsSection />

        {/* Event Gallery Section (Matches your screenshot) */}
        <AwardGallery />
      </main>

      <Footer />
    </div>
  );
}