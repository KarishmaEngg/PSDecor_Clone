"use client";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#FFE4D5] py-6 px-6 md:px-20">
      <div className="max-w-11xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col">
          {/* Small Decorative Icon */}
          <img src="/about-img.png" alt="" className="h-2px w-20 mb-5 ml-2" />

          <h2 className="text-4xl md:text-7xl font-serif text-gray-900 mb-8 tracking-wide">
            ABOUT US
          </h2>

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
              PS Decor collaborates with trusted local vendors and service partners across multiple cities in India. Depending on the location, we coordinate with venues, decorators, caterers, and other service providers to help clients select suitable options. We act as planners and coordinators and do not claim ownership of venues unless explicitly mentioned.
            </p>

            <p>
              Our commitment is built on transparency, clear communication, and professional execution. We aim to simplify the wedding planning journey while delivering elegant and well-managed events.
            </p>

            <p className="pt-2">
              For more information about our services or to discuss your requirements, please contact us using the details provided on this website.
            </p>

            <p className="text-[11px] text-gray-500 mt-6 pt-4 border-t border-orange-200">
              Note: PS Decor is the brand name of Pradeep Shukla Decor. Service availability and pricing may vary by location and are subject to vendor confirmation.
            </p>
          </div>
        </div>

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

      
    </section>
  );
}