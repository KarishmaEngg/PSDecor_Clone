"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurTeam from '@/components/OurTeam';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';

export default function WhyChoosePage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 3. Our Team Section */}
        <OurTeam />

        {/* 4. Awards & Certifications Section */}
        <AwardsSection />
        
        
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}