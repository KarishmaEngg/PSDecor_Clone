"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import LoveNotes from '@/components/LoveNotes';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Only the Love Notes (Testimonials) section */}
        <LoveNotes />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}