"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
  const blogs = [
    { id: 1, title: "Why Hiring A Wedding Planner in Udaipur...", img: "/b1.jpg", id: "why-choose" },
    { id: 2, title: "Professional Wedding Event Management...", img: "/b2.jpg", id: "event-management" },
    { id: 3, title: "Wedding Event Management Service...", img: "/b3.jpg", id: "service" },
  ];

  return (
    <main className="bg-[#FFF1E0] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 text-center px-4">
        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />
        <h1 className="text-4xl font-serif font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">We've received your message. Our team will get back to you within 24 hours.</p>
        
        <div className="flex justify-center gap-4 mb-20">
          <Link href="/" className="px-6 py-2 border border-gray-400 rounded-lg text-sm">Back to Home</Link>
          <Link href="/wedding-vnues" className="px-6 py-2 border border-gray-400 rounded-lg text-sm">Back to Wedding Venues</Link>
        </div>

        <h2 className="text-3xl font-serif mb-12">RECENT BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={blog.img} alt="blog" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-bold mb-4">{blog.title}</h4>
                <Link href={`/blog/${blog.id}`} className="text-xs text-pink-600 border border-pink-600 px-4 py-1 rounded-md uppercase font-bold hover:bg-pink-600 hover:text-white transition">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}