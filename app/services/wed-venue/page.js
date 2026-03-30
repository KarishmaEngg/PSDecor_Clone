"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const wed_venue = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A3728]">
      <Navbar />
      {/* 1. HERO SECTION - Based on image_a43ac0.jpg */}
      <section className="relative h-[65vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Replace the URL with your actual hero image path */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/wed-venue.jpg')` }} 
        />
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-serif mb-4 tracking-wide">
         Wedding Venue Booking
          </h1>
          <p className="text-xl md:text-2xl italic font-light tracking-widest">
   Find the Perfect Venue for Your Dream Wedding
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
          <span className="font-semibold text-[#4A3728]">Wedding Venue Booking</span>
        </div>
      </div>

      {/* 3. INTRO SECTION - Content from image_a4373f.png */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#4A3728]">
            Wedding Venue Booking – PS Decor
        </h2>
        <h3 className="text-xl md:text-2xl italic mb-10 text-gray-700">
       Find the Perfect Venue for Your Dream Wedding
        </h3>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-800 max-w-6xl">
          <p>
            At PS Decor, we believe that weddings are milestones of life that deserve nothing less than perfection. Our Luxury Wedding Décor & Styling services are crafted to transform ordinary venues into extraordinary experiences. With an eye for detail and a flair for sophistication, our decorators blend creativity, tradition, and modern trends to curate an atmosphere that reflects your personality.
             From grand entrances, floral arches, royal chandeliers, luxury mandap setups, and stage backdrops to elegant aisle styling, every element is customized to bring your dream celebration to life. We design spaces that are not only visually stunning but also emotionally captivating, ensuring that your wedding is remembered for its elegance and charm.
          </p>
        </div>
      </section>

      {/* 4. CUSTOMIZED THEMES - Based on image_a436c7.png & image_a36546.png */}
      <section className="bg-[#fceee5]/50 py-20 border-t border-b border-orange-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[#4A3728]">
           Customized Themes for Every Destination
          </h2>
          
          <div className="space-y-8 text-lg text-gray-800 max-w-6xl mb-16">
            <p>
            No two destinations are alike, and neither should their décor be. At PS Decor, we design personalized themes inspired by the local culture, landscape, and couple's preferences. For a beach wedding, we craft décor with flowing fabrics, pastel color palettes, seashell accents, and tropical flowers. 
            For a royal palace wedding, we focus on chandeliers, golden drapes, vintage props, and regal mandaps. Mountain or hillside weddings are enhanced with fairy lights, rustic wooden props, and cozy floral setups that complement nature's beauty. Our stylists pay attention to every detail, ensuring that the décor not only looks stunning but also resonates with the spirit of the location.
            </p>
          </div>

          {/* WHY CHOOSE SECTION - image_a436c7.png */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#4A3728]">
             Signature Elements of Luxury Wedding Décor
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-6xl mb-12">
              Luxury is in the details, and our styling is distinguished by signature décor elements that add grandeur to every wedding. Imagine a venue filled with crystal chandeliers, designer table centerpieces, cascading floral ceilings, royal drapery, custom lighting effects, elegant lounges, and thematic entryways—all curated to leave a lasting impression. Our luxury mandap designs combine intricate craftsmanship with opulent materials, while our stage styling and reception décor bring glamour to every event.
               For destination weddings, we create seamless outdoor décor concepts that highlight natural beauty while adding our luxury touch. Each element is planned to ensure a cohesive and breathtaking décor experience.
            </p>
            
            
          </div>

         <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#4A3728]">
             End-to-End Décor & Styling Services
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-6xl mb-12">
              With PS Decor, clients enjoy the advantage of complete wedding décor solutions under one roof. Our services cover pre-wedding functions (mehendi, haldi, sangeet), wedding ceremonies, receptions, engagement décor, and destination wedding setups.
               From concept planning and décor consultation to final execution, we manage every detail with precision. Our expert team of designers, florists, lighting technicians, and stage stylists ensures that the décor is not only luxurious but also practical, safe, and sustainable. We also provide custom installations and props, ensuring that your event stands out with exclusive designs not found anywhere else.
            </p>
            
            
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#4A3728]">
            Why Choose PS Decor for Luxury Wedding Styling
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-6xl mb-12">
             At PS Decor, we go beyond decoration—we curate experiences that embody luxury, creativity, and elegance. Our years of expertise, innovative approach, and passion for design have made us a trusted name in the wedding industry. We work closely with families and event planners to understand their vision, budget, and preferences, delivering personalized décor that exceeds expectations. 
             Whether it's an intimate gathering or a grand destination wedding, our commitment to excellence ensures flawless execution every time. With PS Decor as your décor partner, you are guaranteed a wedding that is not just styled beautifully but remembered as a masterpiece of luxury and unforgettable memories.
            </p>
            
            
          </div>


        </div>
      </section>

      {/* 5. OTHER SERVICES GRID - Based on image_a436c7.png bottom cards */}
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

export default wed_venue;