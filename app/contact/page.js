"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoCall, IoLocation } from "react-icons/io5";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Yahan apni Access Key dalein
    formData.append("access_key", "9624a98a-b628-429f-8861-805dcfcc41c8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully! ❤");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/contact-bag.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-6xl w-full bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
            <span className="text-pink-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">Contact Us</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
              PS Decor (Pradeep Shukla Decor) assists couples and families...
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <IoCall className="text-pink-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-widest">Call Us</h4>
                  <p className="text-pink-600 font-bold">+91 7599208222</p>
                </div>
              </div>
              {/* Baki address items yahan same rahenge... */}
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form (Updated with names) */}
          <div className="lg:w-1/2 bg-[#2D2926] p-10 md:p-16 text-white">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Important: Sabhi inputs mein 'name' attribute hona chahiye */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold opacity-80">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-pink-500 transition" 
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold opacity-80">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-pink-500 transition" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold opacity-80">Phone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-pink-500 transition" 
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold opacity-80">Wedding Date</label>
                <input 
                  type="date" 
                  name="wedding_date"
                  className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-pink-500 transition text-gray-400" 
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold opacity-80">Your Message *</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-pink-500 transition resize-none" 
                  placeholder="Tell us about your special day..."
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="bg-white text-gray-900 px-10 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-xl"
                >
                  Send Message
                </button>
                {/* Result Message Display */}
                <p className="mt-4 text-xs font-medium text-pink-400">{result}</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}