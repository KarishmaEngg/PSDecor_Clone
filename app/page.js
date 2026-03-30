"use client";
import React, { Fragment, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/Portfolio';
import AuraSection from '@/components/AuraSection';
import AboutSection from '@/components/AboutSection';
import LatestVideo from '@/components/LatestVideo';
import TeamSection from '@/components/OurTeam';
import ServicesSection from '@/components/ServiceSection';
import LoveNotes from '@/components/LoveNotes';
import BlogSection from '@/components/BlogSection';
import AwardsSection from '@/components/AwardsSection';
import Collaborators from '@/components/Colloborators';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import OurTeam from '@/components/OurTeam';
import WhyChooseUs from '@/components/WhyChooseUs';
import CherishedMoments from '@/components/CherishedMoments';
import WeddingPopUp from '@/components/WeddingPopUp';

const Page = () => {
  // State to manage the view: 'home' (Full) vs 'portfolio' (Dedicated)
  const [currentView, setCurrentView] = useState('home');

  return (
    <Fragment>
      {/* Pass the state control to Navbar */}
      <Navbar setView={setCurrentView} />

      {/* 1. Hero: Only visible on Home view */}
      {currentView === 'home' && <HeroSlider />}

      {/* 2. Portfolio & Aura: Always visible (Moves to top when Hero is hidden) */}
      <Portfolio />
      <AuraSection />

      {/* 3. The rest of the page: Hidden when Portfolio view is active */}
      {currentView === 'home' && (
        <Fragment>
          <AboutSection />
          <LatestVideo />
          
          <WhyChooseUs />
          <TeamSection />
          <ServicesSection />
          <LoveNotes />
          <BlogSection />
          <AwardsSection />
          <CherishedMoments />
          <Collaborators />
          <ContactSection />
          <WeddingPopUp />
        </Fragment>
      )}

      {/* 4. Footer: Always visible at the bottom */}
      <Footer />
    </Fragment>
  );
};

export default Page;