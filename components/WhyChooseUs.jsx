// components/WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FFF5E9] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8 tracking-widest uppercase">
          Why Choose Us
        </h2>
        
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            <span className="font-bold text-gray-800">PS Decor</span> is a trusted name in wedding décor, corporate events, and luxury celebrations, 
            known for blending creativity, precision, and certified quality.
          </p>
          <p>
            Our experienced team delivers on-time execution, transparent processes, and innovative 
            décor concepts tailored to your needs.
          </p>
          
          <div className="pt-4">
            <p className="inline-block border-t border-b border-pink-200 py-2 font-semibold text-gray-700 uppercase tracking-tighter">
              Artistry meets Professionalism
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;