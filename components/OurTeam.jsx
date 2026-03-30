// components/OurTeam.jsx
import React from 'react';
import Image from 'next/image';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Pradeep Shukla",
      role: "Co-Founder",
      desc: "Crafting luxurious weddings with imaginative excellence since 18 years.",
      img: "/m1.jpg" 
    },
    {
      name: "Mrs. Charu Shukla",
      role: "Wedding Designer",
      desc: "Blending vision and detail, Charu creates unforgettable events.",
      img: "/m2.jpg"
    },
    {
      name: "Mr. Rounak Shukla",
      role: "Co-Founder & Creative Head",
      desc: "A hotelier and wedding planner, blends imagination and precision for seamless events.",
      img: "/m3.jpg"
    }
  ];

  return (
    <section className="bg-[#FFF5E9] pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-widest uppercase mb-2">
            Our Team
          </h2>
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-400">❤</span>
            <div className="h-[1px] w-12 bg-pink-300"></div>
          </div>
          <p className="text-pink-600 font-medium italic">
            Meet the passionate individuals behind our beautiful designs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm">
              <div className="relative h-80 w-full mb-6 overflow-hidden">
                <Image 
                  src={member.img} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center pb-4">
                <h3 className="text-[#B41E45] font-bold text-lg uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-pink-500 text-sm italic mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;