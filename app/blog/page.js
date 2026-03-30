"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaChevronRight } from "react-icons/fa";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 1. DATA EXPORT (Blog cards data)
export const BLOG_DATA = [
  { 
    id: 1, 
    slug: "why-choose",
    title: "Why Choose PS Decor for Professional Wedding Event", 
    location: "Delhi, India", date: "March 17, 2026", img: "/why-choose.webp"
  },
  { 
    id: 2, 
    slug: "event-management",
    title: "Wedding Event Management Service by PS Decor:", 
    location: "India", date: "March 17, 2026", img: "/lux2.webp"
  },
  { 
    id: 3, 
    slug: "trusted-wedding",
    title: "PS Decor: Trusted Wedding Event Management Service", 
    location: "India", date: "March 16, 2026", img: "/dest.webp"
  },
  { 
    id: 4, 
    slug: "best-destination",
    title: "How the Best Destination Wedding Planner in Delhi", 
    location: "India", date: "March 15, 2026", img: "/venv_1.jpg"
  },
  { 
    id: 5, 
    slug: "service",
    title: "PS Decor Wedding Event Management Service: Plan Your Dream Wedding", 
    location: "Goa, India", date: "March 12, 2026", img: "/venv_2.jpg"
  },
  { 
    id: 6, 
    slug: "budget",
    title: "A Wedding Venue Booking Checklist That Could Save Your Big Day", 
    location: "India", date: "March 12, 2026", img: "/venv_3.jpg"
  }
];

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-[#fff1e0] pb-20">
      <Navbar />
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[250px] md:h-[350px] mb-8 flex items-center justify-center overflow-hidden">
        <img src="/blog_banner.jpg" alt="Blog" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-[0.2em] uppercase drop-shadow-lg">Blog</h1>
          <p className="text-white/90 text-[10px] tracking-widest mt-2 uppercase italic">Stories from our cherished moments</p>
        </div>
      </div>

      {/* 2. BREADCRUMBS */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-8 flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
        <Link href="/" className="hover:text-pink-600 transition">Home</Link>
        <FaChevronRight size={8} />
        <span className="text-gray-800 font-bold">Blog</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* --- LEFT SIDE: BLOG CARDS --- */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {BLOG_DATA.map((post) => (
                <div key={post.id} className="bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col group h-full transition-all hover:shadow-md">
                  <div className="relative h-72 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                  </div>
                  <div className="p-8 text-center flex flex-col items-center flex-grow">
                    <h3 className="text-lg font-medium text-slate-800 mb-6 font-serif min-h-[60px] leading-tight">{post.title}</h3>
                    <div className="w-8 h-[1px] bg-pink-200 mb-4"></div>
                    <p className="text-[10px] text-pink-600 font-bold uppercase tracking-widest mb-1">{post.location}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-8">{post.date}</p>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="mt-auto border border-pink-700 text-pink-700 px-8 py-2.5 text-[10px] font-bold hover:bg-pink-700 hover:text-white transition-all uppercase tracking-widest"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: SIDEBAR --- */}
          <aside className="w-full lg:w-[380px] lg:sticky lg:top-28 space-y-8">
            
            {/* Form Card */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-1 leading-tight">Plan Your Wedding</h3>
              <p className="text-center text-gray-400 text-[10px] mb-8 italic uppercase tracking-tighter">Decor · Venue · Artist</p>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300" required />
                <input type="tel" placeholder="Mobile Number*" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300" required />
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm text-gray-500 outline-none">
                  <option>Interested In</option>
                  <option>Full Wedding Management</option>
                  <option>Destination Wedding</option>
                </select>
                <textarea placeholder="Message..." rows="3" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-pink-300"></textarea>
                <button className="w-full bg-[#FF2D7D] text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-all shadow-lg uppercase tracking-widest text-[11px]">
                  Get Free Quote
                </button>
              </form>
            </div>
{/* Popular Cities Section */}
<div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
  <h4 className="font-bold text-gray-800 mb-6 uppercase text-[11px] tracking-widest border-b pb-4">
    Venue in Popular Cities
  </h4>
  
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: 'Moradabad', img: '/s1.jpg' },
      { name: 'Ramnagar', img: '/s2.jpg' },
      { name: 'Jim Corbett', img: '/s3.jpg' },
      { name: 'Gajraula', img: '/s5.jpg' },
    ].map((city) => (
      <div key={city.name} className="flex flex-col items-center gap-2 cursor-pointer group">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-50 group-hover:border-pink-400 transition duration-500 shadow-sm">
          <img 
            src={city.img} 
            alt={city.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
          />
        </div>
        <span className="text-[11px] font-medium text-gray-600 group-hover:text-pink-600 transition uppercase tracking-tighter">
          {city.name}
        </span>
      </div>
    ))}
  </div>
</div>

            {/* Follow Us */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
               <h4 className="font-bold text-gray-800 mb-6 uppercase text-[11px] tracking-widest border-b pb-4">Follow Us</h4>
               <div className="flex justify-center gap-4 text-white">
                 <a href="https://www.instagram.com/psdecorindia?igsh=MWV2ZzdleXRqcGtwbw%3D%3D" className="bg-[#e91e63] p-3 rounded-full hover:scale-110 transition shadow-md"><FaInstagram size={16} /></a>
                 <a href="https://www.facebook.com/psdecorindia" className="bg-[#3b5998] p-3 rounded-full hover:scale-110 transition shadow-md"><FaFacebookF size={16} /></a>
                 <a href="https://www.youtube.com/channel/UCGs7iIGmmUC0fRl2qmIDISw" className="bg-[#ff0000] p-3 rounded-full hover:scale-110 transition shadow-md"><FaYoutube size={16} /></a>
               </div>
            </div>

            {/* Blog of the Week (Thumbnail Grid) */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
               <h4 className="text-center font-bold text-gray-800 mb-6 uppercase text-[11px] tracking-widest border-b pb-4">Blog of the Week</h4>
               <div className="grid grid-cols-2 gap-3">
                 <img src="/venv_1.jpg" className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition" />
                 <img src="/venv_2.jpg" className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition" />
                 <img src="/venv_3.jpg" className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition" />
                 <img src="/lux-bag.webp" className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition" />
               </div>
            </div>

          </aside>

        </div>
      </div>
      <Footer />
    </main>
  );
}