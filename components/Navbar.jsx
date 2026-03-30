"use client";

import { useState } from "react";
import { FINAL_VENUES } from '@/data/venues';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaChevronDown,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function Navbar({ setView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const servicesList = [
    { name: "All Services", path: "/services" },
    { name: "Wedding & Event Decorations", path: "/services/wed-decor" },
    { name: "Luxury Wedding Décor & Styling", path: "/services/luxury" },
    { name: "Destination Weddings", path: "/services/destination" },
    { name: "Wedding Venue Booking", path: "/services/wedding-venues" },
    { name: "Wedding Planning & Management", path: "/services/wed_plan" },
    { name: "Invitations & Wedding Stationery", path: "/services/invitation" }, 
    { name: "Hospitality & Guest Services", path: "/services/hospitality" },
    { name: "Entertainment & Artist Management", path: "/services/entertainment" },
    { name: "Catering & Food Experiences", path: "/services/catering" },
    { name: "Photography & Cinematic Films", path: "/services/photography" },
    { name: "Special Effects & Unique Experiences", path: "/services/effects" }
  ];

  const handleLinkClick = (viewName) => {
    setMenuOpen(false);
    if (setView && viewName) {
      setView(viewName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full font-sans shadow-sm sticky top-0 z-[100]">
      {/* --- Top Contact Bar (HIDDEN ON MOBILE) --- */}
      {/* 'hidden md:flex' se ye sirf tablet aur desktop par dikhega */}
      <div className="hidden md:flex bg-[#FFF1E6] border-b border-orange-100/30">
        <div className="max-w-[1400px] mx-auto px-6 py-2 w-full flex justify-between items-center text-[13px] text-gray-800">
          <div className="flex gap-6 items-center">
            <a href="tel:+917599208222" className="flex items-center gap-2 hover:text-[#E91E63] transition">
              <FaPhoneAlt className="text-[11px]" /> +91 7599208222
            </a>
            <a href="mailto:pradeepshukladecor@gmail.com" className="flex items-center gap-2 hover:text-[#E91E63] transition">
              <FaEnvelope className="text-[11px]" /> pradeepshukladecor@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <a href="#" className="hover:text-[#E91E63] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#E91E63] transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* --- Main Navigation Bar --- */}
      <div className="bg-[#ffe4d5]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" onClick={() => handleLinkClick("home")} className="text-[#E91E63] text-xl md:text-2xl font-serif font-bold tracking-tight">
            PS DECOR
          </Link>

          {/* Desktop Menu (Hidden on screens smaller than 'lg') */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[#334155] text-[12px] font-medium">
            <Link href="/" onClick={() => handleLinkClick("home")} className="text-xl hover:text-[#E91E63] transition">
              <HiOutlineHome strokeWidth={1.5} />
            </Link>
            
            <button onClick={() => handleLinkClick("portfolio")} className="hover:text-[#E91E63] transition uppercase tracking-wider">
              Portfolio
            </button>

            {/* Services Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center gap-1 hover:text-[#E91E63] transition uppercase tracking-wider">
                <span>Services</span>
                <FaChevronDown className="text-[10px]" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-[280px] bg-white shadow-2xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-[#E91E63]">
                {servicesList.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path} 
                    className="block px-5 py-2 text-[11px] text-gray-700 hover:bg-pink-50 hover:text-[#E91E63] transition-colors border-b border-gray-50 last:border-0 uppercase tracking-tight"
                    onClick={() => setMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/wedding-vnues" className="hover:text-[#E91E63] transition uppercase tracking-wider">Venues</Link>
            <Link href="/about" className="hover:text-[#E91E63] transition uppercase tracking-wider">About</Link>
            <Link href="/team" className="hover:text-[#E91E63] transition uppercase tracking-wider">Team</Link>
            <Link href="/why-choose" className="hover:text-[#E91E63] transition uppercase tracking-wider">Why Choose Us</Link>
            <Link href="/award" className="hover:text-[#E91E63] transition uppercase tracking-wider">Awards</Link>
            <Link href="/testimonials" className="hover:text-[#E91E63] transition uppercase tracking-wider">Testimonials</Link>
            <Link href="/blog" className="hover:text-[#E91E63] transition uppercase tracking-wider">Blog</Link>

            <Link href="/contact" className="ml-2 bg-[#E91E63] text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#d81b5a] transition shadow-md font-bold text-[10px] uppercase tracking-widest">
              <IoCall className="text-sm" /> Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (Visible only on mobile/tablet) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-2xl text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* --- Mobile Sidebar Menu --- */}
        <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "translate-x-full"} top-0`}>
          <div className="flex flex-col h-full p-6 pt-24 overflow-y-auto">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-2xl text-gray-700">
              <FaTimes />
            </button>

            <div className="flex flex-col gap-5 text-lg font-medium text-gray-800">
              <Link href="/" onClick={() => handleLinkClick("home")} className="border-b pb-3">Home</Link>
              <button onClick={() => handleLinkClick("portfolio")} className="text-left border-b pb-3">Portfolio</button>
              
              <div>
                <p className="text-[#E91E63] font-bold uppercase text-xs tracking-widest mb-4">Our Services</p>
                <div className="pl-4 flex flex-col gap-4 border-l-2 border-pink-100">
                  {servicesList.map((s, i) => (
                    <Link key={i} href={s.path} className="text-sm hover:text-[#E91E63]" onClick={() => setMenuOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/wedding-vnues" onClick={() => setMenuOpen(false)} className="border-b pb-3">Venues</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="border-b pb-3">About Us</Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="border-b pb-3">Blog</Link>
              
              <Link 
                href="/contact" 
                className="mt-4 bg-[#E91E63] text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}