"use client";
import React from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-[#FFF1E6] min-h-screen flex flex-col">
      {/* --- Navigation Bar --- */}
      <Navbar />

      {/* --- Main Content Area --- */}
      <main className="flex-grow">
        <section className="py-12 px-6 md:px-20 max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* LEFT COLUMN: TEXT CONTENT */}
            <div className="flex flex-col">
              {/* Decorative Star Icon */}
              <div className="mb-4">
                <svg width="35" height="35" viewBox="0 0 100 100" className="text-gray-800">
                  <path 
                    d="M50 5 L61 35 L95 35 L67 55 L78 85 L50 65 L22 85 L33 55 L5 35 L39 35 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-wide uppercase">
                About Us
              </h1>

              <div className="space-y-5 text-gray-800 text-[14px] md:text-[15px] leading-relaxed text-justify">
                <p>
                  <span className="font-bold">PS Decor (Pradeep Shukla Decor)</span> is a professional wedding planning, event design, and coordination company offering services across India. We help couples and families plan memorable weddings and special events through creative design, thoughtful planning, and reliable coordination.
                </p>
                
                <p>
                  Our process begins with a detailed consultation to understand your vision, preferences, cultural traditions, and budget. Every celebration is unique, and our goal is to design events that reflect the personality and story of our clients.
                </p>

                <p>
                  We specialize in customized wedding décor and event styling, focusing on details that create lasting impressions. From concept development to on-ground execution, our team works closely with clients to deliver a smooth and organized planning experience.
                </p>

                <p>
                  PS Decor collaborates with trusted local vendors and service partners across multiple cities in India. Depending on the location, we coordinate with venues, decorators, caterers, and other service providers to help clients select suitable options.
                </p>

                <p>
                  Our commitment is built on transparency, clear communication, and professional execution. We aim to simplify the wedding planning journey while delivering elegant and well-managed events.
                </p>

                <p className="pt-2">
                  For more information about our services or to discuss your requirements, please contact us using the details provided on this website.
                </p>

                {/* Disclaimer/Note Section */}
                <div className="mt-8 pt-4 border-t border-orange-200">
                  <p className="text-[11px] text-gray-500 italic">
                    Note: PS Decor is the brand name of Pradeep Shukla Decor. Service availability and pricing may vary by location and are subject to vendor confirmation.
                  </p>
                </div>
              </div>
            </div>

           {/* RIGHT COLUMN: IMAGE CONTAINER */}
<div className="flex justify-center items-center w-full h-full p-4 md:p-8 mt-20 md:mt-0">
   {/* RIGHT COLUMN: IMAGE */}
          <div className="relative w-full h-full  rounded-2xl overflow-hidden shadow-lg mt-20 md:mt-0">
            <Image
              src="/about-image.jpg" 
              alt="Wedding Couple"
              fill
              className="object-cover"
              priority
            />
          </div>

</div>

          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}