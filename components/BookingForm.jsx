"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingForm({ venueName }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    rooms: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Check if all fields are filled
    if (Object.values(formData).some(val => val === "")) {
      alert("Please fill all fields!");
      return;
    }
    // Redirect to Thank You page
    router.push('/thankyou');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-pink-50">
      <h3 className="text-center text-[#E91E63] font-bold mb-6 italic">Hi, Book Your Venue</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          required
          name="fullName"
          onChange={handleChange}
          type="text" placeholder="Full name" 
          className="w-full p-4 bg-gray-50 rounded-2xl border outline-none focus:ring-2 ring-pink-500" 
        />
        
        <div className="grid grid-cols-12 gap-2">
          <input name="phone" onChange={handleChange} required type="text" placeholder="+91" className="col-span-3 p-4 bg-gray-50 rounded-2xl border" />
          <input name="email" onChange={handleChange} required type="email" placeholder="Email address" className="col-span-9 p-4 bg-gray-50 rounded-2xl border" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input name="date" onChange={handleChange} required type="date" className="p-4 bg-gray-50 rounded-2xl border" />
          <input name="guests" onChange={handleChange} required type="number" placeholder="No of guests" className="p-4 bg-gray-50 rounded-2xl border" />
        </div>

        <input name="rooms" onChange={handleChange} required type="number" placeholder="No of rooms" className="w-full p-4 bg-gray-50 rounded-2xl border" />
        
        <div className="bg-gray-50 p-4 rounded-2xl">
          <p className="text-xs font-bold mb-2">Function Type</p>
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input type="radio" name="type" value="Pre-Wedding" onChange={handleChange} required /> Pre-Wedding
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="type" value="Wedding" onChange={handleChange} /> Wedding
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#E91E63] text-white py-4 rounded-full font-bold shadow-lg hover:bg-[#c2185b] transition">
          Check Availability & Prices
        </button>
      </form>
    </div>
  );
}