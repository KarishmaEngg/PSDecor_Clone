"use client";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaMapMarkerAlt, FaLayerGroup, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FINAL_VENUES } from "@/data/venues"; 

export default function HeroCarousel() {
  const router = useRouter();
  const dropdownRef = useRef(null);
  
  const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg"];
  const [current, setCurrent] = useState(0);
  const [tab, setTab] = useState("services"); 
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); 

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(i);
  }, [images.length]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { name: "Catering", id: "catering" },
    { name: "Destination Weddings", id: "destination" },
    { name: "Entertainment & Artist", id: "entertainment" },
    { name: "Hospitality & Guest Management", id: "hospitality" },
    { name: "Invitations & Wedding Stationery", id: "invitation" },
    { name: "Luxury Wedding Decor", id: "luxury" },
    { name: "Photography", id: "photography" },
    { name: "Special Effects", id: "effects" },
    { name: "Wedding & Event Decorations", id: "wed-decor" },
    { name: "Wedding Planning & Management", id: "wed_plan" },
    { name: "Wedding Venue Booking", id: "wedding-venues" },
  ];

  // SEARCH LOGIC
  const currentData = tab === "services" ? services : FINAL_VENUES;
  
  const filteredItems = currentData.filter((item) => {
    const searchTerm = query.toLowerCase();
    const matchesName = item.name.toLowerCase().includes(searchTerm);
    const matchesCity = tab === "venues" && item.city?.toLowerCase().includes(searchTerm);
    return matchesName || matchesCity;
  });

  const handleSelection = (item) => {
    setQuery(item.name);
    setOpen(false);
    
    if (tab === "services") {
      router.push(`/services/${item.id}`);
    } else {
      // FIX: Yahan folder ka naam 'wedding-vnues' exact match hona chahiye
      // Aur item.id wahi slug hona chahiye (e.g., 'the-taj-corbett-resort')
      router.push(`/wedding-vnues/${item.id}`);
    }
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
      {/* Background Slider */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-6xl text-black font-serif mb-10 drop-shadow-lg leading-tight">
          Find Your Perfect <br className="md:hidden" /> Wedding Experience
        </h1>

        <div className="relative w-full max-w-4xl" ref={dropdownRef}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-stretch bg-[#fdf2e9] p-2 rounded-3xl md:rounded-full shadow-2xl border border-white/20">
            
            <div className="flex p-1 bg-gray-200/50 rounded-full">
              <button
                onClick={() => { setTab("services"); setQuery(""); setOpen(true); }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all ${
                  tab === "services" ? "bg-[#E91E63] text-white" : "text-gray-600 hover:bg-white/50"
                }`}
              >
                <FaLayerGroup /> Services
              </button>
              <button
                onClick={() => { setTab("venues"); setQuery(""); setOpen(true); }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all ${
                  tab === "venues" ? "bg-[#E91E63] text-white" : "text-gray-600 hover:bg-white/50"
                }`}
              >
                <FaMapMarkerAlt /> Venues
              </button>
            </div>

            <div className="flex flex-1 items-center px-5 py-3 md:py-0 border-y md:border-y-0 md:border-x border-gray-300">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                placeholder={tab === "services" ? "Search catering, decor..." : "Search hotel name or city..."}
                className="w-full bg-transparent outline-none text-gray-800 font-medium text-sm"
              />
            </div>

            <button 
              onClick={() => filteredItems.length > 0 && handleSelection(filteredItems[0])}
              className="bg-[#E91E63] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d81b5a] transition"
            >
              Search
            </button>
          </div>

          {/* ===== DROPDOWN ===== */}
          {open && (
            <div className="absolute left-0 right-0 mt-3 rounded-[2rem] overflow-hidden shadow-2xl z-[100] border border-white/20">
              <div className="bg-[#fdf2e9] px-8 py-4 flex justify-between items-center border-b border-gray-200">
                <span className="text-[10px] font-black text-[#E91E63] uppercase tracking-[0.2em]">
                  {tab === "services" ? "Recommended Services" : "Results for Venues & Cities"}
                </span>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-black"><FaTimes /></button>
              </div>

              <div className="bg-white max-h-[350px] overflow-y-auto">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-1">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="px-5 py-3 text-left text-[13px] text-gray-700 cursor-pointer hover:bg-pink-50 hover:text-[#E91E63] rounded-xl transition-all flex items-center gap-3 font-semibold border border-transparent"
                        onClick={() => handleSelection(item)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-300 group-hover:bg-[#E91E63]" />
                        <div className="flex flex-col">
                          <span className="truncate">{item.name}</span>
                          {tab === "venues" && item.city && (
                            <span className="text-[10px] text-gray-400 font-normal">{item.city}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-10 text-gray-400 text-sm italic text-center">No match found for "{query}"</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dots Slider */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-[#E91E63]" : "w-3 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}