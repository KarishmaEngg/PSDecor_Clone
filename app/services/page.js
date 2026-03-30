"use client";
import React from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServiceSection';

export default function ServicesPage() {
  return (
    <div className="bg-[#FFF1E6] min-h-screen flex flex-col">
      {/* --- Navigation Bar --- */}
      <Navbar />
      <ServicesSection />
      

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}