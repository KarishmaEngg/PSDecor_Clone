"use client";
import React, { Fragment } from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import AuraSection from '@/components/AuraSection';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <Fragment>
      <Navbar />
      <main className="min-h-screen bg-[#FFF1E0]">
        {/* We reuse your existing components */}
        <Portfolio />
        <AuraSection />
      </main>
      <Footer />
    </Fragment>
  );
}