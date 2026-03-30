"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/OurTeam';


const TeamMember = ({ name, title, description }) => (
  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm mb-10 last:mb-0">
    <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
    <p className="text-sm text-gray-600 mb-6 font-medium">{title}</p>
    <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] text-justify">
      {description.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  </div>
);

export default function TeamPage() {

    
  const teamData = [
    {
      name: "PRADEEP SHUKLA",
      title: "Founder, PS Decor | Hospitality Visionary - Wedding Planning Expert",
      description: [
        "Settled in Moradabad, Uttar Pradesh, Pradeep Shukla is a name synonymous with heartfelt hospitality, quiet leadership, and unwavering dedication to guest experience. Long before luxury weddings became an industry, his philosophy was already clear: service is sacred, and guests must always feel valued, welcomed, and remembered.",
        "Over the years, he has developed and managed a diverse portfolio of properties across Moradabad, Ramnagar, Jim Corbett, and Gajraula, creating destinations that seamlessly blend comfort, warmth, and celebration.",
        "As the Founder of PS Decor, Pradeep Shukla laid the foundation of a brand built on hospitality before aesthetics, experience before execution, and emotion before transaction."
      ]
    },
    {
      name: "CHARU SHUKLA",
      title: "Co-Founder, Vasterior | Co-Founder, PS Decor | Interior Designer • Luxury Wedding Creative Director",
      description: [
        "Born and raised in Moradabad, Charu Shukla has always carried an instinct for aesthetics, organisation, and large-scale celebrations. Her journey began in the quiet discipline of St. Mary's Convent School, where she developed both her cultural sensitivity and her ability to bring people together.",
        "In 2021, Charu and Raunak Shukla built something deeply personal: PS Decor. A luxury wedding management company born from passion, precision, and a shared dream of creating celebrations that feel both grand and intimate.",
        "Today, for PS Decor, Charu stands as a creative force; a designer, storyteller, manager, and visionary; shaping not just events, but experiences that stay with people long after they leave the room."
      ]
    },
    {
      name: "RAUNAK SHUKLA",
      title: "Co-Founder, PS Decor | Hotelier • Hospitality Visionary • Luxury Wedding Producer",
      description: [
        "Raunak Shukla belongs to the second kind. Raised in Ghaziabad, he grew up in a world where hospitality shaped everyday life, where welcoming a guest felt as natural as breathing and creating comfort came from instinct rather than instruction.",
        "In 2021, Raunak and Charu Shukla transformed their shared dream into PS Decor, a brand that celebrates stories, honours emotion, and elevates design with soul. Their partnership ignites a vision where elegance dances with meaning and where every celebration reflects the couple it belongs to.",
        "Under Raunak's guidance, PS Decor carries a reputation for service-led luxury, heartfelt storytelling, and celebrations that glow long after the lights dim."
      ]
    }
  ];

  return (
    
    <div className="bg-[#FFF1E6] min-h-screen flex flex-col">
      {/* 1. Navbar at the top */}
      <Navbar />
     <TeamSection/>
      {/* 2. Main Team Content */}
      <main className="flex-grow py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto">
          {teamData.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </main>
    
      {/* 3. Footer at the bottom */}
      <Footer />
    </div>
  );
}