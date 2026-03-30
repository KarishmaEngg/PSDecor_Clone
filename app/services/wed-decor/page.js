"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WeddingDecorPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A3728]">
      <Navbar />
      {/* 1. HERO SECTION - Based on image_a43ac0.jpg */}
      <section className="relative h-[65vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Replace the URL with your actual hero image path */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/wed-decor.jpg')` }} 
        />
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-serif mb-4 tracking-wide">
            Wedding & Event Decorations
          </h1>
          <p className="text-xl md:text-2xl italic font-light tracking-widest">
            Transforming Moments into Memories
          </p>
        </div>
      </section>

      {/* 2. BREADCRUMBS - Matches image_a4373f.png */}
      <div className="bg-[#FFF1E0] py-6">
        <div className="max-w-7xl mx-auto px-6 text-[13px] text-gray-600 flex gap-2">
          <Link href="/" className="hover:text-pink-600">Home</Link> 
          <span>{'>'}</span> 
          <span className="hover:text-pink-600 cursor-pointer">Services</span> 
          <span>{'>'}</span> 
          <span className="font-semibold text-[#4A3728]">Wedding & Event Decorations</span>
        </div>
      </div>

      {/* 3. INTRO SECTION - Content from image_a4373f.png */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#4A3728]">
          Wedding & Event Decorations – PS Decor
        </h2>
        <h3 className="text-xl md:text-2xl italic mb-10 text-gray-700">
          Transforming Moments into Memories
        </h3>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-800 max-w-6xl">
          <p>
            At <span className="font-bold">PS Decor</span>, we specialize in creating unforgettable experiences through our 
            <span className="font-bold"> wedding and event decoration services</span>. From grand 
            weddings to intimate gatherings, our expert team blends creativity with precision to deliver décor that reflects your unique style.
          </p>
          <p>
            We design every element—whether it's <span className="font-bold underline decoration-pink-300">floral arrangements</span>, 
            <span className="font-bold"> stage backdrops</span>, <span className="font-bold"> mandap decorations</span>, or 
            <span className="font-bold italic"> elegant table styling</span>—with a focus on luxury and perfection. 
            Our goal is not just to decorate venues but to transform them into magical spaces that leave a lasting impression. 
            With years of expertise and a commitment to innovation, PS Decor is trusted by families, corporates, and event planners across India.
          </p>
        </div>
      </section>

      {/* 4. CUSTOMIZED THEMES - Based on image_a436c7.png & image_a36546.png */}
      <section className="bg-[#fceee5]/50 py-20 border-t border-b border-orange-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[#4A3728]">
            Customized Themes & Elegant Styling
          </h2>
          
          <div className="space-y-8 text-lg text-gray-800 max-w-6xl mb-16">
            <p>
              Every celebration deserves a distinct identity, and our <span className="font-bold">event decoration services</span> are 
              tailored to your vision. Be it a <span className="font-bold text-pink-700">royal wedding</span>, 
              <span className="font-bold italic"> modern minimalist décor</span>, <span className="font-bold"> rustic outdoor setup</span>, 
              or <span className="font-bold"> destination celebration</span>, we bring your ideas to life with precision and passion.
            </p>
            <p>
              Our in-house designers curate <span className="font-bold">custom themes, lighting effects, fabric draping, stage décor, centerpieces, and photo booths</span> that 
              elevate the ambience of your event. We also specialize in <span className="font-bold text-pink-700">cultural and traditional decorations</span>, 
              blending heritage with modern aesthetics for a truly memorable experience.
            </p>
          </div>

          {/* WHY CHOOSE SECTION - image_a436c7.png */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#4A3728]">
              Why Choose PS Decor for Your Special Day
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-6xl mb-12">
              Choosing the right décor partner can make all the difference. At PS Decor, we focus on 
              <span className="font-bold"> end-to-end decoration solutions</span>—from concept planning and theme 
              execution to flawless on-site setup. Our <span className="font-bold">wedding decorators and event stylists</span> pay 
              attention to even the smallest detail, ensuring your venue is picture-perfect and Instagram-ready.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                <p className="text-gray-700 italic">
                  Whether you need <span className="font-bold text-pink-700">destination wedding decoration</span>, 
                  <span className="font-bold"> corporate event styling</span>, <span className="font-bold"> festive décor</span>, 
                  or <span className="font-bold"> luxury party decorations</span>, PS Decor delivers unmatched creativity and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-5xl font-serif mb-12 text-center text-[#4A3728]">Other Services</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { name: "Luxury Wedding Décor & Styling", slug: "luxury" },
      { name: "Destination Weddings", slug: "destination" },
      { name: "Wedding Venue Booking", slug: "wed-venue" },
      { name: "Wedding Planning & Management", slug: "wed-plan" },
      { name: "Invitations & Wedding Stationery", slug: "invitation" },
      { name: "Hospitality & Guest Services", slug: "hospitality" },
      { name: "Entertainment & Artist Management", slug: "entertainment" },
      { name: "Photography & Cinematic Films", slug: "photography" },
      { name: "Special Effects & Unique Experiences", slug: "effects" },
    ].map((service) => (
      <Link 
        key={service.slug} 
        href={`/services/${service.slug}`} // Yahan apna sahi path daalein (jaise /services/ ya sirf /slug)
        className="group bg-white p-6 rounded-2xl shadow-sm border border-orange-50 hover:border-pink-200 hover:shadow-xl transition-all duration-500 flex items-center justify-between cursor-pointer"
      >
        <span className="text-gray-800 font-medium group-hover:text-pink-700 transition-colors duration-300">
          {service.name}
        </span>
        <span className="text-pink-300 group-hover:text-pink-600 text-2xl font-bold transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    ))}
  </div>
</section>
     <Footer />
    </div>
    
  );
};

export default WeddingDecorPage;