"use client";
import React from "react";

export default function AuraSection() {
  const handleViewMagazine = () => {
    // Replace with your actual hosted PDF link
    window.open("/aura-magazine.pdf", "_blank");
  };

  const handleDownloadPDF = () => {
    // Triggers an automatic download of the PDF
    const link = document.createElement("a");
    link.href = "/aura-magazine.pdf"; 
    link.download = "Aura_Magazine_PS_Decor.pdf";
    link.click();
  };

  return (
    <section className="bg-[#FFF1E0] py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#001f3f] mb-6">
          Aura – The Signature Magazine of PS Decor
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#4a5568] text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
          Aura is the storytelling heart of PS Decor, a refined showcase of artistry, luxury, and unforgettable celebrations. 
          Each edition captures the spirit behind our most spectacular weddings and events, revealing the creative vision, 
          intricate craftsmanship, and design philosophy that transform venues into extraordinary experiences.
        </p>

        {/* Buttons Container */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  
  {/* 1. VIEW MAGAZINE - Naye tab mein PDF open hogi */}
  <a
    href="/files/psdecor-magazine(2).pdf" 
    target="_blank"                     
    rel="noopener noreferrer"           
    className="bg-[#E91E63] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#d81b5a] transition-all shadow-md w-full sm:w-auto text-center cursor-pointer"
  >
    View Magazine
  </a>

  {/* 2. DOWNLOAD PDF - Direct download trigger karega */}
  <a
    href="/files/psdecor-magazine(2).pdf" 
    download="PS_Decor_Magazine.pdf"   
    className="bg-white border border-[#E91E63] text-[#E91E63] px-10 py-3 rounded-md font-semibold hover:bg-pink-50 transition-all shadow-sm w-full sm:w-auto text-center cursor-pointer"
  >
    Download PDF
  </a>

</div>
      </div>
    </section>
  );
}