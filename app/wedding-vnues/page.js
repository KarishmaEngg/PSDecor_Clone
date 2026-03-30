"use client";
import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Star, MapPin, Building2, Search, Home, Globe, 
  RotateCcw, ChevronLeft, ChevronRight, SlidersHorizontal, 
  LayoutGrid, List, Users, Bed 
} from 'lucide-react';

// --- Items per page ---
const ITEMS_PER_PAGE = 6;

// --- Mock Data (Aap isse apni FINAL_VENUES file se replace kar sakte hain) ---
const allVenues = [
  { id: 1, slug: "taj-corbett-resort", name: "Taj Corbett Resort & Spa", city: "Jim Corbett", state: "Uttarakhand", type: "5 Star Resort", rating: 4.8, reviews: 45, capacity: "150-400", rooms: 64, img: "/taj1.webp", desc: "Experience luxury at the heart of the wilderness with world-class amenities." },
  { id: 2, slug: "tarangi-resort", name: "Tarangi Resort & Spa", city: "Jim Corbett", state: "Uttarakhand", type: "5 Star Resort", rating: 4.7, reviews: 33, capacity: "100-1000", rooms: 102, img: "/tarangi.webp", desc: "Riverside luxury with stunning forest views and expansive wedding lawns." },
  { id: 3, slug: "evara-resort", name: "Evara Resort", city: "Jim Corbett", state: "Uttarakhand", type: "Contemporary Resort", rating: 4.6, reviews: 29, capacity: "200-350", rooms: 50, img: "/evara.webp", desc: "Modern architecture meets nature for a sophisticated wedding experience." },
  { id: 4, slug: "wyndham-garden", name: "Wyndham Garden", city: "Jim Corbett", state: "Uttarakhand", type: "Luxury Resort", rating: 4.6, reviews: 14, capacity: "300-600", rooms: 80, img: "/wyndham.webp", desc: "Perfect blend of comfort and style for grand celebrations." },
  { id: 5, slug: "madhuram-resort", name: "Madhuram Resort & Banquet", city: "Moradabad", state: "Uttar Pradesh", type: "Luxury Banquet", rating: 4.5, reviews: 42, capacity: "300-800", rooms: 45, img: "/madhuram.webp", desc: "Spacious banquets and elegant decor in the heart of Moradabad." },
  { id: 6, slug: "sterling-mussoorie", name: "Sterling Mussoorie", city: "Mussoorie", state: "Uttarakhand", type: "Resort", rating: 4.5, reviews: 29, capacity: "100-250", rooms: 60, img: "/sterling.webp", desc: "Scenic mountain views providing a dreamy backdrop for your big day." },
  { id: 7, slug: "radisson-blu", name: "Radisson Blu", city: "Moradabad", state: "Uttar Pradesh", type: "5 Star Hotel", rating: 4.7, reviews: 50, capacity: "200-500", rooms: 100, img: "/redison.webp", desc: "The gold standard of hospitality and luxury for urban weddings." },
];

function VenueContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // View States
  const [viewType, setViewType] = useState('grid'); 
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [selectedState, setSelectedState] = useState(searchParams.get('state') || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || "");
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Lists for dropdowns
  const statesList = ["Uttarakhand", "Uttar Pradesh"];
  const citiesList = [...new Set(allVenues.map(v => v.city))];
  const typesList = [...new Set(allVenues.map(v => v.type))];

  // Filter Logic
  const filteredVenues = useMemo(() => {
    return allVenues.filter(venue => {
      const matchesSearch = searchTerm ? venue.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) : true;
      const matchesState = selectedState ? venue.state === selectedState : true;
      const matchesCity = selectedCity ? venue.city === selectedCity : true;
      const matchesType = selectedType ? venue.type === selectedType : true;
      return matchesSearch && matchesState && matchesCity && matchesType;
    });
  }, [searchTerm, selectedState, selectedCity, selectedType]);

  const totalPages = Math.ceil(filteredVenues.length / ITEMS_PER_PAGE);
  const paginatedVenues = filteredVenues.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedState("");
    setSelectedCity("");
    setSelectedType("");
    router.push(pathname);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-10">
      
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-gray-800">Premium Wedding Venues</h1>
          <p className="text-gray-500 italic mt-1">Explore our selection of luxury wedding venues</p>
        </div>
        
        {/* View Toggle */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-pink-100 gap-1">
          <button onClick={() => setViewType('grid')} className={`p-2.5 rounded-lg transition-all ${viewType === 'grid' ? 'bg-[#e91e63] text-white shadow-md' : 'text-gray-400 hover:bg-pink-50'}`}>
            <LayoutGrid size={20} />
          </button>
          <button onClick={() => setViewType('list')} className={`p-2.5 rounded-lg transition-all ${viewType === 'list' ? 'bg-[#e91e63] text-white shadow-md' : 'text-gray-400 hover:bg-pink-50'}`}>
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Main Search & Filters Bar */}
      <div className="bg-white rounded-[2.5rem] shadow-xl p-4 mb-12 border border-pink-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative flex items-center">
            <Search className="absolute left-4 text-gray-400" size={18} />
            <input 
              type="text"
              value={searchTerm}
              placeholder="Search venues by name..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-pink-50/30 outline-none text-gray-700 font-semibold text-sm border border-transparent focus:border-pink-200"
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>

          {/* Dropdowns */}
          <div className="md:col-span-6 flex flex-wrap md:flex-nowrap gap-3">
            <FilterDropdown icon={<Globe size={16} className="text-[#e91e63]" />} label="State" value={selectedState} options={statesList} onChange={(v) => {setSelectedState(v); setCurrentPage(1);}} />
            <FilterDropdown icon={<MapPin size={16} className="text-pink-400" />} label="City" value={selectedCity} options={citiesList} onChange={(v) => {setSelectedCity(v); setCurrentPage(1);}} />
            <FilterDropdown icon={<Home size={16} className="text-pink-400" />} label="Type" value={selectedType} options={typesList} onChange={(v) => {setSelectedType(v); setCurrentPage(1);}} />
          </div>

          {/* Reset Button */}
          <div className="md:col-span-2">
            <button onClick={resetFilters} className="w-full bg-slate-900 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#e91e63] transition-all text-sm">
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* Venue Cards Container */}
      <div className={viewType === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-8"}>
        {paginatedVenues.length > 0 ? (
          paginatedVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} viewType={viewType} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
             <p className="text-2xl font-bold text-gray-300">No venues found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-16">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="w-12 h-12 rounded-2xl border bg-white flex items-center justify-center disabled:opacity-30 hover:bg-pink-50 transition-all shadow-sm"><ChevronLeft size={20} /></button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button key={i+1} onClick={() => setCurrentPage(i+1)} className={`w-12 h-12 rounded-2xl text-sm font-bold transition-all shadow-sm ${currentPage === i+1 ? 'bg-[#e91e63] text-white scale-110' : 'bg-white border text-gray-500 hover:bg-pink-50'}`}>{i+1}</button>
            ))}
          </div>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="w-12 h-12 rounded-2xl border bg-white flex items-center justify-center disabled:opacity-30 hover:bg-pink-50 transition-all shadow-sm"><ChevronRight size={20} /></button>
        </div>
      )}
    </div>
  );
}

// --- Reusable Filter Dropdown ---
const FilterDropdown = ({ icon, label, value, options, onChange }) => (
  <div className="flex items-center bg-pink-50/30 px-4 py-4 rounded-full border border-transparent hover:border-pink-200 transition-all flex-1 min-w-[140px]">
    {icon}
    <select className="outline-none bg-transparent font-bold text-gray-700 w-full text-xs cursor-pointer ml-2 appearance-none" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select {label}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

// --- Venue Card Component ---
const VenueCard = ({ venue, viewType }) => {
  const isList = viewType === 'list';
  return (
    <Link href={`/wedding-vnues/${venue.slug}`} className="group">
      <div className={`bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex ${isList ? 'flex-col md:flex-row' : 'flex-col'} h-full`}>
        
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isList ? 'md:w-[40%] aspect-[16/10] md:aspect-auto' : 'h-64'}`}>
          <img src={venue.img} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold text-xs text-[#e91e63]">
            <Star size={14} className="fill-[#e91e63]" /> {venue.rating}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-7 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#e91e63] transition-colors">{venue.name}</h3>
          
          <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold mb-4 italic">
            <MapPin size={14} className="text-[#e91e63]" /> {venue.city}, {venue.state}
          </div>

          {isList && (
            <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
              {venue.desc}
            </p>
          )}

          <div className="mt-auto pt-5 border-t border-pink-50 flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Users size={16} className="text-pink-300" /> {venue.capacity} Pax</span>
              <span className="flex items-center gap-1.5"><Bed size={16} className="text-pink-300" /> {venue.rooms} Rooms</span>
            </div>
            <span className="bg-pink-50 text-[#e91e63] px-3 py-1 rounded-full text-[9px]">{venue.type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- Main Page Wrapper ---
export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E6]">
      <Navbar />
      <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh] text-[#e91e63] font-bold animate-pulse">Loading Luxury Venues...</div>}>
        <VenueContent />
      </Suspense>
      <Footer />
    </div>
  );
}