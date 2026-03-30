"use client";
import React from 'react';

export default function WeddingContact() {
  return (
    <section className="relative w-full bg-[#fdf0e6] py-10 md:py-20 overflow-hidden">
      
      {/* --- SHORT BACKGROUND STRIP --- */}
      {/* Iski height 'h-[300px]' ya 'h-[400px]' set karke aap strip ko chota kar sakte hain */}
      <div 
        className="absolute top-0 left-0 w-full h-[350px] md:h-[450px] z-0 bg-fixed bg-top bg-cover"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da12wzxoq/image/upload/v1763227131/Mehak_Rohit_Haldi_3_-28_xjdyzo_mgh6pg.jpg')",
        }}
      >
        {/* Light Overlay to match the theme */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* --- FORM CARD CONTAINER --- */}
      <div className="relative z-10 flex justify-center items-center py-14 px-4">
        
        {/* Main Card with shadow and rounded corners */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl min-h-[500px]">
          
          {/* Left Side: Static Image (Move with card) */}
          <div className="relative md:w-1/2 min-h-[300px] flex flex-col justify-center p-10 text-white text-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://res.cloudinary.com/da12wzxoq/image/upload/v1763221058/Mehak_Rohit_Haldi_3_-24_pn5xjb_v4ewar.webp')" }}
            >
              {/* Darker overlay inside card for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-serif tracking-widest mb-6">Contact Us</h2>
              <p className="text-sm leading-relaxed mb-8 opacity-90 max-w-[280px] mx-auto font-sans">
                If you would like to say hello or ask a general question, please send an email to <br/>
                <span className="font-bold underline">pradeepshukladecor@gmail.com</span>
              </p>
              <div className="flex items-center justify-center gap-2 font-sans">
                <span className="text-xl">📞</span>
                <span className="text-lg">+91 7599208222</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 bg-[#f9f9f9] p-10 md:p-14">
            <form action="https://formsubmit.co/pradeepshukladecor@gmail.com" method="POST" className="space-y-6">
              <input 
                placeholder="Name" 
                required 
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none focus:border-yellow-600 font-sans" 
                type="text" 
                name="name" 
              />
              
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  placeholder="E-mail" 
                  required 
                  className="w-full border-b border-gray-300 p-2 bg-transparent outline-none focus:border-yellow-600 font-sans" 
                  type="email" 
                  name="email" 
                />
                <input 
                  placeholder="Phone" 
                  className="w-full border-b border-gray-300 p-2 bg-transparent outline-none focus:border-yellow-600 font-sans" 
                  type="tel" 
                  name="phone" 
                />
              </div>

              <input 
                placeholder="Wedding Date" 
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none focus:border-yellow-600 font-sans" 
                type="text" 
                name="wedding_date" 
              />

              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                rows="3" 
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none focus:border-yellow-600 resize-none font-sans"
              ></textarea>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="text-yellow-700 border-b-2 border-yellow-700 pb-1 text-xl font-serif hover:text-yellow-900 transition-all"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}