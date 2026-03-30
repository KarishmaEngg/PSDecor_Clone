"use client";
import React from 'react';
import Link from 'next/link';
import { blogsData } from "@/data/blogs"; 
import { FaChevronRight, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-[#fff1e0] pb-20">
      
      {/* 1. HERO BANNER - Exact Image Style */}
      <div className="relative w-full h-[250px] md:h-[350px] mb-8 flex items-center justify-center overflow-hidden">
        <img src="/blog_banner.jpg" alt="Blog" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-[0.2em] uppercase drop-shadow-lg">Blog</h1>
          <p className="text-white/90 text-[10px] tracking-widest mt-2 uppercase italic">Stories from our cherished moments</p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- LEFT SIDE: 8 BLOG CARDS (Grid Fix) --- */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
              {blogsData.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="bg-white rounded-md shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                      />
                    </div>
                    {/* Content - Compact Style */}
                    <div className="p-6 text-center flex-grow flex flex-col items-center">
                      <h3 className="text-[16px] font-serif text-gray-800 mb-4 leading-snug min-h-[45px]">
                        {post.title}
                      </h3>
                      <div className="w-8 h-[1px] bg-pink-200 mb-4"></div>
                      <div className="mb-6">
                        <p className="text-[9px] text-pink-600 font-bold uppercase tracking-widest mb-1">{post.location}</p>
                        <p className="text-[9px] text-gray-400 uppercase tracking-tighter font-medium">{post.date}</p>
                      </div>
                      <span className="mt-auto border border-pink-700 text-pink-700 px-6 py-2 text-[9px] font-bold hover:bg-pink-700 hover:text-white transition-all uppercase tracking-widest">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: COMPACT SIDEBAR (Multi-Card Style) --- */}
          <aside className="w-full lg:w-[350px] lg:sticky lg:top-10 self-start space-y-6">
            
            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-center font-bold text-gray-800 mb-6 uppercase text-[11px] tracking-widest border-b pb-4">Plan Your Dream Wedding</h4>
              <form className="space-y-3">
                <input type="text" placeholder="Name*" className="w-full p-3 bg-[#fdfaf7] border border-gray-100 rounded text-[11px] outline-none focus:border-pink-300" />
                <input type="email" placeholder="Email*" className="w-full p-3 bg-[#fdfaf7] border border-gray-100 rounded text-[11px] outline-none focus:border-pink-300" />
                <input type="tel" placeholder="Phone*" className="w-full p-3 bg-[#fdfaf7] border border-gray-100 rounded text-[11px] outline-none focus:border-pink-300" />
                <textarea placeholder="Message" rows="3" className="w-full p-3 bg-[#fdfaf7] border border-gray-100 rounded text-[11px] outline-none focus:border-pink-300"></textarea>
                <button className="w-full bg-[#e91e63] text-white py-3 rounded font-bold uppercase text-[10px] tracking-widest hover:bg-black transition shadow-md">
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Popular Cities (Image Circular Style) */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <h4 className="font-bold text-gray-800 mb-6 uppercase text-[11px] tracking-widest border-b pb-4">Venue in Popular Cities</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Moradabad', 'Ramnagar', 'Jim Corbett', 'Gajraula'].map((city) => (
                  <div key={city} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-50 group-hover:border-pink-400 transition">
                      <img src={`/city_${city.toLowerCase().replace(' ', '_')}.webp`} alt={city} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
               <h4 className="font-bold text-gray-800 mb-4 uppercase text-[11px] tracking-widest">Follow Us</h4>
               <div className="flex justify-center gap-4 text-white">
                 <a href="#" className="bg-[#e91e63] p-2 rounded-full hover:scale-110 transition"><FaInstagram size={14} /></a>
                 <a href="#" className="bg-[#3b5998] p-2 rounded-full hover:scale-110 transition"><FaFacebookF size={14} /></a>
                 <a href="#" className="bg-[#ff0000] p-2 rounded-full hover:scale-110 transition"><FaYoutube size={14} /></a>
               </div>
            </div>

            {/* Blog of the Week (Thumbnail Grid) */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
               <h4 className="text-center font-bold text-gray-800 mb-4 uppercase text-[11px] tracking-widest border-b pb-4">Blog of the Week</h4>
               <div className="grid grid-cols-2 gap-2">
                 <img src="/ven_1.jpg" className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80" />
                 <img src="/ven_2.jpg" className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80" />
                 <img src="/ven_3.jpg" className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80" />
                 <img src="/ven_1.jpg" className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80" />
               </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
